import React from 'react';
import { Calendar, Image, Send } from 'lucide-react';

/**
 * Component for creating a new post.
 * @param {string} props.userAvatar - URL of the current user's avatar.
 */
const PostCreator = ({ userAvatar }) => {
  const PostTypeButton = ({ children }) => (
    <button className="px-4 py-2 text-sm font-medium text-gray-600 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
      {children}
    </button>
  );

  return (
    <div className="p-4 bg-white rounded-xl shadow-sm">
      {/* Input Area */}
      <div className="flex items-start mb-4">
        <img
          className="h-10 w-10 rounded-full object-cover mr-4 mt-1"
          src={userAvatar}
          alt="User Avatar"
        />
        <div className="flex-1">
          <div className="w-full p-4 bg-gray-50 rounded-2xl">
            <input
              className="w-full bg-transparent outline-none placeholder-gray-500 text-sm"
              placeholder="Share an update with your campus..."
            />
            {/* Post Type Buttons */}
            <div className="flex space-x-2 mt-3">
              <PostTypeButton>Event</PostTypeButton>
              <PostTypeButton>Question</PostTypeButton>
              <PostTypeButton>Project</PostTypeButton>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end items-center space-x-3 pr-2">
        <button className="text-gray-500 hover:text-gray-700 p-2 rounded-full hover:bg-gray-100 transition-colors">
          <Image className="h-5 w-5" />
        </button>
        <button className="text-gray-500 hover:text-gray-700 p-2 rounded-full hover:bg-gray-100 transition-colors">
          <Calendar className="h-5 w-5" />
        </button>
        
        {/* Post Button (Purple) */}
        <button className="flex items-center px-5 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-xl text-white font-medium text-sm transition-colors shadow-md shadow-indigo-500/30">
          <Send className="h-4 w-4 mr-1 hidden sm:inline" />
          Post
        </button>
      </div>
    </div>
  );
};

export default PostCreator;