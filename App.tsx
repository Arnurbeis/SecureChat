import React from 'react';
import { useChatStore } from './store/chatStore';
import { LoginForm } from './components/LoginForm';
import { Header } from './components/Header';
import { MessageList } from './components/MessageList';
import { MessageInput } from './components/MessageInput';

function App() {
  const user = useChatStore(state => state.user);

  if (!user) {
    return <LoginForm />;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="flex-1 max-w-4xl w-full mx-auto p-4 flex flex-col">
        <MessageList />
        <MessageInput />
      </main>
    </div>
  );
}

export default App;