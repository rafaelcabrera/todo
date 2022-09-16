import React from 'react';
import './TodoCounter.css'


function TodoCounter({total,completed}) {
  // const {total, completed} = props
  return <div>
      <h2 className="TodoCounter"> Has completado {completed} de {total} TODOs</h2>    
  </div>;
}

export {TodoCounter};
