import React from 'react';
import { MoreHorizontal, Filter, TrendingUp } from 'lucide-react';

interface WelcomeCardProps {
  username: string;
}

const tags: string[] = ['All', 'Courses', 'Societies', 'Events', 'Near me'];

const WelcomeCard: React.FC<WelcomeCardProps> = ({ username }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm">
    <div className="flex justify-between items-start mb-4">
      <div>
        <h2 className="text-xl font-semibold text-gray-900">
          Welcome back, <span className="text-green-600">{username}</span>
        </h2>
        <p className="text-sm text-gray-500">
          Keep up with your campus, startups & communities
        </p>
      </div>
      <div className="flex items-center space-x-2">
        <div className="text-sm text-gray-600">
          • <span className="text-green-600 font-medium">Profile setup 90%</span>
        </div>
        <MoreHorizontal size={20} className="text-gray-400 cursor-pointer" />
      </div>
    </div>

    <div className="flex flex-wrap items-center space-x-2">
      {tags.map((tag) => (
        <span 
          key={tag} 
          className="px-3 py-1 text-sm rounded-full text-gray-700 bg-gray-100 hover:bg-gray-200 cursor-pointer"
        >
          {tag}
        </span>
      ))}
      <span className="px-3 py-1 text-sm rounded-full text-gray-700 border border-gray-300 flex items-center space-x-1 cursor-pointer">
        <Filter size={14} /> 
        <span>Filters</span>
      </span>
      <span className="px-3 py-1 text-sm rounded-full bg-orange-100 text-orange-600 font-medium cursor-pointer flex items-center space-x-1">
        <TrendingUp size={14} /> 
        <span>Alumni lead</span>
      </span>
    </div>
  </div>
);

export default WelcomeCard;