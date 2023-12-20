import React, { useState } from 'react';
import './index.css'
const TaskForm = ({ onTaskAdd }) => {
  const [task, setTask] = useState('');

  const handleTaskChange = (e) => {
    setTask(e.target.value);
  };

  const handleAddTask = () => {
    if (task.trim() !== '') {
      onTaskAdd(task);
      setTask('');
    }
  };

  return (
    <div>
      <input type="text" value={task} onChange={handleTaskChange} />
      <button onClick={handleAddTask}>Dodaj zadanie</button>
    </div>
  );
};

export default TaskForm;
