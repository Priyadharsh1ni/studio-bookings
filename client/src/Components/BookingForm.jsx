import { useState } from "react";

export default function BookingForm({ onAdd }) {
  const [form, setForm] = useState({
    clientName: "",
    sessionType: "",
    date: "",
    status: "pending"
  });

  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!form.clientName || !form.sessionType || !form.date) {
      setError("All fields are required");
      return;
    }

    const today = new Date().toISOString().split("T")[0];
    if (form.date < today) {
      setError("Date cannot be in the past");
      return;
    }

    onAdd({
      ...form,
      id: Date.now()
    });

    setForm({
      clientName: "",
      sessionType: "",
      date: "",
      status: "pending"
    });
  };

  return (
    <form className="form" onSubmit={handleSubmit} className="booking-form">
      <h2>Add Booking</h2>

      <input
        placeholder="Client Name"
        value={form.clientName}
        onChange={(e) =>
          setForm({ ...form, clientName: e.target.value })
        }
      />

      <input
        placeholder="Session Type"
        value={form.sessionType}
        onChange={(e) =>
          setForm({ ...form, sessionType: e.target.value })
        }
      />

      <input
        type="date"
        value={form.date}
        className="date-picker"
        onChange={(e) =>
          setForm({ ...form, date: e.target.value })
        }
      />

      <select
        value={form.status}
        onChange={(e) =>
          setForm({ ...form, status: e.target.value })
        }
      >
        <option value="Confirmed">Confirmed</option>
        <option value="Pending">Pending</option>
        <option value="Cancelled">Cancelled</option>
      </select>

      <button type="submit">Add Booking</button>
      {error && <div className="error">{error}</div>}

    </form>
  );
}