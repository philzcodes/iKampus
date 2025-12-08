import React from 'react';

interface Badge {
  title: string;
  description: string;
  category: string;
}

interface BadgesProps {
  badges: Badge[];
}

const BadgesReputation: React.FC<BadgesProps> = ({ badges }) => {
  return (
    <div className="bg-white rounded-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-sm font-semibold text-gray-900">Badges & reputation</h2>
        <button className="text-xs text-blue-600 hover:text-blue-700 font-medium">
          View all
        </button>
      </div>
      <p className="text-xs text-gray-500 mb-4">How your profile shows up across communities</p>

      <div className="grid grid-cols-2 gap-3">
        {badges.map((badge, idx) => (
          <div key={idx} className="bg-gray-50 rounded-lg p-3">
            <h3 className="text-sm font-semibold text-gray-900 mb-1">{badge.title}</h3>
            <p className="text-xs text-gray-600">{badge.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BadgesReputation;
