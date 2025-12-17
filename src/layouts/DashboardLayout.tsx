import React from 'react';
import { Sidebar } from '../components/SideBar';
// import Header from '../components/Header';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className="flex h-screen bg-gray-50 text-gray-800">
      <Sidebar />
      
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* <Header /> */}
        
        {/* Scrollable Content Body */}
        <div className="flex-1 overflow-y-auto px-8 py-6">
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
