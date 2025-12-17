import React from 'react';
import DashboardLayout from '../layouts/DashboardLayout';
import { ChatHeader } from '../components/ChatHeader';
import { ChatWindow } from '../components/ChatWindow';

const Chat: React.FC = () => {
  return (
    <DashboardLayout>
      {/* Chat Header */}
      <ChatHeader />

      {/* Chat Window (Messages + Input) */}
      <ChatWindow />
    </DashboardLayout>
  );
};

export default Chat;