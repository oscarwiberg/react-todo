import React from 'react';
import '../App.css';

const Todo = ({ todo, toggleComplete, deleteTodo }) => {
  const handleCheckboxCompleted = () => {
    toggleComplete(todo.id);
  };

  const handleDeleteClick = () => {
    deleteTodo(todo.id);
  };

  return (
    <div className="todo-item">
      <input type="checkbox" onClick={handleCheckboxCompleted} />
      <li
        className="todo-text"
        style={{
          textDecoration: todo.completed ? 'line-through' : null,
        }}
      >
        {todo.text}
      </li>
      <button className="btn-remove" onClick={handleDeleteClick}>
        Delete
      </button>
    </div>
  );
};

export default Todo;
