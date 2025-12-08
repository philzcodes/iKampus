import React from 'react';

interface DiscoverTag {
  tag: string;
  info: string;
}

interface DiscoverByTagProps {
  tags: DiscoverTag[];
}

const DiscoverByTag: React.FC<DiscoverByTagProps> = ({ tags }) => {
  return (
    <div className="bg-white rounded-lg p-4">
      <h2 className="text-sm font-semibold text-gray-900 mb-2">Discover by tag</h2>
      <p className="text-xs text-gray-500 mb-3">Mix course, campus & fun</p>
      <div className="space-y-2">
        {tags.map((item, idx) => (
          <button key={idx} className="w-full flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 transition-colors">
            <div className="flex-1 text-left">
              <span className="text-sm font-medium text-gray-900 block">{item.tag}</span>
              <span className="text-xs text-gray-500">{item.info}</span>
            </div>
            <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded font-medium">
              Explore
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default DiscoverByTag;
