import React from 'react'
import TodoListContextProvider from '../contexts/TodoListContext'
import TodoList from './TodoList'
import TodoForm from './TodoForm'

import '../App.css'
import Header from './Header'

const App = () => {
  return (
    <div className='container'>
      <div className='App'>
        <TodoListContextProvider>
          <Header />
          <div className='main'>
            <TodoForm />
            <TodoList />
          </div>
        </TodoListContextProvider>
      </div>
    </div>
  )
}

export default App
