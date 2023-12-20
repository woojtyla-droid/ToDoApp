import React from 'react';

const Task = ({ task, onDelete }) => {
  return (
    <div>
      <p>{task.text}</p>
      <p>Data dodania: {task.date}</p>
      <button onClick={() => onDelete(task)}>Usuń</button>
    </div>
  );
};

export default Task;
