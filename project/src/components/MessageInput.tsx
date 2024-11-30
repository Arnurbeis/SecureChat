import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { useChatStore } from '../store/chatStore';

export const MessageInput: React.FC = () => {
  const [newMessage, setNewMessage] = useState('');
  const sendMessage = useChatStore(state => state.sendMessage);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim() && sendMessage(newMessage)) {
      setNewMessage('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        placeholder="Type your message..."
        className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-200 flex items-center gap-2"
        disabled={!newMessage.trim()}
      >
        <Send className="w-5 h-5" />
        Send
      </button>
    </form>
  );
};