import React from 'react';

interface Stat {
  label: string;
  value: string;
  change: string;
}

interface Activity {
  text: string;
  time: string;
  type: string;
  details?: string;
}

interface ProfileHeaderProps {
  name: string;
  course: string;
  year: string;
  university: string;
  handle: string;
  joinedDate: string;
  stats: Stat[];
  activities: Activity[];
  selectedTab: string;
  onTabChange: (tab: string) => void;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({
  name,
  course,
  year,
  university,
  handle,
  joinedDate,
  stats,
  activities,
  selectedTab,
  onTabChange,
}) => {
  return (
    <div className="bg-white rounded-lg p-6">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 mb-1">{name}</h1>
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
            <span>{course} • {year}</span>
          </div>
          <div className="text-sm text-gray-600">{university}</div>
          <div className="flex items-center gap-2 mt-2">
            <span className="text-xs text-gray-500">@{handle}</span>
            <span className="text-xs text-gray-400">•</span>
            <span className="text-xs text-gray-500">Joined {joinedDate}</span>
          </div>
        </div>
        <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
          Edit profile
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-gray-50 rounded-lg p-3 text-center">
            <div className="text-xl font-bold text-gray-900">{stat.value}</div>
            <div className="text-xs text-gray-600 mb-1">{stat.label}</div>
            <div className="text-xs text-gray-500">{stat.change}</div>
          </div>
        ))}
      </div>

      {/* Tab Navigation */}
      <div className="flex gap-2 border-b border-gray-200 mb-4">
        {['Activity', 'Communities', 'Projects'].map((tab) => (
          <button
            key={tab}
            onClick={() => onTabChange(tab)}
            className={`px-4 py-2 text-sm font-medium transition-colors ${
              selectedTab === tab
                ? 'text-gray-900 border-b-2 border-gray-900'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Activity List */}
      <div className="space-y-3">
        {activities.map((activity, idx) => (
          <div key={idx} className="bg-gray-50 rounded-lg p-3">
            <p className="text-sm text-gray-900 mb-1">{activity.text}</p>
            {activity.details && (
              <p className="text-xs text-gray-600 mb-1">{activity.details}</p>
            )}
            <span className="text-xs text-gray-500">{activity.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileHeader;
