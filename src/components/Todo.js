import React, { useContext } from 'react'
import { TodoListContext } from '../contexts/TodoListContext'

const Todo = ({ todo }) => {
  const { removeTodo } = useContext(TodoListContext)
  return (
    <li>
      {todo.todoItem}{' '}
      <button onClick={() => removeTodo(todo.id)}>delete</button>{' '}
      <button>edit</button>
    </li>
  )
}

export default Todo
