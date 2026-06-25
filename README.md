# KonnectStudios – Studio Bookings App

This project was built as part of the KonnectStudios Full Stack Developer take-home assignment.  
The focus of this implementation is clear structure, basic UI clarity, and attention to detail rather than advanced backend features or heavy visual polish.

---

## Features

### Core Requirements
- Display a list of studio bookings
- Visually distinguish booking status (confirmed / pending / cancelled)
- Filter bookings by status
- Add a new booking using a form
- Form validation:
  - All fields are required
  - Date cannot be in the past
- Empty state shown when no bookings match a filter

### Bonus (Optional)
- Live scheduling embed using Calendly / Cal.com
- Client-side embed only (no backend or API keys)
- Bonus section is clearly separated from the booking list
- Embedded bookings are not synced with the booking list

---

## Tech Stack

- Frontend: React (Vite)
- Backend: Node.js + Express
- Styling: Plain CSS (no UI libraries)
- Data Source: Local JSON file (no database)

---

## Project Structure
studio-bookings/
│
├── server/
│   ├── index.js
│   ├── router/
│   │   └── bookings.js
│   └── data/
│       └── bookings.json
│
├── client/
│   └── src/
│       ├── components/
│       │   ├── BookingList.jsx
│       │   ├── BookingForm.jsx
│       │   ├── Filter.jsx
│       │   └── CalendlyEmbed.jsx
│       ├── App.jsx
│       ├── main.jsx
│       └── index.css
│
└── README.md

Each component has a single responsibility to keep the codebase easy to understand and maintain.

---

## How to Run Locally

### 1. Clone the Repository

git clone <https://github.com/Priyadharsh1ni/studio-bookings.git>  
cd konnect-studio-bookings

---

### 2. Start the Backend Server

cd server  
npm install  
npm start  

The backend will run at:  
http://localhost:5000

---

### 3. Start the Frontend

cd client  
npm install  
npm run dev  

The application will be available at:  
http://localhost:3000

---

## Design Approach

- Focused on clear visual hierarchy and readability
- Used a card-based layout to group related content
- Consistent spacing, alignment, and typography throughout the UI
- Booking status is visually represented using color-coded badges
- Edge cases such as empty results and validation errors are handled

No external UI libraries were used to keep the solution simple and transparent.

---

## Bonus: Live Scheduling Embed

As a stretch goal, a live scheduling section was added using Calendly 

- Allows users to book an actual time slot
- Implemented as a client-side embed only
- No backend logic or API keys involved
- Bookings from the scheduler are not synced with the booking list
- Clearly labeled and separated from the core functionality

Time spent on bonus: approximately 15–20 minutes.

---

## Notes & Assumptions

- Newly added bookings are stored in client-side state and do not persist on page refresh
- Persistence was intentionally avoided, as it was not part of the evaluation criteria
- The project prioritizes clarity, structure, and consistency over advanced features

---
