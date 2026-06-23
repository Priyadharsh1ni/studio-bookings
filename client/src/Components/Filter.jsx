import React from "react";
import "../index.css";

export default function Filter({ setFilter }) {
  return (
    <div className="filter-row">
      <label>Filter by status:</label>
      <select onChange={e => setFilter(e.target.value)} className="filter-select">
        <option value="all">All</option>
        <option value="Confirmed">Confirmed</option>
        <option value="Pending">Pending</option>
        <option value="Cancelled">Cancelled</option>
      </select>
    </div>
  );
}