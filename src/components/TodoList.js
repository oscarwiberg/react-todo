import React from 'react';
import Todo from './Todo';
import '../App.css';

const TodoList = ({ todos, toggleComplete, deleteTodo }) => {
  return (
    <ul className="list">
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
