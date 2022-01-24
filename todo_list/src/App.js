// import logo from './logo.svg';
// import './App.css';
import React from 'react';

const todos = [
  {text:'1' , completed: false},
  {text:'2' , completed: false},
  {text:'3' , completed: false},
]

function App() {
  return (
    <React.Fragment>
    <TodoCounter/>
    <h2>Has completado ${} de ${} TODOs </h2>
    <TodoSearch/>
    <input type="text" placeholder="procastination"></input>
    <TodoList>
      {todos.map(todo=> (
        <TodoItem/>
        ))}
      
    </TodoList>
    <CreateTodoButton />
    <button>X</button>
    </React.Fragment>
  );
}

export default App;
