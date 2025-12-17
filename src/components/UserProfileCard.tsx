import React from 'react';
// These icons are imported for demonstration of best practices, 
// even if not explicitly rendered in the final image layout.
// NOTE: Assume these image files exist in your project's 'assets' directory
import profileImage from '../assets/lloyd-percy-profile.jpeg';
import campusImage from '../assets/uni-of-london-campus.jpeg';

// --- 1. Data Structure (Professional Practice) ---
interface ProfileData {
  name: string;
  major: string;
  year: number;
  campus: string;
  campusCode: string;
}

const lloydPercyData: ProfileData = {
  name: 'Lloyd Percy',
  major: 'Digital Marketing',
  year: 2,
  campus: 'Uni of London',
  campusCode: 'NG · iKampus',
};

// --- 2. Main Component ---
const UserProfileCard: React.FC = () => {
  const { name, major, year, campus, campusCode } = lloydPercyData;

  // Custom colors for high fidelity (using arbitrary values)
  const PURPLE_ACTIVE_BG = 'bg-[#9333EA]';
  const DARK_CARD_BG = 'bg-[#1E1E1E]';
  const DARK_BUTTON_BG = 'bg-[#383838]';

  return (
    <div 
      // Card container styling
      className={`p-4 rounded-xl text-white max-w-xs ${DARK_CARD_BG} shadow-2xl mx-auto`}
    >
      
      {/* Header Section */}
      <h2 className="text-2xl font-semibold mb-1">
        {name}
      </h2>
      <p className="text-sm text-gray-400 mb-4">
        {major} student · Year {year}
      </p>

      {/* Button Navigation */}
      <div className="flex space-x-2 mb-5">
        {/* Active Button: Overview */}
        <button 
          className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${PURPLE_ACTIVE_BG}`}
        >
          Overview
        </button>
        {/* Inactive Buttons */}
        <button 
          className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${DARK_BUTTON_BG}`}
        >
          Posts
        </button>
        {/* <button 
          className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${DARK_BUTTON_BG}`}
        >
          Startups
        </button> */}
      </div>

      {/* Images Section */}
      <div className="flex space-x-3 mb-5 overflow-x-scroll scrollbar-hide">
        {/* Profile Picture */}
        <img
          src={profileImage}
          alt={`${name} profile`}
          // Fixed width and height to match aspect ratio
          className="w-[120px] h-[180px] rounded-lg object-cover object-top shadow-md"
        />
        {/* Campus/Background Image */}
        <img
          src={campusImage}
          alt="Campus View"
          className="w-[120px] h-[180px] rounded-lg object-cover bg-black shadow-md"
        />
      </div>

      {/* Details Grid */}
      <div className="grid grid-cols-2 gap-x-4 gap-y-1">
        
        {/* Year Details Column */}
        <div>
          <p className="text-sm text-gray-400">Year</p>
          <p className="text-xl font-semibold leading-tight mt-0.5">
            Year {year}
          </p>
          <p className="text-sm text-gray-400 mt-1">
            {major}
          </p>
        </div>

        {/* Campus Details Column */}
        <div>
          <p className="text-sm text-gray-400">Campus</p>
          <p className="text-xl font-semibold leading-tight mt-0.5">
            {campus}
          </p>
          <p className="text-sm text-gray-400 mt-1">
            {campusCode}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserProfileCard;