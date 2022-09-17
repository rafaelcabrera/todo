import React from "react";
import {CreateTodoButton} from '../CreateTodoButton/CreateTodoButton';
import { Modal } from "../Modal";
import {TodoCounter} from '../TodoCounter/TodoCounter';
import {TodoItem} from '../TodoItem/TodoItem';
import {TodoList} from '../TodoList/TodoList';
import TodoSearch from '../TodoSearch/TodoSearch';

function AppUI({
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completedTodo,
    deletedTodo,
}){
    
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

      <Modal>
        <p>{searchedTodos[0]?.text}</p>
      </Modal>

        <CreateTodoButton />
        
        </React.Fragment>
      );
}

export  {AppUI};