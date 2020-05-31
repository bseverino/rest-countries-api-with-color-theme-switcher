import React, { useState } from 'react'
import styled from 'styled-components'

const Input = styled.input`
  width: 90%;
  height: 5rem;
  padding: 2rem 3rem;
  background: ${({ theme }) => theme.elements};
  color: ${({ theme }) => theme.input};
  border: none;
  border-radius: 5px;
  box-shadow: ${({ theme }) => theme.shadow};
`

function Search() {
  const [query, setQuery] = useState('')

  const handleChange = (e) => {
    setQuery(e.target.value)
  }

  return (
    <Input
      value={query}
      placeholder='Search for a country...'
      onChange={handleChange}
    />
  )
}

export default Search
