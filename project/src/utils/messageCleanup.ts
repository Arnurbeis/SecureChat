import { Message } from '../types';

const MAX_MESSAGES = 100;
const MESSAGE_CLEANUP_THRESHOLD = 150;

export const cleanupMessages = (messages: Message[]): Message[] => {
  if (messages.length > MESSAGE_CLEANUP_THRESHOLD) {
    return messages.slice(-MAX_MESSAGES);
  }
  return messages;
};