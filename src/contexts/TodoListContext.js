import React, { createContext, useState } from 'react'
import uuid from 'uuid'

export const TodoListContext = createContext()

const TodoListContextProvider = props => {
  const [todos, setTodos] = useState([
    { todoItem: 'Wash the car', id: 1 },
    { todoItem: 'Read the book', id: 2 },
    { todoItem: 'Work  out', id: 3 }
  ])

  const addTodo = todoItem => {
    setTodos([...todos, { todoItem, id: uuid() }])
  }

  const removeTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <TodoListContext.Provider value={{ todos, addTodo, removeTodo }}>
      {props.children}
    </TodoListContext.Provider>
  )
}

export default TodoListContextProvider
