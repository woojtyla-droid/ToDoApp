import React, { useState, useEffect } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks([
      { id: 1, text: 'Przykładowe zadanie 1', date: new Date().toLocaleString() },
      { id: 2, text: 'Przykładowe zadanie 2', date: new Date().toLocaleString() },
      { id: 3, text: 'Przykładowe zadanie 3', date: new Date().toLocaleString() },
    ]);
  }, []);

  const handleTaskAdd = (text) => {
    const newTask = {
      id: tasks.length + 1,
      text,
      date: new Date().toLocaleString(),
    };
    setTasks([...tasks, newTask]);
  };

  const handleTaskDelete = (taskToDelete) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskToDelete.id);
    setTasks(updatedTasks);
  };

  return (
    <div className="app-container">
      <h1>ToDo App</h1>
      <TaskForm onTaskAdd={handleTaskAdd} />
      <TaskList tasks={tasks} onDelete={handleTaskDelete} />
    </div>
  );
};
export default App;
