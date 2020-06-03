import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

import Search from '../../components/search'
import Filter from '../../components/filter'
import Cards from '../../components/cards'

function Home() {
  const { countries } = useSelector((state) => state.countries)
  const [countryList, setCountryList] = useState(countries)
  console.log(countryList)

  useEffect(() => {
    setCountryList(countries)
  }, [countries])

  return (
    <>
      <Search />
      <Filter />
      <Cards countries={countries} />
    </>
  )
}

export default Home
