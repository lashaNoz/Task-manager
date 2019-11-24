import React, { useState, useContext } from 'react'
import { TodoListContext } from '../contexts/TodoListContext'

const TodoForm = () => {
  const { addTodo } = useContext(TodoListContext)
  const [todoItem, setTodoItem] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    addTodo(todoItem)
    setTodoItem('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Add todo'
        value={todoItem}
        onChange={e => setTodoItem(e.target.value)}
        required
      />
      <input type='submit' value='Add todo' />
    </form>
  )
}

export default TodoForm
