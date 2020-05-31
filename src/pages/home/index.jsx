import React from 'react'
import styled from 'styled-components'

import Header from '../../components/header'

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background: ${(props) => props.theme.background};
  font-family: ${(props) => props.theme.font};
  font-weight: ${(props) => props.theme.normal};
  font-size: ${(props) => props.theme.homepageItems};
  color: ${(props) => props.theme.text};
`

function Home() {
  return (
    <Wrapper>
      <Header />
    </Wrapper>
  )
}

export default Home
