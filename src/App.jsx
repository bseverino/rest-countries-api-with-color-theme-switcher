import React, { useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { fetchCountries } from './redux'
import { theme, darkTheme } from './theme'

import Home from './pages/home'

function App() {
  const dispatch = useDispatch()
  const { darkMode } = useSelector((state) => state.countries)

  useEffect(() => {
    dispatch(fetchCountries())
  }, [dispatch])

  return (
    <ThemeProvider theme={darkMode ? darkTheme : theme}>
      <Switch>
        <Route path='/' component={Home} />
      </Switch>
    </ThemeProvider>
  )
}

export default App
