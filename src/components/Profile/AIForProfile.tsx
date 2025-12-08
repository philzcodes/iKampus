import React from 'react';

const AIForProfile: React.FC = () => {
  return (
    <div className="bg-white rounded-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-sm font-semibold text-gray-900">AI for your profile</h2>
        <button className="bg-black text-white text-xs px-3 py-1 rounded-full font-medium">
          Profile coach
        </button>
      </div>

      <div className="space-y-3">
        <div className="bg-gray-50 rounded-lg p-3">
          <p className="text-xs text-gray-700 mb-3">
            Your activity leans towards ML, startups and late-night study crews. Want me to prioritise your recommendations?
          </p>
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-500">wait</span>
            <span className="text-xs text-gray-400">•</span>
            <span className="text-xs text-gray-500">15m</span>
          </div>
        </div>

        <div className="bg-gray-900 text-white rounded-lg p-4">
          <p className="text-sm font-medium mb-3">
            Yes, but keep at least one wellbeing space visible too.
          </p>
          <div className="bg-gray-800 rounded-lg p-3 mb-3">
            <p className="text-xs text-gray-300">
              Done. I'll keep wellbeing and career support visible, and quietly mute low-signal meme groups.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-400">assistant • now</span>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-3">
          <p className="text-xs text-gray-700 mb-2">
            Ask to refresh your bio, adjust anonymity, or clean up your feed/visibility...
          </p>
          <button className="bg-gray-900 text-white text-xs px-3 py-1.5 rounded-lg font-medium w-full mb-2">
            Send
          </button>
          <div className="flex flex-wrap gap-2">
            <span className="bg-white border border-gray-200 text-xs px-2 py-1 rounded-full text-gray-700">
              Rewrite my bio
            </span>
            <span className="bg-white border border-gray-200 text-xs px-2 py-1 rounded-full text-gray-700">
              Balance study & fun
            </span>
            <span className="bg-white border border-gray-200 text-xs px-2 py-1 rounded-full text-gray-700">
              Tighten privacy
            </span>
            <span className="bg-white border border-gray-200 text-xs px-2 py-1 rounded-full text-gray-700">
              Showcase projects
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIForProfile;
