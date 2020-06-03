import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

import Card from './Card'

const Wrapper = styled.div`
  width: 70%;
`

function Cards({ countries }) {
  const { searchQuery, filterQuery, loading, error } = useSelector(
    (state) => state.countries
  )
  const [filteredCountries, setFilteredCountries] = useState([])

  useEffect(() => {
    setFilteredCountries(
      countries.filter(
        (country) =>
          country.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
          country.region.includes(filterQuery)
      )
    )
  }, [countries, searchQuery, filterQuery])

  if (loading) {
    return <p>Loading...</p>
  } else if (error) {
    return <p>Error: {error}</p>
  } else {
    return (
      <Wrapper>
        {filteredCountries.map((country) => (
          <Card key={country.name} country={country} />
        ))}
      </Wrapper>
    )
  }
}

export default Cards
