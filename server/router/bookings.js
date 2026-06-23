const express = require("express");
const router = express.Router();
const bookings = require("../data/bookings.json");

router.get("/", (req, res) => {
  res.json(bookings);
});

router.post("/", (req, res) => {
  const { clientName, sessionType, date, status } = req.body;

  if (!clientName || !sessionType || !date || !status) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const today = new Date().toISOString().split("T")[0];
  if (date < today) {
    return res.status(400).json({ message: "Date cannot be in the past" });
  }

  const newBooking = {
    id: bookings.length + 1,
    clientName,
    sessionType,
    date,
    status
  };

  bookings.push(newBooking);
  res.status(201).json(newBooking);
});

module.exports = router;