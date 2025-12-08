import React from 'react';
import { Calendar } from 'lucide-react';

interface EventItemProps {
  title: string;
  time: string;
  location: string;
  type: 'NEW' | 'INTERESTED';
}

const EventItem: React.FC<EventItemProps> = ({ title, time, location, type }) => (
  <div className="py-2 border-b last:border-b-0">
    <div className="flex justify-between items-center">
      <h4 className="text-sm font-medium text-gray-800">{title}</h4>
      <div className={`text-xs font-semibold px-2 py-0.5 rounded-full ${type === 'NEW' ? 'bg-green-100 text-green-700' : 'bg-green-500 text-white'}`}>
        {type}
      </div>
    </div>
    <p className="text-xs text-gray-500 mt-0.5">
      {time} | <span className="font-medium">{location}</span>
    </p>
  </div>
);

const EventsBoard: React.FC = () => (
  <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
    <div className="flex justify-between items-center mb-3">
      <h3 className="text-base font-semibold text-gray-900">Events board</h3>
      <div className="flex items-center space-x-1 text-xs text-gray-500">
        <Calendar size={14} />
        <span>Week</span>
      </div>
    </div>

    <div className="space-y-1">
      <EventItem title="Startup Pitch Night" time="Today 3:23 PM" location="Innovation Hub" type="INTERESTED" />
      <EventItem title="Late Night Library Sprint" time="Tomorrow 6:00 PM" location="Main Library" type="NEW" />
      <EventItem title="Mental Health Drop-in" time="Thu 3:00 PM" location="Student Wellbeing" type="NEW" />
    </div>
  </div>
);

export default EventsBoard;