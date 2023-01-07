import React from 'react';
import { TodoContext } from '../TocoContext';
import './TodoCounter.css';

function TodoCounter() {
  const {totalTodos,completedTodos} = React.useContext(TodoContext)
  return (
    <h2 className="TodoCounter">{`Has completado ${completedTodos} de ${totalTodos} \n "TO-DO"  `}</h2>
  );
}

export { TodoCounter };