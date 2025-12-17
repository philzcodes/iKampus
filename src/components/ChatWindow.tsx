import {
  Paperclip,
  Mic,
  Send,
  Loader2,
  FileText,
  MessageSquare,
} from 'lucide-react';

// --- Data Types ---
interface Message {
  id: number;
  type: 'user' | 'ai';
  content: string;
  isThinking?: boolean;
}

interface FileMessage extends Message {
  fileName: string;
}

const messages: Message[] = [
  {
    id: 1,
    type: 'ai',
    content:
      'Hello! How can I assist you with your customer feedback analysis today?',
  },
  {
    id: 2,
    type: 'user',
    content: 'I need to understand the key themes from our recent customer survey.',
  },
  {
    id: 3,
    type: 'ai',
    content:
      'Certainly! Please provide the survey data. I can help identify recurring themes, sentiment, and actionable insights from the qualitative feedback.',
  },
  {
    id: 4,
    type: 'user',
    content: 'Great! I’ll upload the CSV file now.',
    fileName: 'survey_data.csv',
  } as FileMessage,
  {
    id: 5,
    type: 'ai',
    content:
      'Excellent! Once uploaded, I’ll begin processing the data. We can then discuss the initial findings and how you’d like to visualize them.',
  },
  {
    id: 6,
    type: 'user',
    content:
      'The file is uploaded. Please focus on identifying common pain points and areas for improvement mentioned by customers.',
  },
  {
    id: 7,
    type: 'ai',
    content: 'Thinking...',
    isThinking: true,
  },
];

// --- Components ---

const Avatar: React.FC<{ type: 'user' | 'ai' }> = ({ type }) => {
  const isUser = type === 'user';
  return (
    <div
      className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
        isUser
          ? 'bg-purple-200 text-purple-700 font-medium text-sm'
          : 'bg-gray-200 text-gray-700'
      }`}
    >
      {isUser ? 'J' : <MessageSquare className="w-4 h-4" />}
    </div>
  );
};

const FileBubble: React.FC<FileMessage> = ({ fileName }) => (
  <div className="bg-white p-3 rounded-lg flex items-center space-x-2 border border-gray-200 shadow-sm text-gray-800 max-w-xs">
    <FileText className="w-5 h-5 text-purple-600" />
    <span className="text-sm font-medium truncate">{fileName}</span>
  </div>
);

const MessageBubble: React.FC<{ message: Message }> = ({ message }) => {
  const isUser = message.type === 'user';
  const isFile = 'fileName' in message;
  const isThinking = message.isThinking;

  // AI Bubble Style
  const aiStyle = `max-w-xl p-3 rounded-xl rounded-tl-none bg-gray-50 text-gray-800`;
  
  // User Bubble Style
  const userStyle = `max-w-xl p-3 rounded-xl rounded-br-none bg-purple-600 text-white`;

  if (isThinking) {
    return (
      <div className="text-xs text-gray-500 my-2">
        <Loader2 className="w-3 h-3 inline-block animate-spin mr-1" />
        {message.content}
      </div>
    );
  }

  return (
    <div
      className={`flex mb-4 ${isUser ? 'justify-end' : 'justify-start'}`}
    >
      {!isUser && <Avatar type="ai" />}
      <div className={`mx-3 flex flex-col ${isUser ? 'items-end' : 'items-start'}`}>
        
        {/* Main Content */}
        {isFile && <FileBubble {...(message as FileMessage)} />}

        <div className={`text-sm ${isFile ? 'mt-2' : ''} ${isUser ? userStyle : aiStyle}`}>
          {message.content}
        </div>
      </div>
      {isUser && <Avatar type="user" />}
    </div>
  );
};


export const ChatWindow: React.FC = () => {
  return (
    <div className="flex flex-col flex-1 h-full bg-gray-50">
      
      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-8 space-y-4">
        {messages.map((message) => (
          <MessageBubble key={message.id} message={message} />
        ))}
      </div>

      {/* Input Bar */}
      <div className="p-4 border-t bg-white">
        <div className="flex items-center space-x-2 bg-gray-100 p-2 rounded-full shadow-lg">
          
          {/* Attachment Icon */}
          <button className="p-2 text-gray-500 hover:text-gray-700 transition-colors">
            <Paperclip className="w-5 h-5" />
          </button>
          
          {/* Message Input */}
          <input
            type="text"
            placeholder="Message..."
            className="flex-1 bg-transparent text-gray-800 placeholder-gray-500 focus:outline-none text-sm px-2"
          />
          
          {/* Mic Icon */}
          <button className="p-2 text-gray-500 hover:text-gray-700 transition-colors">
            <Mic className="w-5 h-5" />
          </button>
          
          {/* Send Button */}
          <button className="p-3 bg-purple-600 hover:bg-purple-700 text-white rounded-full transition-colors shadow-md">
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};