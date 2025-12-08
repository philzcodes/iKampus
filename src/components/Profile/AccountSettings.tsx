import React from 'react';

interface AccountSetting {
  label: string;
  description: string;
  status?: string;
  action?: string;
}

interface AccountSettingsProps {
  settings: AccountSetting[];
}

const AccountSettings: React.FC<AccountSettingsProps> = ({ settings }) => {
  return (
    <div className="bg-white rounded-lg p-6">
      <h2 className="text-sm font-semibold text-gray-900 mb-4">Account & settings</h2>
      <p className="text-xs text-gray-500 mb-4">Control what follows you after graduation</p>

      <div className="space-y-3">
        {settings.map((setting, idx) => (
          <div key={idx} className="flex items-start justify-between py-2 border-b border-gray-100 last:border-b-0">
            <div className="flex-1">
              <h3 className="text-sm font-medium text-gray-900">{setting.label}</h3>
              <p className="text-xs text-gray-500">{setting.description}</p>
            </div>
            {setting.status && (
              <button className="bg-gray-100 text-gray-700 text-xs px-3 py-1.5 rounded-lg font-medium hover:bg-gray-200 ml-3">
                {setting.status}
              </button>
            )}
            {setting.action && (
              <button className="text-blue-600 text-xs font-medium hover:text-blue-700 ml-3">
                {setting.action}
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccountSettings;
