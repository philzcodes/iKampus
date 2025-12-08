import React from 'react';

interface WeekStat {
  label: string;
  action?: string;
  days?: string;
  status?: string;
  details?: string;
}

interface WeekStatsProps {
  stats: WeekStat[];
}

const WeekStats: React.FC<WeekStatsProps> = ({ stats }) => {
  return (
    <div className="bg-white rounded-lg p-6">
      <h2 className="text-sm font-semibold text-gray-900 mb-4">Your week in stats</h2>
      <p className="text-xs text-gray-500 mb-4">Where you spent time on iKampus</p>

      <div className="space-y-3">
        {stats.map((stat, idx) => (
          <div key={idx} className="flex items-center justify-between py-2">
            <div className="flex-1">
              <h3 className="text-sm font-medium text-gray-900">{stat.label}</h3>
              {stat.details && (
                <p className="text-xs text-gray-500">{stat.details}</p>
              )}
            </div>
            <button className={`text-xs px-3 py-1.5 rounded-lg font-medium ${
              stat.action === 'View log' 
                ? 'bg-green-500 text-white hover:bg-green-600' 
                : stat.days === 'Tidy feed'
                ? 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                : 'bg-green-100 text-green-700 hover:bg-green-200'
            }`}>
              {stat.action || stat.days || 'Green zone'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeekStats;
