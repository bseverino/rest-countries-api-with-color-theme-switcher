import React from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { setFilter } from '../../redux'

const Dropdown = styled.select`
  align-self: flex-start;
  width: 50%;
  height: 5rem;
  margin: 0 5% 5rem;
  background: ${({ theme }) => theme.elements};
  color: ${({ theme }) => theme.text};
  border: none;
  border-radius: 10px;
  box-shadow: ${({ theme }) => theme.shadow};
`

function Filter() {
  const dispatch = useDispatch()
  const { filterQuery } = useSelector((state) => state.countries)

  const handleChange = (e) => {
    dispatch(setFilter(e.target.value))
  }

  return (
    <Dropdown value={filterQuery} onChange={handleChange}>
      <option value=''>Filter by Region</option>
      <option value='Africa'>Africa</option>
      <option value='America'>America</option>
      <option value='Asia'>Asia</option>
      <option value='Europe'>Europe</option>
      <option value='Oceania'>Oceania</option>
    </Dropdown>
  )
}

export default Filter
