import React from 'react';

const EventDetails = ({ event, onClose }: { event: { title: string; date: string } | null; onClose: () => void }) => {
  if (!event) return null; // No event selected

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow w-96">
        <h2 className="text-xl font-bold mb-4">Event Details</h2>
        <p>
          <strong>Title:</strong> {event.title}
        </p>
        <p>
          <strong>Date:</strong> {event.date}
        </p>
        <button
          onClick={onClose}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default EventDetails;
