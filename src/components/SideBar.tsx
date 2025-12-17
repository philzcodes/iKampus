import { useNavigate, useLocation } from 'react-router-dom';
import {
  Menu,
  Plus,
  Search,
  BookOpen,
  Archive,
  Calendar,
  Settings,
  User,
  LogOut,
  ChevronRight,
  ClipboardList,
  MessageCircle,
  Users,
  Briefcase,
  GraduationCap,
} from 'lucide-react';
import UserProfileCard from './UserProfileCard';
import logo from '../assets/ikampus-logo.jpg';

// --- Data Types ---
interface SidebarItemProps {
  icon: React.ElementType;
  label: string;
  active?: boolean;
  onClick?: () => void;
}

interface ChatItemProps {
  icon: React.ElementType;
  label: string;
  active?: boolean;
}

const chats: ChatItemProps[] = [
  { icon: ClipboardList, label: 'Marketing Campaign Q3' },
  { icon: ClipboardList, label: 'Marketing Feedback Analysis', active: true },
  { icon: ClipboardList, label: 'Weekly Sync Notes' },
  { icon: ClipboardList, label: 'HR Policy Updates' },
];

const archivedChats: ChatItemProps[] = [
  { icon: Archive, label: 'Old Project Archive' },
  { icon: Calendar, label: '2022 Reports' },
];

// --- Components ---

const SidebarItem: React.FC<SidebarItemProps> = ({ icon: Icon, label, active, onClick }) => (
  <div
    onClick={onClick}
    className={`flex items-center space-x-3 p-2 rounded-lg cursor-pointer transition-colors ${
      active
        ? 'bg-purple-100/50 text-gray-900 font-medium'
        : 'text-gray-600 hover:bg-gray-100'
    }`}
  >
    <Icon className="w-5 h-5" />
    <span className="text-sm">{label}</span>
  </div>
);

const ChatItem: React.FC<ChatItemProps> = ({ icon: Icon, label, active }) => (
  <div
    className={`flex items-center space-x-3 p-2 rounded-lg cursor-pointer transition-colors ${
      active
        ? 'bg-purple-50 text-purple-800 font-semibold'
        : 'text-gray-700 hover:bg-gray-100'
    }`}
  >
    <Icon className="w-5 h-5" />
    <span className="text-sm truncate">{label}</span>
  </div>
);


export const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const mainRoutes = [
    { icon: Plus, label: 'New chat', path: '/' },
    { icon: BookOpen, label: 'Campus feed', path: '/campusFeed' },
    { icon: MessageCircle, label: 'Chats', path: '/chats' },
    { icon: Briefcase, label: 'Startup hub', path: '/projects' },
    { icon: Users, label: 'Communities', path: '/communities' },
    { icon: GraduationCap, label: 'Alumni', path: '/alumni' },
  ];

  return (
    <div className="flex flex-col w-64 border-r bg-white h-screen">
      
      {/* Top Section: New Chat & Logo */}
      <div className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center space-x-2">
          {/* <Menu className="w-6 h-6 text-gray-700" /> */}
          <img src={logo} alt="" className="w-6 h-6" />
          <span className="text-lg font-bold text-gray-800">iKampus</span>
        </div>
      </div>

     <div className="p-4">
       <UserProfileCard />
     </div>

      {/* Main Navigation */}
      <div className="p-4 space-y-1 border-b">
        {mainRoutes.map((route, index) => (
          <SidebarItem
            key={index}
            icon={route.icon}
            label={route.label}
            active={location.pathname === route.path}
            onClick={() => navigate(route.path)}
          />
        ))}
      </div>

      {/* Recents */}
      <div className="p-4 space-y-2 overflow-y-auto flex-grow">
        <h3 className="text-xs font-semibold text-gray-500 uppercase mb-2">
          Recents
        </h3>
        <div className="space-y-1">
          {chats.map((chat, index) => (
            <ChatItem key={index} {...chat} />
          ))}
        </div>

        <h3 className="text-xs font-semibold text-gray-500 uppercase mt-6 mb-2">
          Archived Chats
        </h3>
        <div className="space-y-1">
          {archivedChats.map((chat, index) => (
            <ChatItem key={index} {...chat} />
          ))}
        </div>
      </div>

      {/* User and App Info */}
      <div className="p-4 border-t space-y-2">
        {/* App Version */}
        <div className="flex justify-between items-center text-xs text-gray-500">
          <span>App 5a</span>
          <ChevronRight className="w-3 h-3" />
        </div>
        {/* User Profile */}
        <div className="flex items-center justify-between p-2 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-orange-200 rounded-full flex items-center justify-center text-orange-800 font-medium text-sm">
              JD
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-800">John Doe</p>
              <p className="text-xs text-gray-500 truncate">john.doe@example.com</p>
            </div>
          </div>
          <LogOut className="w-4 h-4 text-gray-400 hover:text-red-500 transition-colors" />
        </div>
      </div>
    </div>
  );
};