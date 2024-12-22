import React from 'react';
import './Vacation.css';

const Vacation = () => {
  return (
    <div className="vacation-container">
      <div className="vacation-header">
        <h2>Vacation Request Form:</h2>
        <button className="request-history-btn">Request History &gt;</button>
      </div>
      <form className="vacation-form">
        <div className="form-group">
          <label htmlFor="start-date">Start Date:</label>
          <input type="date" id="start-date" name="start-date" />
        </div>
        <div className="form-group">
          <label htmlFor="end-date">End Date:</label>
          <input type="date" id="end-date" name="end-date" />
        </div>
        <div className="form-group">
          <label htmlFor="reason">Reason:</label>
          <textarea id="reason" name="reason" placeholder="Start writing here..."></textarea>
        </div>
        <button type="submit" className="send-btn">Send</button>
      </form>
    </div>
  );
};

export default Vacation;
