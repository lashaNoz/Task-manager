import React, { useContext } from 'react'
import { TodoListContext } from '../contexts/TodoListContext'
import Todo from './Todo'

const TodoList = () => {
  const { todos } = useContext(TodoListContext)

  return (
    <div>
      {todos.length ? (
        <ul className='list'>
          {todos.map(todo => {
            return <Todo todo={todo} key={todo.id} />
          })}
        </ul>
      ) : (
        <div className='no-todos'>No Tasks</div>
      )}
    </div>
  )
}

export default TodoList
