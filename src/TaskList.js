import React from 'react';
import TaskItem from './TaskItem';
import { useTaskContext } from './TaskContext';
import './App.css';


function TaskList() {
  const { tasks } = useTaskContext();

  return (
    <div className="task-list-container">
      <h2>Task List&hearts;</h2>
      <ul className="task-list">
        {tasks.map(task => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
