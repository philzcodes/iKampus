import React from 'react';
import { ChevronDown, Bell, Search, Settings } from 'lucide-react';

const Header: React.FC = () => (
  <header className="flex justify-between items-center px-8 py-3 bg-white border-b sticky top-0 z-10">
    
    {/* Left Side: Branding & Context */}
    <div className="flex items-center space-x-6">
      <div className="text-xl font-bold text-black hidden sm:block">iKampus</div>
      <div className="flex items-center text-sm font-medium border-l pl-6">
        <span className="text-gray-800">King's College</span>
        <ChevronDown size={16} className="ml-1 text-gray-500" />
      </div>
    </div>
    
    {/* Right Side: Icons and User */}
    <div className="flex items-center space-x-4">
      <div className="p-1 bg-gray-100 rounded-full hover:bg-gray-200 cursor-pointer">
        <Bell size={20} className="text-gray-600" />
      </div>
      <div className="p-1 bg-gray-100 rounded-full hover:bg-gray-200 cursor-pointer">
        <Search size={20} className="text-gray-600" />
      </div>
      <div className="p-1 bg-gray-100 rounded-full hover:bg-gray-200 cursor-pointer">
        <Settings size={20} className="text-gray-600" />
      </div>
      
      {/* User Avatar */}
      <div className="h-8 w-8 bg-black rounded-full cursor-pointer">
        {/* 

[Image of User Avatar Placeholder]
 */}
      </div>
    </div>
  </header>
);

export default Header;