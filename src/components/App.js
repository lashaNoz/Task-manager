import React from 'react'
import TodoListContextProvider from '../contexts/TodoListContext'
import TodoList from './TodoList'
import TodoForm from './TodoForm'

const App = () => {
  return (
    <TodoListContextProvider>
      <TodoForm />
      <TodoList />
    </TodoListContextProvider>
  )
}

export default App
