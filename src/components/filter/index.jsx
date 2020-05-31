import React, { useState } from 'react'
import styled from 'styled-components'

const Dropdown = styled.select`
  align-self: flex-start;
  width: 50%;
  height: 5rem;
  margin: 0 5% 5rem;
  background: ${({ theme }) => theme.elements};
  border: none;
  border-radius: 10px;
  box-shadow: ${({ theme }) => theme.shadow};
`

function Filter() {
  const [query, setQuery] = useState('')

  const handleChange = (e) => {
    setQuery(e.target.value)
  }

  return (
    <Dropdown value={query} onChange={handleChange}>
      <option value=''>Filter by Region</option>
      <option value='africa'>Africa</option>
      <option value='america'>America</option>
      <option value='asia'>Asia</option>
      <option value='europe'>Europe</option>
      <option value='oceania'>Oceania</option>
    </Dropdown>
  )
}

export default Filter
