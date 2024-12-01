import React from 'react';
import { LogOut, UserCircle2 } from 'lucide-react';
import { useChatStore } from '../store/chatStore';

export const Header: React.FC = () => {
  const { user, logout } = useChatStore();

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-4xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-semibold text-gray-800">SecureChat</h1>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            {user?.avatar ? (
              <img
                src={user.avatar}
                alt={user.name}
                className="w-8 h-8 rounded-full object-cover"
              />
            ) : (
              <UserCircle2 className="w-8 h-8 text-gray-400" />
            )}
            <span className="text-gray-600">Welcome, {user?.name}</span>
          </div>
          <button
            onClick={logout}
            className="text-gray-600 hover:text-gray-800 transition-colors"
            title="Logout"
          >
            <LogOut className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
};