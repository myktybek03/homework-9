import React from "react"
import TodoItem from "../todo-item/TodoItem"

const TodoList = ({ state, dispatch }) => {
  return (
    <div>
      {state.todos.map((todo) => {
        return (
          <TodoItem
            dispatch={dispatch}
            key={todo.id}
            todo={todo}
            state={state}
          />
        )
      })}
    </div>
  )
}

export default TodoList
