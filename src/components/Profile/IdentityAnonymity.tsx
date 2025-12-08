import React from 'react';

interface ProfileSection {
  title: string;
  value: string;
  action: string;
}

interface IdentityAnonymityProps {
  sections: ProfileSection[];
}

const IdentityAnonymity: React.FC<IdentityAnonymityProps> = ({ sections }) => {
  return (
    <div className="bg-white rounded-lg p-6">
      <h2 className="text-sm font-semibold text-gray-900 mb-4">Identity & anonymity</h2>

      <div className="space-y-3">
        {sections.map((section, idx) => (
          <div key={idx} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0">
            <div className="flex-1">
              <h3 className="text-sm text-gray-900">{section.title}</h3>
              {section.value && (
                <p className="text-xs text-gray-500">{section.value}</p>
              )}
            </div>
            {section.action && (
              <button className="text-xs text-blue-600 hover:text-blue-700 font-medium">
                {section.action}
              </button>
            )}
          </div>
        ))}
      </div>

      <div className="flex gap-2 mt-4">
        <button className="bg-gray-100 text-gray-700 text-xs px-3 py-1.5 rounded-lg font-medium hover:bg-gray-200">
          Edit profile
        </button>
        <button className="bg-gray-100 text-gray-700 text-xs px-3 py-1.5 rounded-lg font-medium hover:bg-gray-200">
          Manage privacy
        </button>
        <button className="bg-gray-100 text-gray-700 text-xs px-3 py-1.5 rounded-lg font-medium hover:bg-gray-200">
          Notification prefs
        </button>
      </div>
    </div>
  );
};

export default IdentityAnonymity;
