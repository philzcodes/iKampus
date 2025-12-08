import React from 'react';
import { Heart, Share2, CornerUpRight, Zap, User, Star } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

interface PostTagProps {
  text: string;
  bgColor: string;
  textColor: string;
  icon?: LucideIcon;
}

const PostTag: React.FC<PostTagProps> = ({ text, bgColor, textColor, icon: Icon }) => (
  <span className={`flex items-center px-2 py-0.5 rounded text-xs font-medium ${bgColor} ${textColor}`}>
    {Icon && <Icon size={12} className="mr-1" />}
    {text}
  </span>
);

interface FeedPostProps {
  post: {
    type: 'product_society' | 'anonymous_gossip' | 'course_query';
    title?: string;
    time: string;
    location?: string;
    event?: string;
    content?: string;
    label: string;
    reports?: number;
    online?: number;
    stats?: { views: number; comments: number; shares: number };
    isAnonymous?: boolean;
  };
}

const FeedPost: React.FC<FeedPostProps> = ({ post }) => {
  const getPostHeader = () => {
    switch (post.type) {
      case 'product_society':
        return (
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-base font-semibold text-gray-900">{post.title}</h3>
              <p className="text-xs text-gray-500">
                {post.time} | <span className="font-medium">{post.location}</span>
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <PostTag text={post.label} bgColor="bg-red-500" textColor="text-white" />
              <button className="text-xs text-red-500 font-medium border border-red-500 px-2 py-0.5 rounded-full hover:bg-red-50">Report</button>
            </div>
          </div>
        );
      case 'anonymous_gossip':
        return (
          <div className="flex justify-between items-start">
            <div className="flex items-center space-x-2">
              <User size={16} className="text-red-500" />
              <h3 className="text-sm font-semibold text-red-500">Anonymous <span className="text-orange-500">Mental leak</span></h3>
              <span className="text-xs text-gray-500">{post.time}</span>
            </div>
            <button className="text-xs text-red-500 font-medium border border-red-500 px-2 py-0.5 rounded-full hover:bg-red-50">Report</button>
          </div>
        );
      case 'course_query':
        return (
          <div className="flex justify-between items-start">
            <div className="flex items-center space-x-2">
              <h3 className="text-sm font-semibold text-gray-900">{post.title}</h3>
              <PostTag text={`${post.online} online`} bgColor="bg-green-100" textColor="text-green-700" />
            </div>
            <button className="text-xs text-red-500 font-medium border border-red-500 px-2 py-0.5 rounded-full hover:bg-red-50">Report</button>
          </div>
        );
      default:
        return null;
    }
  };

  const getPostFooter = () => {
    switch (post.type) {
      case 'product_society':
        return (
          <div className="mt-3 flex space-x-2">
            <PostTag text="Rastows" bgColor="bg-gray-100" textColor="text-gray-700" />
            <PostTag text="Sessions" bgColor="bg-gray-100" textColor="text-gray-700" />
            <PostTag text="Activities" bgColor="bg-gray-100" textColor="text-gray-700" />
          </div>
        );
      case 'anonymous_gossip':
        return (
          <div className="mt-3 flex justify-between items-center border-t pt-3">
            <div className="flex space-x-4 text-gray-500 text-sm">
              <div className="flex items-center space-x-1"><Zap size={14} /> <span>{post.stats?.views}</span></div>
              <div className="flex items-center space-x-1"><Star size={14} /> <span>{post.stats?.comments}</span></div>
              <div className="flex items-center space-x-1"><Share2 size={14} /> <span>{post.stats?.shares}</span></div>
            </div>
            <div className="flex items-center text-xs text-gray-500">
              <span className="mr-1">Hosted by **Startup Hub**</span>
              <PostTag text="Waflled" bgColor="bg-gray-200" textColor="text-gray-700" />
            </div>
          </div>
        );
      case 'course_query':
        return (
          <div className="mt-3 flex justify-between items-center border-t pt-3">
            <div className="flex space-x-4 text-gray-500 text-sm">
              <button className="flex items-center space-x-1 hover:text-green-600"><CornerUpRight size={14} /> <span>Open</span></button>
              <button className="flex items-center space-x-1 hover:text-green-600"><Heart size={14} /> <span>Save</span></button>
            </div>
            <div className="text-xs text-gray-500">
              From your **Communities**
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
      {getPostHeader()}
      <p className={`mt-2 ${post.type === 'product_society' ? 'text-sm text-gray-700' : 'text-sm text-gray-800'}`}>
        {post.content}
      </p>
      {post.type === 'anonymous_gossip' && (
        <blockquote className="bg-gray-50 p-3 mt-3 rounded border-l-4 border-gray-300 text-xs italic text-gray-600">
            Finals in 3 weeks and I feel completely behind. Anyone else juggling part-time work + group projects and just exhausted?
        </blockquote>
      )}
      {post.type === 'anonymous_gossip' && (
        <div className="text-xs text-gray-500 mt-2">
            AI assistant suggested 5 campus resources
        </div>
      )}
      {getPostFooter()}
    </div>
  );
};

export default FeedPost;