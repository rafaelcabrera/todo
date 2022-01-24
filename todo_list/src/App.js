// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import {CreateTodoButton} from './CreateTodoButton';
import TodoCounter from './TodoCounter';
import TodoItem from './TodoItem';
import TodoList from './TodoList';
import TodoSearch from './TodoSearch';

const todos = [
  {text:'Turno alergista' , completed: false},
  {text:'Comprar monitor' , completed: false},
  {text:'Dejar de gastar por 100 dias' , completed: false},
  {text:'Cocinar las pechugas' , completed: false}
]

function App() {
  return (
    <React.Fragment>
    <TodoCounter/>
    <TodoSearch/>
    
    <TodoList>
      {todos.map(todo=> (
        <TodoItem key={todo.text} text={todo.text} />
        ))}
      
    </TodoList>
    <CreateTodoButton />
    
    </React.Fragment>
  );
}

export default App;
