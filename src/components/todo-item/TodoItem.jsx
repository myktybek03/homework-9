import React, { useState } from "react"
import EditForm from "./EditForm"
import styled from "styled-components"

const TodoItem = ({ state, dispatch, todo }) => {
  const [isVisible, setIsVisible] = useState(false)
  const deleteTodoHandler = (id) => {
    dispatch({ type: "DELETE", payload: id })
  }

  const completedTodoHandler = (id) => {
    dispatch({ type: "COMPLETE", payload: id })
  }

  const toggleHander = () => {
    setIsVisible(true)
  }
  return (
    <div>
      {isVisible ? (
        <EditForm
          dispatch={dispatch}
          setIsVisible={setIsVisible}
          state={state}
          todo={todo}
        />
      ) : (
        <Ul>
          <Li>
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "",
              }}
            >
              {todo.title}
            </span>
            <Button onClick={() => deleteTodoHandler(todo.id)}>Delete</Button>
            <Button onClick={() => completedTodoHandler(todo.id)}>
              completed
            </Button>
            <Button onClick={toggleHander}>Edit</Button>
          </Li>
        </Ul>
      )}
    </div>
  )
}

export default TodoItem

const Ul = styled.ul`
  background: #3399ff;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`

const Li = styled.li`
  background: #cce5ff;
  color: darkblue;
  margin: 5px;
`

const Button = styled.button`
  background-color: #68a0d9;
  border: none;
  color: black;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  border-radius: 5px;
  box-shadow: 0px 0px 2px 2px rgb(0, 0, 0);
  cursor: pointer;
`
