import React from 'react';

/**
 * Renders the empty state for the chat detail pane.
 */
const ChatDetailEmpty = () => {
  return (
    <div className="flex items-center justify-center h-full p-10 text-center">
      <div className="max-w-md">
        <h2 className="text-xl font-bold text-gray-800 mb-4">
          Select a chat to view messages
        </h2>
        <p className="text-gray-500 mb-6 text-sm leading-relaxed">
          Open a conversation with your course teacher, classmates, or campus
          groups. You can always bring the iKampus AI assistant into any chat when
          you need help.
        </p>
        <ul className="text-left text-sm text-gray-600 space-y-2 list-disc list-inside">
          <li>Use "Course teacher - MCP" to discuss lectures or assignments.</li>
          <li>Create group chats for projects, societies, and startup teams.</li>
          <li>Keep everything within your verified campus network.</li>
        </ul>
      </div>
    </div>
  );
};

export default ChatDetailEmpty;