import React, { useContext } from 'react'
import { TodoListContext } from '../contexts/TodoListContext'

const Todo = ({ todo }) => {
  const { removeTodo, editTodo } = useContext(TodoListContext)
  return (
    <li className='list-item'>
      <span>{todo.title} </span>
      <div>
        <button className='delete-btn' onClick={() => removeTodo(todo.id)}>
          <i className='fas fa-trash-alt'></i>
        </button>{' '}
        <button className='edit-btn' onClick={() => editTodo(todo.id)}>
          <i className='fas fa-pen'></i>
        </button>
      </div>
    </li>
  )
}

export default Todo
