import React from 'react';
import { Layers, User, Grid } from 'lucide-react';

// --- Imports for Reusable Components ---
import DashboardLayout from '../layouts/DashboardLayout';
import WelcomeCard from '../components/WelcomeCard';
import PostComposer from '../components/PostComposer';
import FeedPost from '../components/FeedPost';
import AITutor from '../components/AITutor';
import EventsBoard from '../components/EventsBoard';
import ProfileContext from '../components/ProfileContext';
// ----------------------------------------

interface FeedPost {
  type: 'product_society' | 'anonymous_gossip' | 'course_query';
  title?: string;
  time: string;
  location?: string;
  event?: string;
  content?: string;
  icon?: React.ReactNode;
  label: string;
  reports?: number;
  online?: number;
  host?: string;
  stats?: { views: number; comments: number; shares: number };
  isAnonymous?: boolean;
}

const IKampusDashboard: React.FC = () => {
  // Mock data for demonstration purposes, mimicking a real state management system
  const mockFeedData: FeedPost[] = [
    {
      type: 'product_society',
      title: 'Product Society',
      time: 'Today, 3:23 PM',
      location: "King's College",
      event: 'Startup Pitch Night on campus. & teams, lightning pitches, alumni judges and free pizza.',
      icon: <Layers size={16} />,
      label: 'Event',
      reports: 22,
    },
    {
      type: 'anonymous_gossip',
      time: '32h ago',
      content: 'Anonymous post about stressful finals and part-time work...',
      stats: { views: 128, comments: 32, shares: 32 },
      host: 'Startup Hub',
      icon: <User size={16} />,
      isAnonymous: true,
      label: 'Mental Health',
      reports: 5,
    },
    {
      type: 'course_query',
      title: 'CS 382: ML Cohort',
      time: 'Just now',
      content: 'Dropping a shared Notion for revision. Add your notes + tricky questions so we can build a joint bank before exams.',
      icon: <Grid size={16} />,
      label: 'Course Community',
      online: 23,
      reports: 3,
    },
  ];

  return (
    <DashboardLayout>
      <div className="flex space-x-6">
        
        {/* Left/Main Column (70%) */}
        <div className="w-full lg:w-7/12 space-y-6">
          <WelcomeCard username="Ayo" />
          <PostComposer />

          {/* Feed Posts */}
          <div className="space-y-4">
            {mockFeedData.map((post, index) => (
              <FeedPost key={index} post={post} />
            ))}
          </div>
        </div>

        {/* Right Column (30%) */}
        <div className="hidden lg:block w-5/12 space-y-6">
          <AITutor />
          <EventsBoard />
          <ProfileContext />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default IKampusDashboard;