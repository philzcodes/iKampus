import React from 'react';

interface JoinRequest {
  name: string;
  status: string;
  action: string;
  info?: string;
}

interface JoinRequestsProps {
  requests: JoinRequest[];
}

const JoinRequests: React.FC<JoinRequestsProps> = ({ requests }) => {
  return (
    <div className="bg-white rounded-lg p-4 mb-4">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-sm font-semibold text-gray-900">Join requests</h2>
        <button className="text-xs text-orange-500 hover:text-orange-600 font-medium">View all</button>
      </div>
      <p className="text-xs text-gray-500 mb-3">Communities asking you</p>
      <div className="space-y-2">
        {requests.map((request, idx) => (
          <div key={idx} className="flex items-center justify-between py-2">
            <div className="flex-1">
              <h3 className="text-xs font-medium text-gray-900">{request.name}</h3>
              {request.info && (
                <p className="text-xs text-gray-500">{request.info}</p>
              )}
            </div>
            <div className="flex items-center gap-2">
              <span className={`text-xs ${request.status === 'Latest' ? 'text-orange-500' : 'text-gray-400'}`}>
                {request.status}
              </span>
              <button className="bg-green-500 text-white text-xs px-3 py-1.5 rounded-lg font-medium">
                {request.action}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JoinRequests;
