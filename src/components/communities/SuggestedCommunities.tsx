import React from 'react';

interface SuggestedCommunity {
  id: number;
  code: string;
  name: string;
  description: string;
  tags: string[];
  members?: string;
  badge: string;
  badgeColor: string;
  verified?: boolean;
}

interface SuggestedCommunitiesProps {
  communities: SuggestedCommunity[];
}

const SuggestedCommunities: React.FC<SuggestedCommunitiesProps> = ({ communities }) => {
  return (
    <div className="bg-white rounded-lg p-4 mb-4">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-sm font-semibold text-gray-900">Suggested for you</h2>
          <p className="text-xs text-gray-500">Based on your course, interests & activity</p>
        </div>
        <button className="text-xs text-orange-500 hover:text-orange-600 font-medium">See all</button>
      </div>

      <div className="space-y-3">
        {communities.map((community) => (
          <div key={community.id} className="border border-gray-200 rounded-lg p-3 hover:border-gray-300 transition-colors">
            <div className="flex items-start gap-3">
              <div className={`w-10 h-10 ${community.verified ? 'bg-orange-500' : 'bg-gray-200'} rounded-lg flex items-center justify-center flex-shrink-0`}>
                <span className={`text-sm font-semibold ${community.verified ? 'text-white' : 'text-gray-700'}`}>
                  {community.code}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-sm font-semibold text-gray-900">{community.name}</h3>
                  {community.verified && (
                    <span className="bg-orange-500 text-white text-xs px-2 py-0.5 rounded">new ✦</span>
                  )}
                </div>
                <p className="text-xs text-gray-600 mb-2">{community.description}</p>
                {community.tags && (
                  <div className="flex flex-wrap gap-1 mb-2">
                    {community.tags.map((tag, idx) => (
                      <span key={idx} className="text-xs text-gray-600">{tag}</span>
                    ))}
                  </div>
                )}
                {community.members && (
                  <span className="text-xs text-gray-500">{community.members}</span>
                )}
              </div>
              <button className={`${community.badgeColor} ${community.badgeColor === 'bg-black' ? 'text-white' : 'text-white'} text-xs px-3 py-1.5 rounded-lg font-medium flex-shrink-0`}>
                {community.badge}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuggestedCommunities;
