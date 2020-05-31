import React from 'react'
import styled from 'styled-components'

import Header from '../../components/header'
import Search from '../../components/search'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  background: ${({ theme }) => theme.background};
  font-family: ${({ theme }) => theme.font};
  font-weight: ${({ theme }) => theme.normal};
  font-size: ${({ theme }) => theme.homepageItems};
  color: ${({ theme }) => theme.text};
`

function Home() {
  return (
    <Wrapper>
      <Header />
      <Search />
    </Wrapper>
  )
}

export default Home
