import { useEffect, useState } from "react";
import BookingList from "./Components/BookingList";
import BookingForm from "./Components/BookingForm";
import Filter from "./Components/Filter";
import Calendly from './Components/CalendlyEmbed'
import "./App.css"

export default function App() {
  const [bookings, setBookings] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    fetch("http://localhost:5000/api/bookings")
      .then(res => res.json())
      .then(data => setBookings(data));
  }, []);

  const filteredBookings =
    filter === "all"
      ? bookings
      : bookings.filter(b => b.status === filter);

 const addBooking = (booking) => {
  setBookings(prev => [
    ...prev,
    { ...booking, id: Date.now() }
  ]);
};

  return (
    <div className="container">
      <div className="header">
        <header className="page-header">
          <h1>Studio Bookings</h1>
          <p className="subtitle">
            View, filter, and manage studio session bookings
          </p>
        </header>

        <section className="card">
          <Filter setFilter={setFilter} />
        </section>

        <section className="card">
          <BookingForm onAdd={addBooking} />
        </section>

        <section className="card">
          <BookingList bookings={filteredBookings} />
        </section>

        <section className="card">
          <Calendly />
        </section>

      </div>
    </div>
  );
}