import React from 'react';
import { ChatMessage } from './ChatMessage';
import { useChatStore } from '../store/chatStore';

export const MessageList: React.FC = () => {
  const messages = useChatStore(state => state.messages);

  return (
    <div className="flex-1 bg-white rounded-lg shadow-sm mb-4 p-4 overflow-y-auto max-h-[calc(100vh-12rem)]">
      {messages.length === 0 ? (
        <div className="text-center text-gray-500 mt-8">
          No messages yet. Start the conversation!
        </div>
      ) : (
        messages.map(message => (
          <ChatMessage key={message.id} message={message} />
        ))
      )}
    </div>
  );
};