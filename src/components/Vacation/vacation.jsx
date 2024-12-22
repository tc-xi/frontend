import React, { useState } from "react";
import "./vacation.css";

const VacationRequestForm = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="form-container">
      <div className="form-header">
        <button className="history-button" onClick={() => setShow(!show)}>Request History</button>
        {show && (
          <div style={{ display: "flex" }}>
            <span className="history-button">Accepted(5)</span>
            <span className="history-button">Refused(9)</span>
          </div>
        )}
      </div>
      <div className="vacation-form">
        <h2>Vacation Request Form:</h2>
        <div className="dates">
          <div className="form-group">
            <label htmlFor="start-date">Start Date:</label>
            <input type="date" id="start-date" placeholder="DD/MM/YYYY" />
          </div>
          <div className="form-group">
            <label htmlFor="end-date">End Date:</label>
            <input type="date" id="end-date" placeholder="DD/MM/YYYY" />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="reason">Reason:</label>
          <textarea id="reason" placeholder="Start writing here..." />
        </div>
        <button className="send-button">Send</button>
      </div>
    </div>
  );
};

export default VacationRequestForm;
