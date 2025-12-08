import React from 'react';
import { ChevronDown, Lock } from 'lucide-react';

const PostComposer: React.FC = () => (
  <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
    <input
      type="text"
      placeholder="Share what's happening on campus..."
      className="w-full text-base placeholder-gray-400 p-2 border-b mb-3 focus:outline-none"
    />
    
    <div className="flex justify-between items-center mt-2">
      <div className="flex items-center space-x-2">
        <button className="flex items-center px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700 font-medium hover:bg-gray-200">
          <Lock size={14} className="mr-1" />
          <span>Public</span>
          <ChevronDown size={14} className="ml-1" />
        </button>
        <button className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700 font-medium hover:bg-gray-200">
          Course
        </button>
        <button className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700 font-medium hover:bg-gray-200">
          Anonymous
        </button>
      </div>
      <button className="text-sm text-green-600 font-medium">
        Advanced composer
      </button>
    </div>
  </div>
);

export default PostComposer;