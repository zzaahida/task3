import React from 'react';
import { useTaskContext } from './TaskContext';
import './App.css';

function TaskItem({ task }) {
  const { deleteTask, toggleTaskCompletion } = useTaskContext();

  return (
    <li key={task.id} className="task-item">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTaskCompletion(task.id)}
      />
      <span className={task.completed ? 'completed' : ''}>
        {task.text}
      </span>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </li>
  );
}

export default TaskItem;

