import React, { useState } from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { setSearch } from '../../redux'

const Form = styled.form`
  width: 90%;
`

const Input = styled.input`
  width: 100%;
  height: 5rem;
  margin-bottom: 5rem;
  padding: 0 3rem;
  background: ${({ theme }) => theme.elements};
  color: ${({ theme }) => theme.input};
  border: none;
  border-radius: 10px;
  box-shadow: ${({ theme }) => theme.shadow};
`

function Search() {
  const dispatch = useDispatch()
  const [query, setQuery] = useState('')

  const handleChange = (e) => {
    setQuery(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(setSearch(query))
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type='text'
        name='search'
        aria-label='Search countries by name'
        value={query}
        placeholder='Search for a country...'
        onChange={handleChange}
      />
    </Form>
  )
}

export default Search
