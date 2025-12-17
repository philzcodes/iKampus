import React from 'react';
import { MessageSquare, Bell, ChevronDown } from 'lucide-react';
import FeedPost from '../components/posts/FeedPost';
import PostCreator from '../components/posts/PostCreator';
import DashboardLayout from '../layouts/DashboardLayout';

// Mock Data
const MOCK_AVATARS = {
  user: 'https://i.pravatar.cc/150?img=48', // User creating the post
  csSociety: 'https://i.pravatar.cc/150?img=50',
  mayaPatel: 'https://i.pravatar.cc/150?img=51',
  greenCampus: 'https://i.pravatar.cc/150?img=52',
};

const feedData = [
  {
    profileImage: MOCK_AVATARS.csSociety,
    name: 'CS Society',
    subTitle: 'University of Bristol - Society',
    timeAgo: '2h ago',
    type: 'Event',
    content:
      "Hackathon this weekend! Join us for a 24-hour campus-wide build sprint. Teams of 3-5, all skill levels welcome. Prizes, snacks, and mentors from local startups.",
    likes: 32,
    comments: 14,
  },
  {
    profileImage: MOCK_AVATARS.mayaPatel,
    name: 'Maya Patel',
    subTitle: '2nd year - Computer Science',
    timeAgo: '4h ago',
    type: 'Question',
    content:
      "Anyone know good quiet study spots on campus after 8pm? Looking for somewhere with sockets and decent Wi-Fi that isn't always packed.",
    likes: 18,
    comments: 9,
  },
  {
    profileImage: MOCK_AVATARS.greenCampus,
    name: 'Green Campus Collective',
    subTitle: 'Environment Society',
    timeAgo: 'Yesterday',
    type: 'Campus',
    content:
      "We're organizing a campus clean-up and tree-planting day next Thursday. Volunteers will get free lunch and certificates for participation. Sign up via the link in comments.",
    likes: 45,
    comments: 21,
  },
];

const CampusFeedPage = () => {
  const TabButton = ({ children, isActive }) => (
    <button
      className={`px-3 py-1 text-sm font-medium transition-colors ${
        isActive
          ? 'text-indigo-600 bg-indigo-50 rounded-full'
          : 'text-gray-600 hover:text-indigo-600'
      }`}
    >
      {children}
    </button>
  );

  return (
    <DashboardLayout>
      <div className="max-w-3xl mx-auto">
        {/* Header Bar */}
        <header className="flex justify-between items-center mb-6 py-2 border-b border-gray-100">
          <div className="text-left">
            <h1 className="text-xl font-bold text-gray-800">Campus feed</h1>
            <p className="text-sm text-gray-500">
              See what's happening across your university community
            </p>
          </div>
          <div className="flex space-x-4">
            <button className="text-gray-500 hover:text-gray-700">
              <MessageSquare className="h-6 w-6" />
            </button>
            <button className="text-gray-500 hover:text-gray-700">
              <Bell className="h-6 w-6" />
            </button>
          </div>
        </header>

        {/* 1. Post Creation Area */}
        <div className="mb-6">
          <PostCreator userAvatar={MOCK_AVATARS.user} />
        </div>

        {/* 2. Feed Navigation Tabs */}
        <div className="flex justify-between items-center mb-6 border-b border-gray-200 pb-2">
          <div className="flex space-x-4">
            <TabButton isActive={true}>For you</TabButton>
            <TabButton isActive={false}>My university</TabButton>
            <TabButton isActive={false}>My groups</TabButton>
          </div>

          {/* Latest Sort Button */}
          <button className="flex items-center text-sm font-medium text-gray-600 hover:text-indigo-600">
            Latest
            <ChevronDown className="h-4 w-4 ml-1" />
          </button>
        </div>

        {/* 3. Feed Posts List */}
        <div className="space-y-6">
          {feedData.map((post, index) => (
            <FeedPost key={index} {...post} />
          ))}
          {/* Add more posts here */}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default CampusFeedPage;