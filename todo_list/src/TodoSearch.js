import React from 'react';
import './TodoSearch.css'

function TodoSearch() {
  
  const [searchValue, setSearchValue] = React.useState('');
  // const [patito, setPatito] = React.useState('Patito')
  // [
  //   'Rafa',
  //   setState('Alejandro')
  // ]

  const onSearchValueChange = (e) => {
    console.log(e.target.value);
    setSearchValue(e.target.value)
  }
  return [
      <input  className="TodoSearch" 
      type="text"
      placeholder="Insert New Task..."
      value={searchValue}
      onChange={onSearchValueChange}
      />,
      <p>{searchValue}</p>
  ];
}

export default TodoSearch;
