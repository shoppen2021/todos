/* eslint-disable jsx-a11y/label-has-associated-control */
import React, {useState} from 'react';
import {useSelector, useDispatch} from "react-redux";

import {prioFun, setDone} from "../redux/actions/todoActions";
import TodolistItem from "./todolist-item";

const Todolist = () => {
  const [sort, setSort] = useState('all')
  const todolist = useSelector(s => s.todos.todolist.filter(el => el.isOpen))
  const priorityList = useSelector(s => s.todos.priorityList !== null ? s.todos.priorityList.filter(el => el.isOpen) : s.todos.priorityList)
  const projects = useSelector(s => s.todos.todolist.reduce((acc, rec) => !acc.includes(rec.project) ? [...acc, rec.project] : acc, ['all']))
  const dispatch = useDispatch()
  const handleDone = (id) => {
    dispatch(setDone(id))
  }
  const handlePriority = (e) => {
    dispatch(prioFun(e.target.checked))
  }
  return (
    <div>
      <ul className="list-group">
        {
          (priorityList || todolist).filter(el => sort === 'all' ? true : el.project === sort).map(todo =>
            <TodolistItem key={ todo.id } todo={ todo } handleDone={ handleDone } />
          )
        }
      </ul>
      <div className="d-flex justify-content-between mt-4">
        <button type="button">Add new</button>
        <label className="d-flex align-items-center">
          <input type="checkbox" onChange={ (e) => handlePriority(e) } />
          Priority sort
        </label>
        <select onChange={ (e) => setSort(e.target.value) }>
          {
            projects.map((project, idx) => (
              <option key={ idx } value={ project }>{project}</option>
            ))
          }
        </select>

      </div>
    </div>
  );
};

export default Todolist;