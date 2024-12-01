export const sanitizeInput = (input: string): string => {
  return input.replace(/<[^>]*>/g, '').trim();
};

export const generateUserId = (): string => {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
};

export const isSpam = (content: string): boolean => {
  const spamPatterns = [
    /\b(viagra|cialis)\b/i,
    /(https?:\/\/[^\s]+)/g,
    /\b([A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,})\b/,
  ];

  return spamPatterns.some(pattern => pattern.test(content));
};

export const rateLimiter = (() => {
  const messageTimestamps: { [key: string]: number[] } = {};
  const WINDOW_MS = 10000; // 10 seconds
  const MAX_MESSAGES = 5;

  return {
    canSendMessage: (userId: string): boolean => {
      const now = Date.now();
      const userTimestamps = messageTimestamps[userId] || [];
      
      // Remove timestamps older than the window
      messageTimestamps[userId] = userTimestamps.filter(
        timestamp => now - timestamp < WINDOW_MS
      );

      return messageTimestamps[userId].length < MAX_MESSAGES;
    },
    recordMessage: (userId: string): void => {
      if (!messageTimestamps[userId]) {
        messageTimestamps[userId] = [];
      }
      messageTimestamps[userId].push(Date.now());
    }
  };
})();