import React from 'react';

interface Community {
  id: number;
  code: string;
  name: string;
  members?: string;
  badge: string;
  badgeColor: string;
  posts?: string;
  verified?: boolean;
  description?: string;
  tags?: string[];
}

interface YourCommunitiesProps {
  communities: Community[];
}

const YourCommunities: React.FC<YourCommunitiesProps> = ({ communities }) => {
  return (
    <div className="bg-white rounded-lg p-4 mb-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-sm font-semibold text-gray-900">Your communities</h2>
        <span className="text-xs text-gray-500">{communities.length} joined</span>
      </div>
      <p className="text-xs text-gray-500 mb-4">Stay in sync with the groups you care about</p>

      <div className="space-y-3">
        {communities.map((community) => (
          <div key={community.id} className="border border-gray-200 rounded-lg p-3 hover:border-gray-300 transition-colors">
            <div className="flex items-start gap-3">
              <div className={`w-10 h-10 ${community.verified ? 'bg-gray-800' : 'bg-gray-200'} rounded-lg flex items-center justify-center flex-shrink-0`}>
                <span className={`text-sm font-semibold ${community.verified ? 'text-white' : 'text-gray-700'}`}>
                  {community.code}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-sm font-semibold text-gray-900">{community.name}</h3>
                  {community.verified && (
                    <span className="bg-black text-white text-xs px-2 py-0.5 rounded">Verified</span>
                  )}
                </div>
                {community.description && (
                  <p className="text-xs text-gray-600 mb-2">{community.description}</p>
                )}
                {community.tags && (
                  <div className="flex flex-wrap gap-1 mb-2">
                    {community.tags.map((tag, idx) => (
                      <span key={idx} className="text-xs text-gray-600 bg-gray-100 px-2 py-0.5 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">{community.members}</span>
                  {community.posts && (
                    <span className="text-xs text-gray-500">{community.posts}</span>
                  )}
                </div>
              </div>
              <button className={`${community.badgeColor} text-white text-xs px-3 py-1.5 rounded-lg font-medium flex-shrink-0`}>
                {community.badge}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YourCommunities;
