import React from 'react';
import { Search, Plus } from 'lucide-react';
import ProjectCard from '../components/project/ProjectCard';
import DashboardLayout from '../layouts/DashboardLayout';

// Mock Data for the page
const MOCK_AVATARS = {
  avatar1: 'https://i.pravatar.cc/150?img=1',
  avatar2: 'https://i.pravatar.cc/150?img=2',
  avatar3: 'https://i.pravatar.cc/150?img=3',
  avatar4: 'https://i.pravatar.cc/150?img=4',
  avatar5: 'https://i.pravatar.cc/150?img=5',
  avatar6: 'https://i.pravatar.cc/150?img=6',
};

const myProjectsData = [
  {
    title: 'Q4 Marketing Strategy',
    description:
      'Developing comprehensive marketing plans for the upcoming Q4 period, focusing on new initiatives.',
    timeAgo: '2 days ago',
    avatarUrls: [MOCK_AVATARS.avatar3, MOCK_AVATARS.avatar5, MOCK_AVATARS.avatar1],
    color: 'purple',
  },
  {
    title: 'Product Feature Rollout',
    description:
      'Managing the successful rollout of new product features and enhancements to users.',
    timeAgo: '1 week ago',
    avatarUrls: [MOCK_AVATARS.avatar4, MOCK_AVATARS.avatar6],
    color: 'purple',
  },
  {
    title: 'Customer Support Automation',
    description:
      'Implementing advanced AI solutions to automate and improve customer support interactions.',
    timeAgo: '3 days ago',
    avatarUrls: [MOCK_AVATARS.avatar2],
    color: 'purple',
  },
];

const sharedProjectsData = [
  {
    title: 'Annual Budget Review',
    description:
      'Conducting a thorough review of the company’s annual budget and financial forecasts.',
    timeAgo: '6 month ago',
    avatarUrls: [MOCK_AVATARS.avatar6, MOCK_AVATARS.avatar5],
    color: 'purple',
  },
  {
    title: 'New Employee Onboarding',
    description:
      'Streamlining the process for new employee onboarding to ensure a smooth integration.',
    timeAgo: '5 days ago',
    avatarUrls: [MOCK_AVATARS.avatar1, MOCK_AVATARS.avatar4],
    color: 'purple',
  },
  // We can add a third shared project if needed to fill the grid, but I'll stick to the image's structure
];

const ProjectsPage = () => {
  return (
    <DashboardLayout>
      {/* Page Header */}
      <header className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Projects</h1>
      </header>

      {/* Search and Action Bar */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 space-y-4 md:space-y-0">
        
        {/* Search Input Group */}
        <div className="flex w-full md:w-auto">
          <div className="relative flex items-center w-full max-w-sm">
            <Search className="absolute left-4 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search projects..."
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-l-lg focus:ring-indigo-500 focus:border-indigo-500 text-sm shadow-sm"
            />
          </div>
          <button className="flex items-center justify-center p-3 bg-indigo-600 hover:bg-indigo-700 rounded-r-lg text-white transition-colors">
            <Plus className="h-5 w-5" />
          </button>
        </div>

        {/* Filter Tags and New Project Button */}
        <div className="flex items-center space-x-3 w-full md:w-auto">
          {/* Mock Filters/Tags - Using a simple div to match the visual style */}
          <div className="hidden sm:block text-sm px-4 py-2 bg-gray-100 text-gray-600 rounded-full font-medium border border-gray-200">
             w/foll/10 top 4 py 2 ronded focus: oulting 1 ring 500
          </div>
          
          {/* New Project Button */}
          <button className="flex items-center px-4 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-white font-semibold text-sm transition-colors shadow-lg shadow-indigo-500/50">
            <Plus className="h-4 w-4 mr-2" />
            New Project
          </button>
        </div>
      </div>

      {/* --- My Projects Section --- */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-gray-800 mb-5">My Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {myProjectsData.map((project, index) => (
            <ProjectCard key={`my-${index}`} {...project} />
          ))}
        </div>
      </section>

      {/* --- Shared Projects Section --- */}
      <section>
        <h2 className="text-xl font-semibold text-gray-800 mb-5">Shared Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sharedProjectsData.map((project, index) => (
            <ProjectCard key={`shared-${index}`} {...project} />
          ))}
        </div>
      </section>
    </DashboardLayout>
  );
};

export default ProjectsPage;