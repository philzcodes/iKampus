import { ClipboardList, MoreVertical } from 'lucide-react';

export const ChatHeader: React.FC = () => {
  return (
    <div className="flex items-center justify-between p-4 border-b bg-white">
      <div className="flex items-center space-x-3">
        <ClipboardList className="w-5 h-5 text-purple-600" />
        <h2 className="text-lg font-semibold text-gray-900">
          Customer Feedback Analysis
        </h2>
      </div>
      <div className="flex items-center space-x-4">
        {/* GPT-4 Selector (Simulated Dropdown/Button) */}
        <div className="px-3 py-1 text-sm font-medium text-purple-700 bg-purple-100 rounded-full cursor-pointer hover:bg-purple-200 transition-colors">
          GPT-4
        </div>
        {/* Toggle Switch (Simulated) */}
        <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
          <input
            type="checkbox"
            name="toggle"
            id="toggle"
            className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer checked:right-0 checked:border-purple-600 checked:bg-purple-600 focus:outline-none"
          />
          <label
            htmlFor="toggle"
            className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
          ></label>
        </div>
        <MoreVertical className="w-5 h-5 text-gray-500 cursor-pointer hover:text-gray-700" />
      </div>
    </div>
  );
};