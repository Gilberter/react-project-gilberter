import React from 'react';
import { TodoContext } from '../TocoContext';
import './TodoSearch.css';



function TodoSearch() {
  const {searchValue, setSearchValue} = React.useContext(TodoContext)
  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value)
  }

  return (
    <input value={searchValue} onChange={onSearchValueChange} className="TodoSearch" placeholder="Pene" />
  );
}

export { TodoSearch };