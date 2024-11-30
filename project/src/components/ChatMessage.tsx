import React from 'react';
import { format } from 'date-fns';
import { UserCircle2 } from 'lucide-react';
import { Message } from '../types';
import { useChatStore } from '../store/chatStore';

interface ChatMessageProps {
  message: Message;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const currentUser = useChatStore(state => state.user);
  const isOwnMessage = currentUser?.id === message.userId;

  return (
    <div className={`flex ${isOwnMessage ? 'justify-end' : 'justify-start'} mb-4 items-start gap-2`}>
      {!isOwnMessage && (
        <div className="flex-shrink-0">
          {message.userAvatar ? (
            <img
              src={message.userAvatar}
              alt={message.userName}
              className="w-8 h-8 rounded-full object-cover"
            />
          ) : (
            <UserCircle2 className="w-8 h-8 text-gray-400" />
          )}
        </div>
      )}
      <div
        className={`max-w-[70%] rounded-lg p-3 ${
          isOwnMessage
            ? 'bg-blue-500 text-white rounded-br-none'
            : 'bg-gray-100 text-gray-800 rounded-bl-none'
        }`}
      >
        {!isOwnMessage && (
          <div className="text-sm font-medium mb-1 text-gray-600">
            {message.userName}
          </div>
        )}
        <p className="break-words">{message.content}</p>
        <div
          className={`text-xs mt-1 ${
            isOwnMessage ? 'text-blue-100' : 'text-gray-500'
          }`}
        >
          {format(new Date(message.timestamp), 'HH:mm')}
        </div>
      </div>
      {isOwnMessage && (
        <div className="flex-shrink-0">
          {currentUser?.avatar ? (
            <img
              src={currentUser.avatar}
              alt={currentUser.name}
              className="w-8 h-8 rounded-full object-cover"
            />
          ) : (
            <UserCircle2 className="w-8 h-8 text-gray-400" />
          )}
        </div>
      )}
    </div>
  );
};