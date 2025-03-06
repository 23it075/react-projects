import React, { useState } from 'react';

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);  // State to store the tasks
  const [newTask, setNewTask] = useState(""); // State to manage the input field

  // Function to add a task
  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);  // Add task to the list
      setNewTask(""); // Clear input field after adding the task
    }
  };

  // Function to remove a task
  const removeTask = (taskToRemove) => {
    setTasks(tasks.filter(task => task !== taskToRemove)); // Filter out the task to be removed
  };

  return (
    <div>
      <h1>To-Do List</h1>
      
      {/* Input to add new task */}
      <input 
        type="text" 
        value={newTask} 
        onChange={(e) => setNewTask(e.target.value)} 
        placeholder="Enter a new task" 
      />
      <button onClick={addTask}>Add Task</button>

      {/* Conditionally rendering the task list */}
      <ul>
        {tasks.length === 0 ? (
          <p>No tasks to show</p>  // Display this message when tasks array is empty
        ) : (
          tasks.map((task, index) => (
            <li key={index}>
              {task} <button onClick={() => removeTask(task)}>Remove</button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default TodoApp;
