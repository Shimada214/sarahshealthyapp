import React, { useState } from 'react';
import ToDoForm from './ToDoForm';
import ToDoItem from './ToDoItem';
import './List.css';

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    let id = 1;
    if(todos.length > 0) {
      id = todos[0].id + 1
    }
    let todo = {id: id, text: text};
    let newTodos = [todo, ...todos];
    setTodos(newTodos);
  };

  const removeTodo = (id) => {
    let updatedTodos = [...todos].filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div className='todo-app-container' id='grocerylist'>
    <div className="todo-app">
      <h1>Create a grocery list</h1>
      <ToDoForm addTodo={addTodo} />
      
      <hr className="seperator"/>
      <hr className="seperator"/>

      {todos.map((todo) => {
        return (
          <ToDoItem removeTodo={removeTodo} todo={todo} key={todo.id}/>
        )
      })}
    </div>
    </div>
  );
}

export default TodoList;
