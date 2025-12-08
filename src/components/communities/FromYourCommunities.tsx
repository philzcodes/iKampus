import React from 'react';

interface CommunityEvent {
  name: string;
  time: string;
  action: string;
}

interface FromYourCommunitiesProps {
  events: CommunityEvent[];
}

const FromYourCommunities: React.FC<FromYourCommunitiesProps> = ({ events }) => {
  return (
    <div className="bg-white rounded-lg p-4 mb-4">
      <h2 className="text-sm font-semibold text-gray-900 mb-3">From your communities</h2>
      <p className="text-xs text-gray-500 mb-3">Events & calls-this-week</p>
      <div className="space-y-2">
        {events.map((event, idx) => (
          <div key={idx} className="flex items-center justify-between py-2">
            <div className="flex-1">
              <h3 className="text-xs font-medium text-gray-900">{event.name}</h3>
              <p className="text-xs text-gray-500">{event.time}</p>
            </div>
            <button className="bg-green-500 text-white text-xs px-3 py-1.5 rounded-lg font-medium">
              {event.action}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FromYourCommunities;
