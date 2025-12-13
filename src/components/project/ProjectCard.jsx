import React from 'react';

/**
 * Renders a single project card component.
 * @param {object} props
 * @param {string} props.title - The title of the project.
 * @param {string} props.description - A brief description of the project.
 * @param {string} props.timeAgo - The time since the project was last updated.
 * @param {string[]} props.avatarUrls - Array of URLs for the user avatars.
 * @param {string} [props.color='purple'] - The color for the status dot (e.g., 'purple', 'green').
 */
const ProjectCard = ({
  title,
  description,
  timeAgo,
  avatarUrls,
  color = 'purple',
}) => {
  // Map color prop to specific Tailwind classes
  const colorClasses = {
    purple: 'bg-indigo-500',
    // The image seems to only use purple, but here's how you'd add others
    // green: 'bg-green-500',
    // blue: 'bg-blue-500',
  };

  const statusDotClass = colorClasses[color] || colorClasses.purple;

  return (
    <div className="p-5 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow cursor-pointer border border-gray-100 min-h-[160px]">
      <div className="flex items-start mb-2">
        {/* Status Dot */}
        <div
          className={`w-2 h-2 rounded-full mr-2 mt-1 ${statusDotClass}`}
        ></div>
        {/* Title */}
        <h3 className="text-base font-semibold text-gray-800 leading-snug">
          {title}
        </h3>
      </div>
      {/* Description */}
      <p className="text-sm text-gray-500 mb-4 line-clamp-3">
        {description}
      </p>

      <div className="flex justify-between items-center text-xs text-gray-400">
        {/* Time Ago */}
        <span className="font-medium">{timeAgo}</span>

        {/* Avatars */}
        <div className="flex -space-x-2 overflow-hidden">
          {avatarUrls.map((url, index) => (
            <img
              key={index}
              className="inline-block h-6 w-6 rounded-full ring-2 ring-white object-cover"
              src={url}
              alt={`Avatar ${index + 1}`}
              // The image uses a mix of real people and avatars.
              // For a real application, ensure these avatars are compliant with your design system.
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;