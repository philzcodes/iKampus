import React, {useState} from 'react';
import DashboardLayout from '../layouts/DashboardLayout';



import { 
  Search,
  Phone,
  Video,
  MoreHorizontal,
  Send,
  Plus,
  Smile,
  Paperclip,
  Mic,
  ChevronRight,
  Clock,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';

const Chat: React.FC  = () => {
  const [message, setMessage] = useState('');
  const [selectedChat, setSelectedChat] = useState('Ada - Study buddy');

  const chats = [
    {
      id: 1,
      name: 'Ada - Study buddy',
      message: 'Can we do ML notes before the 4pm lab?',
      time: '2m',
      avatar: 'A',
      type: 'ai',
      active: true,
      badge: 'AI'
    },
    {
      id: 2,
      name: 'CS 302 - ML Cohort',
      message: 'Reminder: submit project topics by Thursday night',
      time: '1h',
      avatar: 'CS',
      type: 'group'
    },
    {
      id: 3,
      name: 'Product Society Core Team',
      message: 'Guest bag for pitch night Wed?',
      time: '3h',
      avatar: 'PS',
      type: 'group'
    },
    {
      id: 4,
      name: 'Café Manager',
      message: 'Can you take a shift Wednesday 5-9pm?',
      time: '2d',
      avatar: 'C',
      type: 'direct'
    },
    {
      id: 5,
      name: 'AI Assistant thread',
      message: "Here's your next revision map",
      time: 'Yesterday',
      avatar: 'AI',
      type: 'ai'
    }
  ];

  const messages = [
    {
      id: 1,
      sender: 'Ada',
      text: 'Hey, are you still down to do a quick revision sprint before tomorrow\'s ML lab?',
      time: '3:45 pm',
      isAI: true
    },
    {
      id: 2,
      sender: 'You',
      text: 'Yea! I finish class at 3:15. Can we meet in the quiet area next to the café?',
      time: '3:47 pm',
      isUser: true
    },
    {
      id: 3,
      sender: 'Ada',
      text: 'Perfect. I\'ll bring my notes and you can explain that loss function bit again 🤝',
      time: '3:48 pm',
      isAI: true
    },
    {
      id: 4,
      sender: 'Ada',
      text: 'Deal. Also, the campus assistant made me a 7-day plan. Want me to share it so we don\'t overlap deadlines?',
      time: '3:50 pm',
      isAI: true
    },
    {
      id: 5,
      sender: 'You',
      text: 'Yes please, that would actually save my brain.',
      time: '3:51 pm',
      isUser: true
    }
  ];

  const messageRequests = [
    {
      id: 1,
      title: 'Anonymous wellbeing check',
      subtitle: 'Someone needs to chat anon',
      action: 'View',
      status: 'pending'
    },
    {
      id: 2,
      title: 'Dorm group chat invite',
      subtitle: 'Night Owls - 3rd floor east',
      action: 'Join',
      status: 'new'
    },
    {
      id: 3,
      title: 'Startup hub collab',
      subtitle: 'Founder wants to share your FlightPrice',
      action: 'Reply',
      status: 'new'
    }
  ];

  const smartReplies = [
    {
      title: 'Suggest 3 quick replies',
      subtitle: 'Based on this chat\'s tone & your schedule'
    },
    {
      title: 'Share my ML revision plan',
      subtitle: 'Send the link to shared revision slots'
    },
    {
      title: 'Set a study session reminder',
      subtitle: '1?1 block time in both your calendars'
    },
    {
      title: 'Keep this chat open-friendly',
      subtitle: 'Ease stress/tone & welcome joking'
    }
  ];

  const boundaries = [
    {
      title: 'Only friends & courses',
      subtitle: 'Block requests (DMs from) outside your uni'
    },
    {
      title: 'Quiet hours',
      subtitle: 'Mute notifications after midnight, keep emergencies live'
    },
    {
      title: 'Escalate harmful messages',
      subtitle: 'Share with wellbeing or security is a free tap'
    }
  ];

  return (
     <DashboardLayout>

         <div className="h-screen bg-gray-50 flex">
      {/* Left Sidebar - Chat List */}
      <div className="w-72 bg-white border-r border-gray-200 flex flex-col">
        {/* Sidebar Header */}
        <div className="p-4 border-b border-gray-200">
          <h1 className="text-lg font-semibold text-gray-900 mb-1">Chats</h1>
          <p className="text-xs text-gray-500">People, communities & assistant threads</p>
        </div>

        {/* Chat Filter Tabs */}
        <div className="px-4 py-3 border-b border-gray-200">
          <div className="flex gap-2">
            <button className="bg-gray-900 text-white text-xs px-3 py-1.5 rounded-full font-medium">
              All
            </button>
            <button className="bg-gray-100 text-gray-700 text-xs px-3 py-1.5 rounded-full font-medium hover:bg-gray-200">
              People
            </button>
            <button className="bg-gray-100 text-gray-700 text-xs px-3 py-1.5 rounded-full font-medium hover:bg-gray-200">
              Communities
            </button>
          </div>
        </div>

        {/* Chat List */}
        <div className="flex-1 overflow-y-auto">
          {chats.map((chat) => (
            <button
              key={chat.id}
              onClick={() => setSelectedChat(chat.name)}
              className={`w-full p-4 flex items-start gap-3 hover:bg-gray-50 transition-colors ${
                selectedChat === chat.name ? 'bg-gray-50' : ''
              }`}
            >
              <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                chat.type === 'ai' ? 'bg-gray-900 text-white' : 'bg-gray-200 text-gray-700'
              }`}>
                <span className="text-sm font-semibold">{chat.avatar}</span>
              </div>
              <div className="flex-1 min-w-0 text-left">
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-semibold text-gray-900">{chat.name}</h3>
                    {chat.badge && (
                      <span className="bg-green-500 text-white text-xs px-2 py-0.5 rounded-full font-medium">
                        {chat.badge}
                      </span>
                    )}
                  </div>
                  <span className="text-xs text-gray-500">{chat.time}</span>
                </div>
                <p className="text-xs text-gray-600 truncate">{chat.message}</p>
              </div>
              {chat.active && (
                <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0 mt-2"></div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Center Panel - Chat Messages */}
      <div className="flex-1 flex flex-col bg-white">
        {/* Chat Header */}
        <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center">
              <span className="text-sm font-semibold text-white">A</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-sm font-semibold text-gray-900">Ada</h2>
                <span className="bg-green-500 text-white text-xs px-2 py-0.5 rounded">Online</span>
              </div>
              <p className="text-xs text-gray-500">
                <span className="text-green-500">●</span> Year 2 - Same timetable on Tue/Thu
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="text-gray-600 hover:text-gray-900">
              <Phone className="w-5 h-5" />
            </button>
            <button className="text-gray-600 hover:text-gray-900">
              <Video className="w-5 h-5" />
            </button>
            <button className="text-gray-600 hover:text-gray-900">
              <MoreHorizontal className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`max-w-[70%] ${msg.isUser ? '' : 'flex items-start gap-2'}`}>
                {!msg.isUser && (
                  <div className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xs font-semibold text-white">A</span>
                  </div>
                )}
                <div>
                  <div className={`rounded-2xl px-4 py-3 ${
                    msg.isUser 
                      ? 'bg-gray-900 text-white rounded-tr-sm' 
                      : 'bg-gray-100 text-gray-900 rounded-tl-sm'
                  }`}>
                    <p className="text-sm">{msg.text}</p>
                  </div>
                  <div className={`flex items-center gap-2 mt-1 ${msg.isUser ? 'justify-end' : 'justify-start'}`}>
                    <span className="text-xs text-gray-500">{msg.sender}</span>
                    <span className="text-xs text-gray-400">•</span>
                    <span className="text-xs text-gray-500">{msg.time}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Message Input */}
        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center gap-3">
            <button className="text-gray-600 hover:text-gray-900 p-2 rounded-full hover:bg-gray-100">
              <Plus className="w-5 h-5" />
            </button>
            <div className="flex-1 bg-gray-50 rounded-full px-4 py-3 flex items-center gap-3">
              <input
                type="text"
                placeholder="Message Ada, or pull in a summary from your AI assistant..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="flex-1 bg-transparent text-sm text-gray-900 placeholder-gray-500 focus:outline-none"
              />
              <button className="text-gray-600 hover:text-gray-900">
                <Smile className="w-5 h-5" />
              </button>
              <button className="text-gray-600 hover:text-gray-900">
                <Paperclip className="w-5 h-5" />
              </button>
            </div>
            <button className="bg-gray-900 text-white p-3 rounded-full hover:bg-gray-800">
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Right Panel - Message Requests & Smart Features */}
      <div className="w-80 bg-gray-50 border-l border-gray-200 overflow-y-auto">
        <div className="p-6">
          {/* Message Requests */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-semibold text-gray-900">Message requests</h3>
              <span className="text-xs text-gray-500">3 pending</span>
            </div>
            <p className="text-xs text-gray-500 mb-4">From new people & communities</p>
            
            <div className="space-y-2">
              {messageRequests.map((request) => (
                <div key={request.id} className="bg-white rounded-lg p-3 hover:shadow-sm transition-shadow">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="text-sm font-medium text-gray-900 mb-1">{request.title}</h4>
                      <p className="text-xs text-gray-600">{request.subtitle}</p>
                    </div>
                    <button className="bg-gray-100 text-gray-700 text-xs px-3 py-1.5 rounded-lg font-medium hover:bg-gray-200 ml-3">
                      {request.action}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Smart Replies & Help */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-semibold text-gray-900">Smart replies & help</h3>
              <button className="bg-gray-900 text-white text-xs px-3 py-1 rounded-full font-medium">
                Context aware
              </button>
            </div>
            <p className="text-xs text-gray-500 mb-4">Powered by your AI assistant</p>

            <div className="space-y-2">
              {smartReplies.map((reply, idx) => (
                <button
                  key={idx}
                  className="w-full bg-white rounded-lg p-3 text-left hover:shadow-sm transition-shadow"
                >
                  <h4 className="text-sm font-medium text-gray-900 mb-1">{reply.title}</h4>
                  <p className="text-xs text-gray-600">{reply.subtitle}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Boundaries & Safety */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-2">Boundaries & safety</h3>
            <p className="text-xs text-gray-500 mb-4">Type who can DM you</p>

            <div className="space-y-2">
              {boundaries.map((boundary, idx) => (
                <button
                  key={idx}
                  className="w-full bg-white rounded-lg p-3 text-left hover:shadow-sm transition-shadow"
                >
                  <h4 className="text-sm font-medium text-gray-900 mb-1">{boundary.title}</h4>
                  <p className="text-xs text-gray-600">{boundary.subtitle}</p>
                </button>
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
      
    </DashboardLayout>
  
  );
};

export default Chat;