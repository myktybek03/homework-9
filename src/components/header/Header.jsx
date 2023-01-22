import React from "react"
import styled from "styled-components"

const Header = () => {
  return (
    <HeaderStyled>
      <h1>Todo List</h1>
    </HeaderStyled>
  )
}

export default Header

const HeaderStyled = styled.div`
  padding: 30px;
  margin: 30px;
  text-align: center;
  background: #1abc9c;
  color: white;
  font-size: 30px;
  border-radius: 5px;
`
