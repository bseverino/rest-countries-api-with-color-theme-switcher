import React from 'react'
import { Link } from 'react-router-dom'
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

const Title = styled(Link)`
  font-weight: ${({ theme }) => theme.bold};
  font-size: 1.8rem;
  color: ${({ theme }) => theme.text};
  text-decoration: none;
`

const Button = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.text};
  font-size: 1.6rem;
`

function Header() {
  const dispatch = useDispatch()

  const toggleDarkMode = () => {
    dispatch(toggle())
  }

  return (
    <Wrapper>
      <Title to='/'>
        <h1>Where in the world?</h1>
      </Title>
      <Button onClick={toggleDarkMode}>Dark Mode</Button>
    </Wrapper>
  )
}

export default Header
