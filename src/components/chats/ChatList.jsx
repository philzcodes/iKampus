import React, { useState } from 'react';
import ChatListItem from './ChatListItem';

// Mock Avatars
const MOCK_AVATARS = {
  teacher: 'https://i.pravatar.cc/150?img=65',
  coreTeam: 'https://i.pravatar.cc/150?img=66',
  maya: 'https://i.pravatar.cc/150?img=67',
  leo: 'https://i.pravatar.cc/150?img=68',
  year2: 'https://i.pravatar.cc/150?img=69',
  hackathon: 'https://i.pravatar.cc/150?img=70',
};

// Mock Chat Data
const pinnedChats = [
  {
    title: 'Course teacher - MCP',
    subtitle: 'Share updated lecture slides and clarify week 3 assignment scope.',
    time: '2 min ago',
    avatarUrl: MOCK_AVATARS.teacher,
    unreadCount: 3,
    isActive: true, // This chat is highlighted in the image
    isPinned: true,
  },
  {
    title: 'Startup club core team',
    subtitle: "Let's finalize the pitch deck before Friday's demo night.",
    time: '1 h',
    avatarUrl: MOCK_AVATARS.coreTeam,
    unreadCount: 5,
    isPinned: true,
  },
];

const directMessages = [
  {
    title: 'Maya Singh',
    subtitle: 'Can you share your notes from the AI ethics lecture?',
    time: 'Yesterday',
    avatarUrl: MOCK_AVATARS.maya,
  },
  {
    title: 'Leo Martinez',
    subtitle: "I've pushed the latest changes to the iKampus repo.",
    time: 'Mon',
    avatarUrl: MOCK_AVATARS.leo,
  },
];

const groupChats = [
  {
    title: 'Year 2 : Computer Science',
    subtitle: 'Reminder: project submission deadline is next Thursday.',
    time: 'Sun',
    avatarUrl: MOCK_AVATARS.year2,
  },
  {
    title: 'Hackathon squad',
    subtitle: 'Share your ideas for the campus wellbeing challenge.',
    time: 'Sat',
    avatarUrl: MOCK_AVATARS.hackathon,
  },
];

const ChatList = () => {
  const [activeTab, setActiveTab] = useState('All');

  const TabButton = ({ name }) => (
    <button
      className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
        activeTab === name
          ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/30'
          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
      }`}
      onClick={() => setActiveTab(name)}
    >
      {name}
    </button>
  );

  return (
    <div className="bg-white p-4 h-full overflow-y-auto">
      {/* Tab Filters */}
      <div className="flex space-x-2 mb-6">
        <TabButton name="All" />
        <TabButton name="Direct" />
        <TabButton name="Groups" />
      </div>

      {/* --- Pinned Section --- */}
      <h3 className="text-sm font-semibold text-gray-500 uppercase mb-3 px-3">
        Pinned
      </h3>
      <div className="mb-8">
        {pinnedChats.map((chat, index) => (
          <ChatListItem key={`pinned-${index}`} {...chat} />
        ))}
      </div>

      {/* --- Direct Messages Section --- */}
      <h3 className="text-sm font-semibold text-gray-500 uppercase mb-3 px-3">
        Direct messages
      </h3>
      <div className="mb-8">
        {directMessages.map((chat, index) => (
          <ChatListItem key={`direct-${index}`} {...chat} />
        ))}
      </div>

      {/* --- Groups Section --- */}
      <h3 className="text-sm font-semibold text-gray-500 uppercase mb-3 px-3">
        Groups
      </h3>
      <div className="mb-4">
        {groupChats.map((chat, index) => (
          <ChatListItem key={`group-${index}`} {...chat} />
        ))}
      </div>
    </div>
  );
};

export default ChatList;