import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

import Card from './Card'

const Wrapper = styled.div`
  width: 70%;
`

function Cards({ countries }) {
  const { loading, error } = useSelector((state) => state.countries)

  if (loading) {
    return <p>Loading...</p>
  } else if (error) {
    return <p>Error: {error}</p>
  } else {
    return (
      <Wrapper>
        {countries.map((country) => (
          <Card key={country.name} country={country} />
        ))}
      </Wrapper>
    )
  }
}

export default Cards
