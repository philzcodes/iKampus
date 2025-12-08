import React from 'react';

interface ContextItem {
  label: string;
  value: string;
}

interface TaggedSection {
  label: string;
  tags: string[];
}

const ProfileContext: React.FC = () => {
  const contextItems: ContextItem[] = [
    { label: 'Course', value: 'BSc Computer Science' },
    { label: 'Year', value: 'Year 2' },
    { label: 'Mode', value: 'Student' },
  ];

  const taggedItems: TaggedSection[] = [
    { label: 'Pinned tasks', tags: ['ML project proposal', 'Pitch deck for Hackathon', 'Book mental health consult'] },
    { label: 'Campus quick links', tags: ['Library hours', 'Counselling', 'IT help', 'Study spaces'] }
  ];

  return (
    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
      <h3 className="text-base font-semibold text-gray-900 mb-3">Your profile context</h3>
      
      {/* Static Context */}
      <div className="space-y-1 mb-4">
        {contextItems.map((item) => (
          <div key={item.label} className="flex justify-between text-sm">
            <span className="text-gray-600">{item.label}</span>
            <span className="text-gray-800 font-medium">{item.value}</span>
          </div>
        ))}
      </div>

      {/* Tagged Items */}
      {taggedItems.map((section, index) => (
        <div key={index} className="mb-4">
          <p className="text-sm font-semibold text-gray-700 mb-2">{section.label}</p>
          <div className="flex flex-wrap gap-2">
            {section.tags.map((tag) => (
              <span key={tag} className="text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-700 hover:bg-gray-200 cursor-pointer">
                {tag}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProfileContext;