import React, { createContext, useState, useEffect } from 'react'
import uuid from 'uuid'

export const TodoListContext = createContext()

const TodoListContextProvider = props => {
  const [todos, setTodos] = useState([
    { title: 'Wash the car', id: 1 },
    { title: 'Read the book', id: 2 },
    { title: 'Work  out', id: 3 }
  ])

  const [editTitle, setEditTitle] = useState('')
  const [edit, setEdit] = useState(false)

  // Add tasks
  const addTodo = title => {
    setTodos([...todos, { title, id: uuid() }])
  }

  // Remove tasks
  const removeTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  // Edit tasks
  const editTodo = id => {
    if (!edit) {
      setTodos(todos.filter(todo => todo.id !== id))

      const editableItem = todos.find(todo => todo.id === id)

      setEditTitle(editableItem.title)
      setEdit(true)
    }
  }

  // Clear tasks
  const clearList = () => {
    setTodos([])
  }

  return (
    <TodoListContext.Provider
      value={{
        todos,
        addTodo,
        removeTodo,
        clearList,
        editTodo,
        editTitle,
        edit
      }}
    >
      {props.children}
    </TodoListContext.Provider>
  )
}

export default TodoListContextProvider
