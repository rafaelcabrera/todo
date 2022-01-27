// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import {CreateTodoButton} from './CreateTodoButton';
import {TodoCounter} from './TodoCounter';
import {TodoItem} from './TodoItem';
import TodoList from './TodoList';
import TodoSearch from './TodoSearch';

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
    <React.Fragment>
    <TodoCounter
    total ={totalTodos}
    completed ={completedTodos}
    />

    <TodoSearch
    searchValue = {searchValue}
    setSearchValue = {setSearchValue}
    />
    
    <TodoList>
      {searchedTodos.map(todo=> ( // el estado todo, va a ser igual a searched si no hay búsqueda
        
        <TodoItem key={todo.text} 
        text={todo.text} 
        completed = {todo.completed}/>
        
        ))}
      
    </TodoList>
    <CreateTodoButton />
    
    </React.Fragment>
  );
}

export default App;
