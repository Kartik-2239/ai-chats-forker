type ChatMessage = {
  role: "user" | "assistant";
  text: string;
};

type Fork = {
  target: "ChatGPT" | "Claude" | "Gemini";
  chats: ChatMessage[];
}


const pendingForks = new Map<number, Fork>();

export default defineBackground(() => {
  browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message?.type === "CONTENT_READY") {
      const tabId = sender.tab?.id;

      if (tabId !== undefined && pendingForks.has(tabId)) {
        const fork = pendingForks.get(tabId)!;
        pendingForks.delete(tabId);

        browser.tabs.sendMessage(tabId, {
          type: "FORKED_CHAT",
          payload: {
            chats: fork.chats,
            target: fork.target
          },
        });
      }

      return;
    }

    if (message?.type === "FORK_CHAT") {
      browser.tabs
        .create({ url: message.payload.url })
        .then((tab) => {
          if (tab.id === undefined) {
            throw new Error("Created tab has no id");
          }
          const temp: Fork = {
            target: message.payload.target,
            chats: message.payload.chats
          }
          pendingForks.set(tab.id, temp);
          sendResponse({ ok: true, tabId: tab.id });
        })
        .catch((error) => {
          sendResponse({ ok: false, error: String(error) });
        });

      return true;
    }
  });
});