import React from 'react';

const AIForCommunities: React.FC = () => {
  return (
    <div className="bg-white rounded-lg p-4 mb-4">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-sm font-semibold text-gray-900">AI for communities</h2>
        <button className="bg-black text-white text-xs px-3 py-1 rounded-full font-medium">
          Smart suggestions
        </button>
      </div>
      <div className="bg-gray-50 rounded-lg p-3 mb-3">
        <p className="text-xs text-gray-700 mb-3">
          I can help you pick 3-5 core communities so your feed doesn't get noisy. Want me to auto-mute low-signal groups?
        </p>
        <div className="flex gap-2">
          <button className="text-xs text-gray-600">Nope</button>
          <span className="text-xs text-gray-400">•</span>
          <span className="text-xs text-gray-500">1 min ago</span>
        </div>
      </div>
      <div className="bg-gray-900 text-white rounded-lg p-3">
        <button className="w-full text-center text-xs font-medium py-2">
          Yes, but keep course + startup stuff fully on
        </button>
        <div className="flex gap-2 mt-2">
          <span className="text-xs text-gray-400">Done. I prioritised course, startup and wellbeing spaces. I also found 2 more ML-focused networking opportunities...</span>
        </div>
        <div className="flex gap-2 mt-2">
          <span className="text-xs text-gray-400">Revision • now</span>
        </div>
      </div>
    </div>
  );
};

export default AIForCommunities;
