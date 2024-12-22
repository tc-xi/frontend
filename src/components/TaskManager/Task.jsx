import React from 'react';
import './Task.css';
import Select from 'react-select';

const Status = [
  { value: 'Pending', label: 'Pending' },
  { value: 'In Progress', label: 'In Progress' },
  { value: 'Completed', label: 'Completed' },
];

const Priority = [
  { value: 'High', label: 'High' },
  { value: 'Medium', label: 'Medium' },
  { value: 'Low', label: 'Low' },
];



const TaskManager = () => {
  return (
    <div className="task-container">
      <div className="task-list">
        <h2>My Tasks</h2>
        <div className="task-item">
          <div>
            <h3>Task 1: Document Submission</h3>
            <p>Make sure to submit all the necessary documents...</p>
          </div>
          <div className="task-meta">
            <div>
              <select className="selector" required>
                <option value=" " disabled selected> Priority</option>
                <option value="High">External</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
                
            </div>
            <div>
            
              <select className="selector" required>
               <option value=" " disabled selected> Status</option>
                <option value="Done">Done</option>
                <option value="In Progress">In Progress</option>
                <option value="Not started">Not started</option>
              </select>
                
            </div>
            <p><strong>deadline:</strong> 01/01/2025</p>
          </div>
        </div>

        <div className="task-item">
          <div>
            <h3>Task 2: name task two</h3>
            <p>The assignments must be completed to pass final year...</p>
          </div>
          <div className="task-meta">
            <div>
              
              <select class="selector"required>
                <option value=" " disabled selected> Priority</option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
                </select>
            </div>
            <div>
            
              <select class="selector" required>
                <option value=" " disabled selected> Status</option>
                <option value="Pending">Pending</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
              </select>
            </div>
            <p><strong>deadline:</strong> 20/01/2025</p>
          </div>
        </div>
      </div>

      <div className="task-details">
     

        <h3>Task Details :</h3>
        <h5> Document Submission</h5>

      
        <p><strong>Objective:</strong> Submit required documents accurately and securely by the end of the day.</p>
        <h4>Steps:</h4>
        <p>1.Review the list of required documents.</p>
        <p>2.Collect, verify, and organize all necessary items.</p>
        <p>3.Scan and rename files for clarity, adhering to format guidelines.</p>
        <p>4.Upload documents securely and confirm submission.</p>
        <p>5.Follow up if needed to ensure processing.</p>
        <p><strong>Notes:</strong> Ensure authenticity, maintain confidentiality, and meet the deadline.</p>
      </div>
    </div>
  );
};

export default TaskManager;

