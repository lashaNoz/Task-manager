import React, { useState, useContext, useEffect } from 'react'
import { TodoListContext } from '../contexts/TodoListContext'

const TodoForm = () => {
  const { addTodo, clearList, editTitle, edit } = useContext(TodoListContext)
  const [title, setTitle] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    addTodo(title)
    setTitle('')
  }

  const handleChange = e => {
    setTitle(e.target.value)
  }

  return (
    <form onSubmit={handleSubmit} className='form'>
      <input
        type='text'
        placeholder='Add Task...'
        value={edit ? editTitle : title}
        onChange={handleChange}
        required
        className='todo-input'
      />
      <div className='buttons'>
        <input
          type='submit'
          value={edit ? 'Edit Task' : 'Add Task'}
          className='btn todo-btn'
        />
        <button className='btn clear-btn' onClick={clearList}>
          Clear
        </button>
      </div>
    </form>
  )
}

export default TodoForm
