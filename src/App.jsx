import React, { useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { fetchCountries } from './redux'

import Home from './components/home'

function App() {
  const dispatch = useDispatch()
  const { countries } = useSelector((state) => state.countries)
  console.log(countries)

  useEffect(() => {
    dispatch(fetchCountries())
  }, [dispatch])

  return (
    <Switch>
      <Route path='/' component={Home} />
    </Switch>
  )
}

export default App
