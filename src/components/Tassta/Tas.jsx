import React from 'react';
import './Tas.css';

const EmployeeDetails = () => {
  return (
    <div className="employee-details">
      {/* Employee List Section */}
      <div className="employee-list">
        <input 
          type="text" 
          placeholder="Search employees..." 
          className="employee-list__search" 
        />
        <ul className="employee-list__names">
          <li className="employee-list__name">Meriem Houda</li>
          <li className="employee-list__name employee-list__name--active">Achraf Aymen</li>
          <li className="employee-list__name">Meriem Houda</li>
          <li className="employee-list__name">Meriem Houda</li>
          <li className="employee-list__name">Meriem Houda</li>
          <li className="employee-list__name">Meriem Houda</li>  
           <li className="employee-list__name">Meriem Houda</li>  
            <li className="employee-list__name">Meriem Houda</li>
        </ul>
      </div>

      {/* Employee Info Section */}
      <div className="employee-info">
        <div className="employee-info__header">
          <img
            src="https://via.placeholder.com/60"
            alt="Profile"
            className="employee-info__photo"
          />
          <div>
            <h3 className="employee-info__name">Achraf Aymen</h3>
            <p className="employee-info__role">Position: Engineer</p>
            <p className="employee-info__role">Phone Number: 06*******</p>
          </div>
        </div>

        {/* Tasks Section */}
        <div className="tasks">
          <div className="task">
            <h4 className="task__title">Task 1: Do</h4>
            <p className="task__description">Make sure to submit all the necessary documents...</p>
            <div className="task__footer">
              <span>Priority</span>
              <select className="task__status">
                <option>Not Started</option>
                <option>In Progress</option>
                <option>Finished</option>
              </select>
              <span>Deadline: 01/01/2025</span>
            </div>
          </div>
          <div className="task">
            <h4 className="task__title">Task 2: Document Verification</h4>
            <p className="task__description">Make sure to verify all the necessary documents...</p>
            <div className="task__footer">
              <span>Priority</span>
              <select className="task__status">
                <option>Not Started</option>
                <option>In Progress</option>
                <option>Finished</option>
              </select>
              <span>Deadline: 01/01/2025</span>
            </div>
          </div>
        </div>
      </div>

      {/* Employee Chart Section */}
      <div className="employee-chart">
        <h4 className="employee-chart__title">Absence / Lates</h4>
        <p className="employee-chart__description">Last Year</p>
        <div className="chart-placeholder">
          <p>[Insert Chart Here]</p>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDetails;

