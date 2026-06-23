import React from "react";

export default function BookingList({ bookings }) {
  console.log("Bookings in BookingList:", bookings);
  if (bookings.length === 0) {
    return <p className="empty">No bookings found.</p>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Client</th>
          <th>Session</th>
          <th>Date</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {bookings.map(b => (
          <tr key={b.id}>
            <td>{b.clientName}</td>
            <td>{b.sessionType}</td>
            <td>{b.date}</td>
            <td>
              <span className={`badge ${b.status}`}>{b.status}</span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}