import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { toggle } from '../../redux'

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10rem;
  width: 100%;
  margin-bottom: 3rem;
  padding: 2rem;
  background: ${({ theme }) => theme.elements};
  box-shadow: ${({ theme }) => theme.shadow};
`

const Title = styled.h1`
  font-weight: ${({ theme }) => theme.bold};
  font-size: 1.8rem;
`

const Button = styled.button`
  background: none;
  border: none;
  font-size: 1.6rem;
`

function Header() {
  const dispatch = useDispatch()

  const toggleDarkMode = () => {
    dispatch(toggle())
  }

  return (
    <Wrapper>
      <Title>Where in the world?</Title>
      <Button onClick={toggleDarkMode}>Dark Mode</Button>
    </Wrapper>
  )
}

export default Header
