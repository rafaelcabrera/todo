import React from 'react';
import './CreateTodoButton.css'

function CreateTodoButton() {

const onClickButton = (e) => {
  alert('Hiciste click flaco');
}

  return (
  <div>
  <button 
    className="CreateTodoButton"
    onClick={()=>onClickButton()}
  >+</button>
  </div>
  );
}

export {CreateTodoButton} ;

