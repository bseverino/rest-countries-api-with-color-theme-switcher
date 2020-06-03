import React, { useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import styled, { ThemeProvider } from 'styled-components'
import { fetchCountries } from './redux'
import { theme, darkTheme } from './theme'

import Home from './pages/home'
import Details from './pages/details'

import Header from './components/header'

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

function App() {
  const dispatch = useDispatch()
  const { darkMode } = useSelector((state) => state.countries)

  useEffect(() => {
    dispatch(fetchCountries())
  }, [dispatch])

  return (
    <ThemeProvider theme={darkMode ? darkTheme : theme}>
      <Wrapper>
        <Header />
        <Switch>
          <Route path='/:alpha3Code' component={Details} />
          <Route path='/' component={Home} />
        </Switch>
      </Wrapper>
    </ThemeProvider>
  )
}

export default App
