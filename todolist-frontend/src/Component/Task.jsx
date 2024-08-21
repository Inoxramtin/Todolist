import React, { useState } from 'react';
import Button from '../Button/Button';
import '../App.css';

const Task = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build a To-Do App', completed: false },
  ]);
  const [newTask, setNewTask] = useState('');
  const [editing, setEditing] = useState(null);
  const [editingText, setEditingText] = useState('');

  const addTask = () => {
    if (newTask.trim()) {
      const newTaskObject = {
        id: Date.now(),
        text: newTask,
        completed: false,
      };
      setTasks([...tasks, newTaskObject]);
      setNewTask('');
    }
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const editTask = (id) => {
    const taskToEdit = tasks.find(task => task.id === id);
    setEditing(id);
    setEditingText(taskToEdit.text);
  };

  const updateTask = () => {
    setTasks(tasks.map(task => 
      task.id === editing ? { ...task, text: editingText } : task
    ));
    setEditing(null);
    setEditingText('');
  };

  const toggleCompletion = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <div  className='App'>
      <h1>To-Do List</h1>
      <input 
        type="text" 
        value={newTask} 
        onChange={(e) => setNewTask(e.target.value)} 
        placeholder="New Task" 
      />
      <Button title={'َAdd' } onClickFunction={addTask} />
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <span 
              style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
              onClick={() => toggleCompletion(task.id)}
            >
              {task.text}
            </span>
            <Button title={'Edit'} onClickFunction={() => editTask(task.id)}/>
            <Button title={'Delete'} onClickFunction={() => deleteTask(task.id)}/>
          </li>
        ))}
      </ul>
      {editing !== null && (
        <div>
          <input 
            type="text" 
            value={editingText} 
            onChange={(e) => setEditingText(e.target.value)} 
            placeholder="Edit Task" 
          />
          <Button title={'Update'} onClickFunction={updateTask}/>
        </div>
      )}
    </div>
  );
};

export default Task;