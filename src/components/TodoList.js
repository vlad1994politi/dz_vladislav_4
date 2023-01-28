import React from 'react'
import TodoCard from "./TodoCard"

import classes from './components.module.css'

{searchArray().length > 0
  ?
  <TodoList todoList={searchArray().slice(offset, offset + 2)} editTodo={editTodo} deleteTodo={deleteTodo}
            completedOnChange={completedOnChange} className={classes.card}/>
  :
  <h3> По данному запросу {search} ничего не найдено</h3>
}

const TodoList = ({ todoList, editTodo, deleteTodo, completedOnChange }) => {

  return (
    <div className={classes.flexList}>
      {todoList.map((todo, i) => 
        <TodoCard key={todo.date} todo={todo} editTodo={editTodo} deleteTodo={deleteTodo} completedOnChange={completedOnChange}/>
      )}
    </div>
  )
}

export default TodoList