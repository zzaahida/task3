import React, { useState } from 'react';
import { useTaskContext } from './TaskContext';
import './App.css';

function AddTaskForm() {
  const [text, setText] = useState('');
  const { addTask } = useTaskContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTask({ id: Date.now(), text, completed: false });
    setText('');
  };

  return (
    <form className="add-task-form" onSubmit={handleSubmit}>
      <input
        className="task-input"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter task"
      />
      <button className="add-task-btn" type="submit">Add Task&hearts;</button>
    </form>
  );
}

export default AddTaskForm;
