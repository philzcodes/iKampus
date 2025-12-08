import React from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';

interface CommunitiesHeaderProps {
  filters: string[];
  selectedFilter: string;
  searchQuery: string;
  onFilterChange: (filter: string) => void;
  onSearchChange: (query: string) => void;
}

const CommunitiesHeader: React.FC<CommunitiesHeaderProps> = ({
  filters,
  selectedFilter,
  searchQuery,
  onFilterChange,
  onSearchChange,
}) => {
  return (
    <div className="bg-white rounded-lg p-4 mb-4">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-lg font-semibold text-gray-900">Communities</h1>
        <button className="text-gray-600 hover:text-gray-900">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
          </svg>
        </button>
      </div>
      <p className="text-sm text-gray-600 mb-4">
        Stay in sync. Join the communities, hubs & interests at King's
      </p>

      {/* Search */}
      <div className="relative mb-4">
        <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
        <input
          type="text"
          placeholder="Search communities..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
      </div>

      {/* Filters */}
      <div className="flex items-center gap-2 mb-4">
        <button className="text-gray-600 hover:text-gray-900">
          <SlidersHorizontal className="w-4 h-4" />
        </button>
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => onFilterChange(filter)}
            className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
              selectedFilter === filter
                ? 'bg-orange-500 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CommunitiesHeader;
