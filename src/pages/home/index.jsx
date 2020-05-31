import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

import Header from '../../components/header'
import Search from '../../components/search'
import Filter from '../../components/filter'
import Cards from '../../components/cards'

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
  const { countries } = useSelector((state) => state.countries)
  const [countryList, setCountryList] = useState(countries)
  console.log(countryList)

  useEffect(() => {
    setCountryList(countries)
  }, [countries])

  return (
    <Wrapper>
      <Header />
      <Search />
      <Filter />
      <Cards countries={countries} />
    </Wrapper>
  )
}

export default Home
