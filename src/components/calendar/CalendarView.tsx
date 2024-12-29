import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import EventDetails from './EventDetails';
import Loader from '../common/Loader'; // Import Loader

const CalendarView = () => {
  const [events, setEvents] = useState<{ title: string; date: string }[]>([]);
  const [selectedEvent, setSelectedEvent] = useState<{ title: string; date: string } | null>(null);
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    // Simulate fetching events
    setTimeout(() => {
      setEvents([
        { title: 'Email to Company A', date: '2024-01-10' },
        { title: 'LinkedIn Post for Company B', date: '2024-01-12' },
        { title: 'Phone Call with Company C', date: '2024-01-15' },
      ]);
      setLoading(false); // Hide loader after fetching events
    }, 2000);
  }, []);

  const handleEventClick = (info: any) => {
    setSelectedEvent({ title: info.event.title, date: info.event.startStr });
  };

  return (
    <div className="bg-white p-4 shadow rounded">
      <h1 className="text-xl font-bold mb-4">Calendar</h1>
      {loading ? (
        <Loader /> // Show loader while loading events
      ) : (
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          events={events}
          eventClick={handleEventClick}
        />
      )}
      <EventDetails event={selectedEvent} onClose={() => setSelectedEvent(null)} />
    </div>
  );
};

export default CalendarView;
