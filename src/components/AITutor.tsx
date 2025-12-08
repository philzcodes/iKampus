import React from 'react';
import { Send, Clock } from 'lucide-react';

const AITutor: React.FC = () => (
  <div className="bg-black p-4 rounded-xl text-white">
    <div className="flex justify-between items-start mb-3">
      <h3 className="text-sm font-semibold">AI Assistant 24/7</h3>
      <div className="flex items-center space-x-1 bg-gray-800 px-2 py-0.5 rounded-full text-xs font-medium">
        <Clock size={12} className="text-green-400" />
        <span>Smart <span className="text-green-400">contact</span></span>
      </div>
    </div>
    <p className="text-xs text-gray-400 mb-4">
      Context: access help for academics, campus & mental health
    </p>

    {/* AI Chat Bubbles */}
    <div className="space-y-3 mb-4">
      {/* Bot Response */}
      <div className="flex justify-start">
        <div className="bg-gray-800 p-3 rounded-xl rounded-tl-none max-w-[85%] text-sm">
          Yes, I also work evenings at the café. I can only do evenings + late nights.
        </div>
      </div>
      {/* User Query */}
      <div className="flex justify-end">
        <div className="bg-gray-700 p-3 rounded-xl rounded-br-none max-w-[85%] text-sm">
          I'm near 100kW
        </div>
      </div>
    </div>
    
    <div className="flex items-center space-x-2 border-t border-gray-700 pt-3">
      <div className="text-xs text-gray-400">Ask anything about your course, campus or startup plans...</div>
      <button className="ml-auto p-1 bg-green-600 rounded-full hover:bg-green-500">
        <Send size={16} />
      </button>
    </div>
  </div>
);

export default AITutor;