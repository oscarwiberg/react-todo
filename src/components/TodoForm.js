import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import '../App.css';

const TodoForm = ({ addTodo }) => {
  const [todo, setTodo] = useState({
    id: '',
    text: '',
    completed: false,
  });

  const textInputChange = (e) => {
    setTodo({ ...todo, text: e.target.value });
  };

  const handleSumbit = (e) => {
    e.preventDefault();
    if (todo.text.trim()) {
      addTodo({ ...todo, id: uuidv4() });
      setTodo({ ...todo, text: '' });
    }
  };

  return (
    <form onSubmit={handleSumbit}>
      <input
        className="text-input"
        name="text"
        type="text"
        value={todo.text}
        onChange={textInputChange}
        autocomplete="off"
        placeholder="Click here and give me a todo..."
      />
      <button className="btn-add" type="submit">
        Add Todo
      </button>
    </form>
  );
};

export default TodoForm;
