import React, { useState } from "react";
import "./Agenda.css";

const Agenda = ({ initialYear, initialMonth, getCalendarData }) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const [currentYear, setCurrentYear] = useState(initialYear);
  const [currentMonth, setCurrentMonth] = useState(initialMonth);

  // Fetch calendar data for the current month and year
  const data = getCalendarData(currentYear, currentMonth);

  // Handle year change
  const handleYearChange = (event) => {
    setCurrentYear(Number(event.target.value)); // Convert to number
  };

  // Handle month change
  const handleMonthChange = (event) => {
    setCurrentMonth(Number(event.target.value)); // Convert to number
  };

  return (
    <div className="calendar-container">
      <header className="calendar-header">
        <div className="select-container">
          {/* Dropdown for year */}
          <select
            name="year"
            aria-label="Select Year"
            className="simple-class"
            value={currentYear}
            onChange={handleYearChange}
          >
            {[...Array(11)].map((_, i) => {
              const year = 2020 + i; // Generate years from 2020 to 2030
              return (
                <option key={year} value={year}>
                  {year}
                </option>
              );
            })}
          </select>

          {/* Dropdown for month */}
          <select
            name="month"
            aria-label="Select Month"
            className="simple-class"
            value={currentMonth}
            onChange={handleMonthChange}
          >
            {months.map((month, index) => (
              <option key={month} value={index}>
                {month}
              </option>
            ))}
          </select>
        </div>
      </header>

      {/* Calendar Grid */}
      <div className="calendar-grid">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day} className="day-header">
            {day}
          </div>
        ))}
        {data.map((day, index) => (
          <div
            key={index}
            className={`day ${
              day.status === "present"
                ? "present"
                : day.status === "absent"
                ? "absent"
                : "late"
            } ${day.current ? "current-day" : ""}`}
          >
            <div className="dayBlack">{day.date}</div>
            <div>
              {day.status.charAt(0).toUpperCase() + day.status.slice(1)}
              {day.details && ` (${day.details})`}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Agenda;
