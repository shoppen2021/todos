import React, {useState} from 'react';

const TodolistItem = ({todo, handleDone}) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <li key={ todo.id } className="list-group-item">
      <h3>{todo.title}</h3>
      <div className="d-flex justify-content-between">
        <span>Project: {todo.project}</span>
        <span>Priority: {todo.priority}</span>
      </div>
      {isOpen && (
        <div>
          {todo.details}
        </div>
      )}
      <div className="d-flex justify-content-around mt-4">
        <button type="button" className="btn btn-secondary">Edit</button>
        <button type="button" className="btn btn-secondary" onClick={ () => handleDone(todo.id) }>Close</button>
        <button type="button" className="btn btn-secondary" onClick={ () => setIsOpen(!isOpen) }>Details</button>
      </div>
    </li>
  )
};

export default TodolistItem;