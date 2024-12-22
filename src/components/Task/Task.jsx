import React from 'react';
import './Task.css';
import { Link } from 'react-router';

import { useState } from 'react';

const TaskManager = () => {

  const [currentTask, setCurrentTask] = useState(0);
  const handleClick = (index) => {
    setCurrentTask(index);
  }



  const [tasks, setTasks] = useState([
    {
      id: 0,
      title: 'Document Submission',
      description: 'Make sure to submit all the necessary documents...',
      priority: 'Extreme Priority',
      status: 'Done',
      deadline: '01/01/2025',
      objective: 'Submit required documents accurately and securely by the end of the day.',
      steps : [
        'Reviewwww the list of required documents.',
        'Collect, verify, and organize all necessary items.',
        'Scan and rename files for clarity, adhering to format guidelines.',
        'Upload documents securely and confirm submission.',
        'Follow up if needed to ensure processing.'
      ],
      notes: 'Ensure authenticity, maintain confidentiality, and meet the deadline.'
    },
    {
      id: 1,
      title: 'Name Task one',
      description: 'The assignments must be completed to pass final year...',
      priority: 'Medium Priority',
      status: 'Uncompleted',
      deadline: '20/01/2025',
      objective: 'Submit required documents accurately and securely by the end of the day.',
      steps : [
        'Review the list of required documents.',
        'Collect, verify, and organize all necessary items.',
        'Scan and rename files for clarity, adhering to format guidelines.',
        'Upload documents securely and confirm submission.',
        'Follow up if needed to ensure processing.'
      ],
      notes: 'Ensure authenticity, maintain confidentiality, and meet the deadline.'
    },
    {
      id: 2,
      title: 'Name Task two',
      description: 'Always striving for the best...',
      priority: 'Low Priority',
      status: 'Uncompleted',
      deadline: '20/03/2025',
      objective: 'Submit required documents accurately and securely by the end of the day.',
      steps : [
        'Organizing files or folders (physical or digital)'
      ],
      notes: 'Ensure authenticity, maintain confidentiality, and meet the deadline.'
    }
  ])
  return (
    <div className="task-container">
      <div className="task-list">
        <h2>My Tasks</h2>
      
{tasks.map((task) => (
  <div className={`task-item ${currentTask === task.id && "selected"}`} onClick={() => handleClick(task.id)}>
  <div>
    <h3>Task {task.id}: {task.title}</h3>
    <p>{task.description}</p>
  </div>
  <div className="task-meta">
    <div>
      <select className="selector" disabled>
        <option value=" " disabled selected> {task.priority}</option>
      </select>
        
    </div>
    <div>
    
      <select className="selector" required>
       <option value=" " disabled selected>Status</option>
        <option value="Done">Done</option>
        <option value="Uncompleted">Uncompleted</option>
        <option value="Completed">Completed</option>
      </select>
        
    </div>
    <p><strong>deadline:</strong>{task.deadline}</p>
  </div>
</div>
))}

      </div>

      <div className="task-details">
     

        <h3>Task Details :</h3>
        <h5> {tasks[currentTask].title}</h5>

      
        <p><strong>Objective:</strong>{tasks[currentTask].objective} </p>
        <h4>Steps:</h4>
        {tasks[currentTask].steps.map((step) => (
          <p>{step}</p>
        ))}
        <p><strong>Notes:</strong>{tasks[currentTask].notes}</p>
      </div>
    </div>
  );
};

export default TaskManager;

