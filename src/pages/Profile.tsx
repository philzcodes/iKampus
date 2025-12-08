import React, { useState } from 'react';
import DashboardLayout from '../layouts/DashboardLayout';
import ProfileHeader from '../components/Profile/ProfileHeader';
import BadgesReputation from '../components/Profile/BadgesReputation';
import AIForProfile from '../components/Profile/AIForProfile';
import IdentityAnonymity from '../components/Profile/IdentityAnonymity';
import ProfileChecklist from '../components/Profile/ProfileChecklist';
import WeekStats from '../components/Profile/WeekStats';
import AccountSettings from '../components/Profile/AccountSettings';
import { Plus } from 'lucide-react';

const Profile: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState('Activity');

  const stats = [
    { label: 'Posts', value: '12', change: '3 this week' },
    { label: 'Friends', value: '48', change: '4 new since' },
    { label: 'Streak', value: '9 days', change: 'Your longest' }
  ];

  const activities = [
    { 
      text: 'Posted in CS 302: ML Cohort',
      time: '5 hours ago',
      type: 'post'
    },
    { 
      text: "Joined Startup Hub @ King's",
      details: 'Linked flight-fare prediction',
      time: 'Yesterday',
      type: 'join'
    },
    { 
      text: 'Shared notes in Riverbank Halls',
      time: '2 days ago',
      type: 'share'
    },
    { 
      text: "RSVP'd to Product Society Pitch Night",
      time: '3 days ago',
      type: 'rsvp'
    }
  ];

  const badges = [
    {
      title: 'Study anchor',
      description: 'Found study groups and tags weekly check-ins',
      category: 'academic'
    },
    {
      title: 'Builder mode',
      description: 'Building startups & product communities',
      category: 'builder'
    },
    {
      title: "Wellbeing ally",
      description: 'Attends wellness events',
      category: 'wellbeing'
    },
    {
      title: 'Anon-safe',
      description: 'Respectful & trusted in anon spaces',
      category: 'trust'
    }
  ];

  const profileSections = [
    { title: 'Display name', value: 'Alex Kim', action: 'Edit' },
    { title: 'Handle', value: '@alexk', action: 'Unhide / modify' },
    { title: 'Anon profile', value: '', action: '' },
    { title: 'Community footprint', value: '', action: '' },
    { title: 'Course spaces', value: '3 joined', action: '' },
    { title: 'Societies', value: '2 joined', action: '' },
    { title: 'Wellbeing', value: '2 safe spaces', action: '' },
    { title: 'Quick actions', value: '', action: '' }
  ];

  const checklistItems = [
    { text: 'Connect your timetable', description: 'Use course data, clubs & suggestions.', status: 'complete' },
    { text: 'Add a short bio', description: 'Tell others what you love, here for.', status: 'complete' },
    { text: 'Set quiet hours', description: 'Mute pings during lectures & sleep', status: 'later' }
  ];

  const weekStats = [
    { label: 'Study & courses', action: 'View log' },
    { label: 'Communities & chat', days: 'Tidy feed', status: 'active' },
    { label: 'Wellbeing & breaks', details: '2 check-ins, 1pm', status: 'green' }
  ];

  const accountSettings = [
    { label: 'Alumni mode', description: 'Switch context to alumni communities.', status: 'Off' },
    { label: 'Data & exports', description: 'Download your threads & bookmarks.', action: 'Open' },
    { label: 'Safety & reporting', description: 'Flag, report, or start safety flows', action: 'Manage' }
  ];

  return (
    <DashboardLayout>
      <div className="min-h-screen bg-gray-50 font-sans">
        <div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Profile Info */}
          <div className="lg:col-span-1 space-y-4">
            <ProfileHeader
              name="Alex Kim"
              course="BSc Genomics & Science"
              year="Year 2"
              university="King's College London"
              handle="alexk"
              joinedDate="Sep 2024"
              stats={stats}
              activities={activities}
              selectedTab={selectedTab}
              onTabChange={setSelectedTab}
            />
            <BadgesReputation badges={badges} />
          </div>

          {/* Middle Column - AI & Profile Details */}
          <div className="lg:col-span-1 space-y-4">
            <AIForProfile />
            <IdentityAnonymity sections={profileSections} />
          </div>

          {/* Right Column - Checklist & Settings */}
          <div className="lg:col-span-1 space-y-4">
            <ProfileChecklist items={checklistItems} />
            <WeekStats stats={weekStats} />
            <AccountSettings settings={accountSettings} />
          </div>
        </div>

        {/* Floating Action Button */}
        <button className="fixed bottom-8 right-8 w-14 h-14 bg-gray-900 text-white rounded-full shadow-lg hover:bg-gray-800 transition-colors flex items-center justify-center">
          <Plus className="w-6 h-6" />
        </button>
      </div>
    </DashboardLayout>
  );
};

export default Profile;