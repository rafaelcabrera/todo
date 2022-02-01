// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import {CreateTodoButton} from '../CreateTodoButton/CreateTodoButton';
import {TodoCounter} from '../TodoCounter/TodoCounter';
import {TodoItem} from '../TodoItem/TodoItem';
import {TodoList} from '../TodoList/TodoList';
import TodoSearch from '../TodoSearch/TodoSearch';

import {AppUI} from './AppUI'

const defaultTodos = [
  {text:'Turno alergista' , completed: true},
  {text:'Comprar monitor' , completed: false},
  {text:'Dejar de gastar por 100 dias' , completed: false},
  {text:'Cocinar las pechugas' , completed: false}
]

function App() {
  const [searchValue, setSearchValue] = React.useState('');
  const [todos,setTodos] = React.useState([...defaultTodos]);

  const completedTodos = todos.filter(todo => !!todo.completed).length; //filtramos la propiedad completed y guardamos su longitud
  const totalTodos = todos.length;

  let searchedTodos = [];

  if(searchValue.lenght>=1){
    searchedTodos=todos;
  }
    else { 
      searchedTodos = todos.filter(todo=>{
        const todoText = todo.text.toLowerCase(); //llamamos a cada todo y lo convertios a minuscula
        const searchText = searchValue.toLowerCase();
        return todoText.includes(searchText); //filtro completo
  })  
}

  return (
    <AppUI
    totalTodos={totalTodos}
    completedTodos={completedTodos}
    searchValue={searchValue}
    setSearchValue={setSearchValue}
    searchedTodos={searchedTodos}


    />

  )
}

export default App;
