import React from 'react';
import { MessageSquare } from 'lucide-react';
import ChatList from '../components/chats/ChatList';
import ChatDetailEmpty from '../components/chats/ChatDetailEmpty';
import DashboardLayout from '../layouts/DashboardLayout';

const ChatsPage = () => {
  return (
    <DashboardLayout>
      {/* Header */}
      <header className="flex justify-between items-center px-6 pt-6 pb-4 border-b border-gray-100">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Chats</h1>
          <p className="text-sm text-gray-500">
            Direct messages, study groups, and course teachers
          </p>
        </div>
        <button className="text-gray-500 hover:text-gray-700 p-1">
          <MessageSquare className="h-6 w-6" />
        </button>
      </header>

      {/* Two-Column Layout */}
      <div className="flex h-[calc(100vh-200px)]"> {/* Adjusted height for view */}
        {/* Left Column (Chat List) */}
        <div className="w-full max-w-sm border-r border-gray-200">
          <ChatList />
        </div>

        {/* Right Column (Chat Detail/Empty State) */}
        <div className="flex-1">
          <ChatDetailEmpty />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ChatsPage;