import React from 'react';

interface ChecklistItem {
  text: string;
  description: string;
  status: string;
}

interface ProfileChecklistProps {
  items: ChecklistItem[];
}

const ProfileChecklist: React.FC<ProfileChecklistProps> = ({ items }) => {
  return (
    <div className="bg-white rounded-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-sm font-semibold text-gray-900">Profile checklist</h2>
        <span className="text-xs text-gray-500">3 / 5 done</span>
      </div>
      <p className="text-xs text-gray-500 mb-4">Make your profile feel like you</p>

      <div className="space-y-3">
        {items.map((item, idx) => (
          <div key={idx} className="flex items-start justify-between py-2">
            <div className="flex-1">
              <h3 className="text-sm font-medium text-gray-900">{item.text}</h3>
              <p className="text-xs text-gray-500">{item.description}</p>
            </div>
            <button className={`text-xs px-3 py-1.5 rounded-lg font-medium ml-3 flex-shrink-0 ${
              item.status === 'complete' 
                ? 'bg-green-500 text-white' 
                : 'bg-green-100 text-green-700 hover:bg-green-200'
            }`}>
              {item.status === 'complete' ? 'Complete' : 'Later'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileChecklist;
