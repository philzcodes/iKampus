
import DashboardLayout from '../layouts/DashboardLayout';




import React, { useState } from 'react';
import { 
  Calendar,
  Users,
  BookOpen,
  Sparkles,
  CheckCircle2,
  Coffee,
  MessageSquare,
  Clock,
  ChevronDown,
  Send,
  Plus,
  Eye,
  BarChart3,
  Shield,
  HelpCircle,
  ExternalLink
} from 'lucide-react';

const Assistant: React.FC  = () => {
  const [chatMessage, setMessage] = useState('');

  const weekTasks = [
    {
      title: 'ML project proposal',
      subtitle: 'Draft intro + methods, CS 302',
      status: 'Due Tue',
      type: 'deadline'
    },
    {
      title: 'Group presentation slides',
      subtitle: 'Genomics team - Wed Night',
      status: 'Thu evening',
      type: 'collaboration'
    },
    {
      title: 'Book wellbeing drop-in',
      subtitle: 'Student Services, Queen',
      status: 'This week',
      type: 'wellbeing'
    },
    {
      title: 'Café work Janis',
      subtitle: 'Wed, Fri - 6-7pm',
      status: 'Every',
      type: 'social'
    },
    {
      title: 'One-tap recipes',
      subtitle: 'Quick, cheap, tasty lunches for students like you.',
      type: 'suggestion'
    },
    {
      title: 'Turn my deadlines into a daily checklist',
      subtitle: 'Prioritize key tasks with Pomodoro 8 hour slots',
      type: 'productivity'
    },
    {
      title: 'Rewrite this announcement in student tone',
      subtitle: 'Fetch any email at level 14 make it clear fit friendly',
      type: 'ai-task'
    },
    {
      title: 'Explain this topic like I\'m tired but smart',
      subtitle: 'Copy paste, visualize complex concepts',
      type: 'learning'
    },
    {
      title: 'Prep me for tomorrow\'s seminar',
      subtitle: 'Key concepts, likely questions, 10-15min',
      type: 'prep'
    }
  ];

  const contextItems = [
    { label: 'Course', value: 'BSc Genomic Science • Year 2', tag: 'Complete' },
    { label: 'Focus', value: '', tag: '' },
    { label: 'Mode', value: '', tag: 'Student / On campus' },
    { label: 'Timetable', value: '', tag: 'Synced - 3 courses' },
    { label: 'Communities', value: '', tag: '5+2 you joined' },
    { label: 'Startup hub', value: '', tag: 'Highlights: ClearSkies' },
    { label: 'Quick switches', value: '', tag: '' }
  ];

  const quickActions = [
    'Use uni email only',
    'Keep anon safe',
    'Mute noisy groups',
    'Show alumni voices'
  ];

  const nextActions = [
    {
      title: 'Generate a 7-day revision map',
      subtitle: 'ML, algorithms, and Product delivery prep',
      action: 'Queue',
      actionColor: 'green'
    },
    {
      title: 'Draft a message to your ML cohort',
      subtitle: 'Asking someone to share their notes',
      action: 'Draft',
      actionColor: 'gray'
    },
    {
      title: 'Plan a balanced day tomorrow',
      subtitle: 'Classes, cafe shift, and rest blocks',
      action: 'Go',
      actionColor: 'green'
    }
  ];

  const safetyItems = [
    {
      title: 'Safety & boundaries',
      subtitle: 'You\'re in control of what I see and suggest',
      action: ''
    },
    {
      title: 'Data visibility',
      subtitle: 'Controls which courses, chats and startups I can use',
      action: 'Adjust',
      actionColor: 'blue'
    },
    {
      title: 'Anonymous questions',
      subtitle: 'To keep your name off sensitive topics...',
      action: 'Anon / Sample',
      actionColor: 'gray'
    },
    {
      title: 'Escalate to humans',
      subtitle: 'For serious support for wellbeing or safety',
      action: 'View options',
      actionColor: 'gray'
    }
  ];

  const quickSuggestions = [
    'Protect sleep',
    'Exam 7am',
    'Add café shifts',
    'Balance study vs fun',
    'Make this weekly timetable'
  ];

  return (
        <DashboardLayout>
      <div className="flex space-x-6">
      <div className="min-h-screen bg-gray-50 flex">
      {/* Left Panel - Chat */}
      <div className="w-[420px] bg-white border-r border-gray-200 flex flex-col">
        {/* Chat Header */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <h1 className="text-sm font-semibold text-gray-900">24/7 campus co-pilot</h1>
            <button className="bg-gray-900 text-white text-xs px-3 py-1 rounded-full font-medium">
              Live context
            </button>
          </div>
          <p className="text-xs text-gray-500">
            Ask me to fix complete your courses, communities & deadlines
          </p>
        </div>

        {/* Quick Action Chips */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex flex-wrap gap-2">
            <button className="flex items-center gap-1 bg-gray-100 text-gray-700 text-xs px-3 py-1.5 rounded-full font-medium hover:bg-gray-200">
              <Calendar className="w-3 h-3" />
              Camp plan
            </button>
            <button className="flex items-center gap-1 bg-gray-100 text-gray-700 text-xs px-3 py-1.5 rounded-full font-medium hover:bg-gray-200">
              <Sparkles className="w-3 h-3" />
              Revamio & fix
            </button>
            <button className="flex items-center gap-1 bg-gray-100 text-gray-700 text-xs px-3 py-1.5 rounded-full font-medium hover:bg-gray-200">
              <Users className="w-3 h-3" />
              Campus & life
            </button>
            <button className="flex items-center gap-1 bg-blue-500 text-white text-xs px-3 py-1.5 rounded-full font-medium hover:bg-blue-600">
              <CheckCircle2 className="w-3 h-3" />
              Anon check-in
            </button>
          </div>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {/* User Message */}
          <div className="flex justify-end">
            <div className="bg-gray-100 rounded-2xl rounded-tr-sm px-4 py-3 max-w-[85%]">
              <p className="text-sm text-gray-900">
                Hey Aylo, I pulled in my CS deadlines, society events and work shifts this week. Want me to build a 7-day plan that keeps nights mostly free?
              </p>
              <span className="text-xs text-gray-500 mt-1 block">Assistant • 7m ago</span>
            </div>
          </div>

          {/* AI Response */}
          <div className="flex justify-start">
            <div className="bg-gray-900 text-white rounded-2xl rounded-tl-sm px-4 py-3 max-w-[85%]">
              <p className="text-sm mb-2">
                Yes please. I can do mornings, quick breaks between classes and late nights on Fridays only.
              </p>
              <span className="text-xs text-gray-400">You • 3m ago</span>
            </div>
          </div>

          {/* AI Detailed Response */}
          <div className="flex justify-start">
            <div className="bg-gray-100 rounded-2xl rounded-tl-sm px-4 py-3 max-w-[85%]">
              <p className="text-sm text-gray-900 mb-3">
                Got it. I'll: • Block 45-min morning focus slots before lectures • Use 15-min gaps for revision + Keep Friday evenings light and reserve Fri late nights for deep work. Anything you want me to protect as non-negotiable breaks?
              </p>
              <span className="text-xs text-gray-500">Assistant • now</span>
            </div>
          </div>
        </div>

        {/* Chat Input */}
        <div className="p-4 border-t border-gray-200">
          <div className="bg-gray-50 rounded-lg p-3 mb-3">
            <input
              type="text"
              placeholder="Tell me what to protect (sleep, gym, socialise) or paste your timetable..."
              value={chatMessage}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full bg-transparent text-sm text-gray-900 placeholder-gray-500 focus:outline-none"
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {quickSuggestions.map((suggestion, idx) => (
                <button
                  key={idx}
                  className="bg-white border border-gray-200 text-gray-700 text-xs px-3 py-1.5 rounded-full font-medium hover:border-gray-300"
                >
                  {suggestion}
                </button>
              ))}
            </div>
            <button className="bg-gray-900 text-white p-2 rounded-full hover:bg-gray-800 ml-3">
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Middle Panel - This Week */}
      <div className="flex-1 bg-gray-50 overflow-y-auto">
        <div className="max-w-3xl mx-auto p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-1">This week at a glance</h2>
              <p className="text-sm text-gray-600">Pulled from your timetable, communities & events</p>
            </div>
            <button className="bg-gray-100 text-gray-700 text-xs px-4 py-2 rounded-lg font-medium hover:bg-gray-200">
              4am-9pm
            </button>
          </div>

          {/* Task Cards */}
          <div className="space-y-3">
            {weekTasks.map((task, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg p-4 hover:shadow-sm transition-shadow border border-gray-100"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-sm font-semibold text-gray-900 mb-1">{task.title}</h3>
                    <p className="text-xs text-gray-600">{task.subtitle}</p>
                  </div>
                  {task.status && (
                    <span className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full font-medium ml-3 flex-shrink-0">
                      {task.status}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Panel - Context & Settings */}
      <div className="w-[360px] bg-white border-l border-gray-200 overflow-y-auto">
        <div className="p-6">
          {/* Current Context */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Current context</h3>
            <div className="space-y-3">
              {contextItems.map((item, idx) => (
                <div key={idx} className="flex items-center justify-between py-2">
                  <span className="text-xs text-gray-700">{item.label}</span>
                  {item.tag && (
                    <div className="flex items-center gap-2">
                      {item.value && (
                        <span className="text-xs text-gray-500">{item.value}</span>
                      )}
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        item.tag.includes('Complete') || item.tag.includes('Synced')
                          ? 'bg-green-100 text-green-700'
                          : item.tag.includes('Highlights')
                          ? 'bg-blue-100 text-blue-700'
                          : 'bg-gray-100 text-gray-700'
                      }`}>
                        {item.tag}
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              {quickActions.map((action, idx) => (
                <button
                  key={idx}
                  className="bg-gray-100 text-gray-700 text-xs px-3 py-1.5 rounded-full font-medium hover:bg-gray-200"
                >
                  {action}
                </button>
              ))}
            </div>
          </div>

          {/* Suggested Next Actions */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-semibold text-gray-900">Suggested next actions</h3>
              <span className="text-xs text-gray-500">Based on what you asked this week</span>
            </div>
            <div className="space-y-3">
              {nextActions.map((action, idx) => (
                <div
                  key={idx}
                  className="bg-gray-50 rounded-lg p-3 hover:bg-gray-100 transition-colors"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="text-sm font-medium text-gray-900 mb-1">{action.title}</h4>
                      <p className="text-xs text-gray-600">{action.subtitle}</p>
                    </div>
                    <button className={`text-xs px-3 py-1.5 rounded-lg font-medium ml-3 flex-shrink-0 ${
                      action.actionColor === 'green'
                        ? 'bg-green-500 text-white hover:bg-green-600'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}>
                      {action.action}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Safety & Boundaries */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Safety & boundaries</h3>
            <div className="space-y-3">
              {safetyItems.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-gray-50 rounded-lg p-3 hover:bg-gray-100 transition-colors"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="text-sm font-medium text-gray-900 mb-1">{item.title}</h4>
                      <p className="text-xs text-gray-600">{item.subtitle}</p>
                    </div>
                    {item.action && (
                      <button className={`text-xs px-3 py-1.5 rounded-lg font-medium ml-3 flex-shrink-0 ${
                        item.actionColor === 'blue'
                          ? 'text-blue-600 hover:text-blue-700'
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}>
                        {item.action}
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating Action Button */}
      <button className="fixed bottom-8 right-8 w-14 h-14 bg-gray-900 text-white rounded-full shadow-lg hover:bg-gray-800 transition-colors flex items-center justify-center">
        <Plus className="w-6 h-6" />
      </button>
    </div>
      </div>
    </DashboardLayout>
   
  );
};

export default Assistant;