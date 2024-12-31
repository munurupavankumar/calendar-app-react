import { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import Modal from 'react-modal';

const CalendarView = () => {
  const [events, setEvents] = useState<{ title: string; start: string }[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [eventTitle, setEventTitle] = useState<string>('');

  const handleDateClick = (info: any) => {
    if (!showModal) {
      setSelectedDate(info.dateStr);
      setEventTitle('');
      setShowModal(true);
    }
  };

  const handleSaveEvent = () => {
    if (!eventTitle.trim()) {
      alert('Event title cannot be empty.');
      return;
    }
    setEvents([...events, { title: eventTitle, start: selectedDate! }]);
    setShowModal(false);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedDate(null);
  };

  const handleEventClick = (info: any) => {
    if (window.confirm(`Are you sure you want to delete the event "${info.event.title}"?`)) {
      const updatedEvents = events.filter((event) => event.title !== info.event.title || event.start !== info.event.startStr);
      setEvents(updatedEvents);
    }
  };

  return (
    <div className="bg-white p-4 shadow rounded">
      <h1 className="text-xl font-bold mb-4">Calendar</h1>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={events}
        dateClick={handleDateClick}
        eventClick={handleEventClick}
        editable={!showModal} 
      />
      <Modal
        isOpen={showModal}
        onRequestClose={handleCloseModal}
        contentLabel="Add Event"
      >
        <h2>Add Event {selectedDate ? `on ${selectedDate}` : ''}</h2>
        <input
          type="text"
          value={eventTitle}
          onChange={(e) => setEventTitle(e.target.value)}
          placeholder="Event Title"
        />
        <button onClick={handleSaveEvent}>Save</button>
        <button onClick={handleCloseModal}>Close</button>
      </Modal>
    </div>
  );
};

export default CalendarView;
