import { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { Calendar as CalIcon, Plus, Clock, MapPin, AlertCircle, Trash2 } from 'lucide-react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "../ui/card";

interface Event {
  id: string;
  title: string;
  start: string;
  description?: string;
  location?: string;
  backgroundColor?: string;
  borderColor?: string;
}

const CalendarView = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedEventId, setSelectedEventId] = useState<string | null>(null);
  const [eventDetails, setEventDetails] = useState({
    title: '',
    description: '',
    location: '',
    color: '#2563eb'
  });

  const eventColors = [
    { value: '#2563eb', label: 'Blue' },
    { value: '#16a34a', label: 'Green' },
    { value: '#dc2626', label: 'Red' },
    { value: '#ca8a04', label: 'Yellow' },
    { value: '#9333ea', label: 'Purple' }
  ];

  const handleDateClick = (info: any) => {
    setSelectedEventId(null);
    setSelectedDate(info.dateStr);
    setEventDetails({
      title: '',
      description: '',
      location: '',
      color: '#2563eb'
    });
    setShowModal(true);
  };

  const handleSaveEvent = () => {
    if (!eventDetails.title.trim() || !selectedDate) return;
    
    const newEvent: Event = {
      id: selectedEventId || Date.now().toString(),
      title: eventDetails.title,
      start: selectedDate,
      description: eventDetails.description,
      location: eventDetails.location,
      backgroundColor: eventDetails.color,
      borderColor: eventDetails.color
    };
    
    setEvents(prev => {
      if (selectedEventId) {
        return prev.map(event => event.id === selectedEventId ? newEvent : event);
      }
      return [...prev, newEvent];
    });
    setShowModal(false);
  };

  const handleEventClick = (info: any) => {
    const event = events.find(e => e.id === info.event.id);
    
    if (event) {
      setSelectedEventId(event.id);
      setEventDetails({
        title: event.title,
        description: event.description || '',
        location: event.location || '',
        color: event.backgroundColor || '#2563eb'
      });
      setSelectedDate(event.start);
      setShowModal(true);
    }
  };

  const handleDeleteEvent = () => {
    if (selectedEventId) {
      setEvents(prev => prev.filter(event => event.id !== selectedEventId));
      setShowModal(false);
    }
  };

  return (
    <Card className="w-full min-h-[600px] bg-white shadow-md">
      <CardHeader className="border-b pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-2xl font-bold flex items-center gap-2">
            <CalIcon className="text-blue-500" />
            Calendar
          </CardTitle>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              {eventColors.map(color => (
                <div
                  key={color.value}
                  className="w-3 h-3 rounded-full border border-gray-200"
                  style={{ backgroundColor: color.value }}
                  title={color.label}
                />
              ))}
            </div>
            <button
              onClick={() => {
                setSelectedEventId(null);
                setSelectedDate(new Date().toISOString().split('T')[0]);
                setEventDetails({
                  title: '',
                  description: '',
                  location: '',
                  color: '#2563eb'
                });
                setShowModal(true);
              }}
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors"
            >
              <Plus size={16} />
              Add Event
            </button>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="p-4">
        <div className="calendar-container">
          <FullCalendar
            plugins={[dayGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            events={events}
            dateClick={handleDateClick}
            eventClick={handleEventClick}
            editable={true}
            eventDrop={(info) => {
              setEvents(prev => prev.map(evt => 
                evt.id === info.event.id 
                  ? { ...evt, start: info.event.startStr }
                  : evt
              ));
            }}
            headerToolbar={{
              left: 'prev,next today',
              center: 'title',
              right: 'dayGridMonth,dayGridWeek'
            }}
            height="600px"
            eventContent={(eventInfo) => (
              <div className="flex items-center gap-1 p-1 text-sm truncate">
                <div
                  className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{ backgroundColor: eventInfo.event.backgroundColor }}
                />
                <span className="truncate">{eventInfo.event.title}</span>
              </div>
            )}
          />
        </div>

        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">
                  {selectedEventId ? 'Edit Event' : 'Add Event'}
                </h2>
                <button 
                  onClick={() => setShowModal(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Event Title *</label>
                  <input
                    type="text"
                    value={eventDetails.title}
                    onChange={(e) => setEventDetails({
                      ...eventDetails,
                      title: e.target.value
                    })}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter event title"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium flex items-center gap-2">
                    <Clock size={16} className="text-gray-500" />
                    Date
                  </label>
                  <input
                    type="date"
                    value={selectedDate || ''}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium flex items-center gap-2">
                    <AlertCircle size={16} className="text-gray-500" />
                    Description
                  </label>
                  <textarea
                    value={eventDetails.description}
                    onChange={(e) => setEventDetails({
                      ...eventDetails,
                      description: e.target.value
                    })}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Add description"
                    rows={3}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium flex items-center gap-2">
                    <MapPin size={16} className="text-gray-500" />
                    Location
                  </label>
                  <input
                    type="text"
                    value={eventDetails.location}
                    onChange={(e) => setEventDetails({
                      ...eventDetails,
                      location: e.target.value
                    })}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Add location"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Event Color</label>
                  <div className="flex gap-2">
                    {eventColors.map(color => (
                      <button
                        key={color.value}
                        onClick={() => setEventDetails({
                          ...eventDetails,
                          color: color.value
                        })}
                        className={`w-6 h-6 rounded-full transition-transform hover:scale-110 ${
                          eventDetails.color === color.value ? 'ring-2 ring-offset-2 scale-110' : ''
                        }`}
                        style={{ backgroundColor: color.value }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center gap-2 mt-6 pt-4 border-t">
                <div>
                  {selectedEventId && (
                    <button
                      onClick={handleDeleteEvent}
                      className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-red-600 hover:text-red-700 transition-colors"
                    >
                      <Trash2 size={16} />
                      Delete Event
                    </button>
                  )}
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => setShowModal(false)}
                    className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-800"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSaveEvent}
                    className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={!eventDetails.title.trim() || !selectedDate}
                  >
                    {selectedEventId ? 'Update Event' : 'Create Event'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default CalendarView;