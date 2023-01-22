import React from "react"
import styled from "styled-components"

const EditForm = ({ dispatch, state, setIsVisible, todo }) => {
  const editTodoHandler = (id) => {
    dispatch({ type: "EDIT", payload: id })
    setIsVisible(false)
  }
  return (
    <div>
      <Input
        type="text"
        value={state.editInputValue}
        onChange={(e) =>
          dispatch({ type: "EditValue", payload: e.target.value })
        }
      />
      <Button onClick={() => editTodoHandler(todo.id)}>ok</Button>
      <Button onClick={() => setIsVisible(false)}>cancel</Button>
    </div>
  )
}

export default EditForm

const Input = styled.input`
  width: 50%;
  padding: 12px 15px;
  margin: 8px 0;
  box-sizing: border-box;
  background-color: #3cbc8d;
  color: white;
  text-align: center;
`

const Button = styled.button`
  background-color: #68a0d9;
  border: none;
  color: black;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 5px;
  box-shadow: 0px 0px 2px 2px rgb(0, 0, 0);
  cursor: pointer;
`
