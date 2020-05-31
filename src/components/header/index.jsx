import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 6rem;
  padding: 2rem;
  background: ${({ theme }) => theme.elements};
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
  return (
    <Wrapper>
      <Title>Where in the world?</Title>
      <Button>Dark Mode</Button>
    </Wrapper>
  )
}

export default Header
