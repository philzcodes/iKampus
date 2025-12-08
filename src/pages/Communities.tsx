import React, { useState } from 'react';
import DashboardLayout from '../layouts/DashboardLayout';
import CommunitiesHeader from '../components/Communities/CommunitiesHeader';
import YourCommunities from '../components/Communities/YourCommunities';
import SuggestedCommunities from '../components/Communities/SuggestedCommunities';
import AIForCommunities from '../components/Communities/AIForCommunities';
import JoinRequests from '../components/Communities/JoinRequests';
import FromYourCommunities from '../components/Communities/FromYourCommunities';
import DiscoverByTag from '../components/Communities/DiscoverByTag';
import { Plus } from 'lucide-react';

const filters = ['For you', 'Courses', 'Societies', 'Halls', 'Interests', 'Near me'];

const communities = [
  {
    id: 1,
    code: 'CS',
    name: 'CS 302: ML Course',
    members: 'Year 3',
    badge: 'Joined',
    badgeColor: 'bg-green-500',
    posts: '5 new posts'
  },
  {
    id: 2,
    code: 'PS',
    name: 'Product Society',
    verified: true,
    description: 'Workshops, pitch nights & product teardowns with alumni and industry speakers.',
    tags: ['Event tonight', 'Pitch Night'],
    members: 'You RSVP',
    badge: 'Joined',
    badgeColor: 'bg-gray-200'
  },
  {
    id: 3,
    code: 'H3',
    name: 'Riverbank Halls',
    description: 'Late-night study buddies, movie-in hacks and hall events.',
    members: '6 friends here',
    posts: 'Invite me',
    badge: 'Joined',
    badgeColor: 'bg-gray-200'
  },
  {
    id: 4,
    code: 'AI',
    name: 'AI Builders Collective',
    description: 'Ship tiny AI projects, share prompts, get feedback & co-founders.',
    members: '97 members',
    tags: ['Weekend build sprint'],
    posts: 'Yes 🙌 63',
    badge: 'Joined',
    badgeColor: 'bg-gray-200'
  }
];

const suggestedCommunities = [
  {
    id: 1,
    code: 'UX',
    name: 'Campus Design Guild',
    description: 'Weekly design critiques, Figma templates & portfolio support.',
    tags: ['Matches: Product, Startups'],
    members: '+12 mutuals',
    badge: 'Join',
    badgeColor: 'bg-black'
  },
  {
    id: 2,
    code: 'CD',
    name: 'Atom Night Confessions',
    verified: true,
    description: 'Low-pressure, anon-only space for late-night ghost stories.',
    tags: ['Matches: Year 3'],
    members: '',
    badge: 'Join',
    badgeColor: 'bg-orange-500'
  },
  {
    id: 3,
    code: 'AL',
    name: 'Alumni in Tech',
    description: 'AMA threads, job drops and career stories from your alumni.',
    tags: ['Alumni media'],
    members: 'Now: every Fri (& thurs)',
    badge: 'Follow',
    badgeColor: 'bg-black'
  },
  {
    id: 4,
    code: 'SP',
    name: "Startup Hub @ King's",
    description: 'Connect w/ student entrepreneurs, share pitches with alumni investors.',
    tags: ['Linked to your NaijaPitch project', 'Recommended'],
    members: '',
    badge: 'Join',
    badgeColor: 'bg-black'
  }
];

const joinRequests = [
  { name: "Women in Tech @ King's", status: 'Latest', action: 'Join' },
  { name: 'Night shift study crew', info: 'Tue-Fri, 9pm - 3am invite', status: 'Stale', action: 'Join' }
];

const fromYourCommunities = [
  { name: 'Startup Pitch Night', time: 'ML Revision Sprint - 8:30 PM', action: 'RSVP' },
  { name: 'ML Revision Sprint', time: 'CS 302: ML Course - Thu, 7:00 PM', action: 'Join thread' },
  { name: 'Wellbeing walk & coffee', time: 'Riverbank - Sat, 11:00 AM', action: 'RSVP' }
];

const discoverByTag = [
  { tag: '#cs-det', info: '8 communities • 2 alumni-led' },
  { tag: '#mentalhealth', info: '4 safe spaces • 1 anon' },
  { tag: '#founders', info: '3 communities • 1 accelerator' },
  { tag: '#international', info: 'Posts & culture activities' }
];

const Communities: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState('For you');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <DashboardLayout>
      <div className="min-h-screen bg-gray-50 font-sans">
        <div className="max-w-7xl mx-auto flex gap-6">
          {/* Main Content */}
          <main className="flex-1 max-w-2xl">
            <CommunitiesHeader
              filters={filters}
              selectedFilter={selectedFilter}
              searchQuery={searchQuery}
              onFilterChange={setSelectedFilter}
              onSearchChange={setSearchQuery}
            />

            <YourCommunities communities={communities} />
            <SuggestedCommunities communities={suggestedCommunities} />
          </main>

          {/* Right Sidebar */}
          <aside className="w-80">
            <AIForCommunities />
            <JoinRequests requests={joinRequests} />
            <FromYourCommunities events={fromYourCommunities} />
            <DiscoverByTag tags={discoverByTag} />
          </aside>
        </div>

        {/* Floating Action Button */}
        <button className="fixed bottom-8 right-8 w-14 h-14 bg-gray-900 text-white rounded-full shadow-lg hover:bg-gray-800 transition-colors flex items-center justify-center">
          <Plus className="w-6 h-6" />
        </button>
      </div>
    </DashboardLayout>
  );
};

export default Communities;
