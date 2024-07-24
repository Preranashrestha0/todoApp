import React from 'react';

const TodoItem = ({ todo, index, toggleComplete, removeTodo }) => {
  return (
    <li className="flex justify-between items-center mb-2">
      <span
        className={`flex-1 cursor-pointer ${todo.completed ? 'line-through' : ''}`}
        onClick={() => toggleComplete(index)}
      >
        {todo.text}
      </span>
      <button
        onClick={() => removeTodo(index)}
        className="bg-blue-900 text-white p-2 rounded"
      >
        Remove
      </button>
    </li>
  );
};

export default TodoItem;
    