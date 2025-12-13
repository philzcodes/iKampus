import React from 'react';

const ChatListItem = ({ title, subtitle, time, avatarUrl, unreadCount, isActive, isPinned }) => {
  return (
    <div className={`flex items-center p-3 rounded-lg cursor-pointer transition-colors ${
      isActive ? 'bg-indigo-50 border-l-4 border-indigo-600' : 'hover:bg-gray-50'
    }`}>
      <img
        src={avatarUrl}
        alt={title}
        className="w-10 h-10 rounded-full mr-3"
      />
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between">
          <h4 className={`text-sm font-medium truncate ${
            isActive ? 'text-indigo-900' : 'text-gray-900'
          }`}>
            {title}
          </h4>
          <span className="text-xs text-gray-500 ml-2 flex-shrink-0">
            {time}
          </span>
        </div>
        <p className="text-sm text-gray-600 truncate mt-1">
          {subtitle}
        </p>
      </div>
      {unreadCount && (
        <div className="ml-2 flex-shrink-0">
          <span className="inline-flex items-center justify-center w-5 h-5 text-xs font-medium text-white bg-indigo-600 rounded-full">
            {unreadCount}
          </span>
        </div>
      )}
      {isPinned && (
        <div className="ml-2 flex-shrink-0">
          <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 2L13 7H17L14 10L15 15L10 12L5 15L6 10L3 7H7L10 2Z" />
          </svg>
        </div>
      )}
    </div>
  );
};

export default ChatListItem;