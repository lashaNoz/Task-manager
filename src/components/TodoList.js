import React, { useContext } from 'react'
import { TodoListContext } from '../contexts/TodoListContext'
import Todo from './Todo'

const TodoList = () => {
  const { todos } = useContext(TodoListContext)

  return todos.length > 0 ? (
    <div>
      <ul>
        {todos.map(todo => {
          return <Todo todo={todo} key={todo.id} />
        })}
      </ul>
    </div>
  ) : (
    <div>No todos</div>
  )
}

export default TodoList
