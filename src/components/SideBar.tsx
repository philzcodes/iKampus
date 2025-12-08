import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Home, Users, Award, Briefcase, User, Moon } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

interface NavItem {
  name: string;
  icon: LucideIcon;
  path: string;
  highlight?: boolean;
}

const navItems: NavItem[] = [
  { name: 'Feed', icon: Home, path: '/' },
  { name: 'Communities', icon: Users, path: '/communities' },
  { name: 'Assistant', icon: Award, path: '/assistant' },
  { name: 'ProFellow', icon: Briefcase, path: '/profellow', highlight: true },
  { name: 'Profile', icon: User, path: '/profile' },
];

const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (path: string) => {
    navigate(path);
  };

  return (
    <div className="w-20 bg-white border-r h-full flex flex-col items-center py-4">
      <div className="text-xl font-bold mb-8 text-black cursor-pointer" onClick={() => navigate('/')}>iK</div>
      
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = location.pathname === item.path;
        const baseClasses = "flex flex-col items-center p-2 rounded-lg transition-colors cursor-pointer";
        const activeClasses = isActive ? "bg-green-600 text-white shadow-lg" : "text-gray-500 hover:bg-gray-100";

        return (
          <div 
            key={item.name} 
            className={`my-3 ${item.highlight ? 'mt-8' : ''}`}
            onClick={() => handleNavClick(item.path)}
          >
            <div className={`${baseClasses} ${activeClasses} w-16`}>
              <Icon size={24} />
            </div>
            <span className={`text-xs mt-1 ${isActive ? 'text-green-600 font-medium' : 'text-gray-500'}`}>
              {item.name}
            </span>
          </div>
        );
      })}

      <div className="mt-auto space-y-4">
        <div className="flex flex-col items-center">
          <div className="p-2 text-gray-500 hover:bg-gray-100 rounded-lg cursor-pointer w-16">
            <Award size={24} />
          </div>
          <span className="text-xs mt-1 text-gray-500">Alumni</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="p-2 text-gray-500 hover:bg-gray-100 rounded-lg cursor-pointer w-16">
            <Moon size={24} />
          </div>
          <span className="text-xs mt-1 text-gray-500">Mode</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;