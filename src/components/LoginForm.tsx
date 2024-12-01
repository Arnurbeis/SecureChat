import React, { useState } from 'react';
import { UserCircle2, Upload } from 'lucide-react';
import { useChatStore } from '../store/chatStore';

export const LoginForm: React.FC = () => {
  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState<string>('');
  const setUser = useChatStore(state => state.setUser);

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatar(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim().length >= 2) {
      setUser(name, avatar);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md">
        <div className="flex flex-col items-center mb-8">
          <div className="relative group">
            {avatar ? (
              <img
                src={avatar}
                alt="Avatar"
                className="w-24 h-24 rounded-full object-cover border-4 border-blue-500"
              />
            ) : (
              <UserCircle2 className="w-24 h-24 text-blue-500" />
            )}
            <label className="absolute bottom-0 right-0 bg-blue-500 rounded-full p-2 cursor-pointer hover:bg-blue-600 transition-colors">
              <Upload className="w-4 h-4 text-white" />
              <input
                type="file"
                className="hidden"
                accept="image/*"
                onChange={handleAvatarChange}
              />
            </label>
          </div>
          <h1 className="text-2xl font-bold text-gray-800 mt-4">Welcome to SecureChat</h1>
          <p className="text-gray-600 text-center mt-2">
            Enter your name and choose an avatar to join the conversation
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
              placeholder="Enter your name"
              minLength={2}
              required
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-200 font-medium"
          >
            Join Chat
          </button>
        </form>
      </div>
    </div>
  );
};