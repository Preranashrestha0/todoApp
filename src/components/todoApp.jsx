import React, { useState } from 'react';
import TodoList from './todoList';
import TodoForm from './todoForm';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, { text: todo, completed: false }]);
  };

  const toggleComplete = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className='flex justify-center items-center w-screen h-screen'>
        <div className="m-5 rounded-xl w-3/4 h-3/4 bg-blue-300 p-4">
        <h1 className="text-2xl font-bold mb-4 text-center">To-Do List</h1>
        
      <div className="flex justify-evenly h-48 ">
        <div className='w-96 mx-auto bg-white rounded-xl h-fit shadow p-6'>
            <h1 className='font-bold text-center '>Todo Lists</h1>
       <TodoList todos={todos} toggleComplete={toggleComplete} removeTodo={removeTodo} />

        </div>
       <div className='max-w-md mx-auto bg-white rounded-xl shadow p-6'>
       <TodoForm addTodo={addTodo} />
      
       </div>
      </div>
    </div>
    </div>
  );
};

export default TodoApp;
