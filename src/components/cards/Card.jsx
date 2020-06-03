import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Wrapper = styled(Link)`
  display: block;
  border-radius: 10px;
  margin-bottom: 5rem;
  background: ${({ theme }) => theme.elements};
  box-shadow: ${({ theme }) => theme.shadow};
  color: ${({ theme }) => theme.text};
  text-decoration: none;

  img {
    border-radius: 10px 10px 0 0;
  }
`

const Content = styled.section`
  padding: 2rem;

  h2 {
    margin-bottom: 2rem;
    font-weight: ${({ theme }) => theme.bold};
    font-size: 1.8rem;
  }

  li {
    line-height: 2.4rem;
    span {
      font-weight: ${({ theme }) => theme.light};
    }
  }
`

function Card({ country }) {
  return (
    <Wrapper
      to={`/${country.alpha3Code}`}
      aria-label={`More detailed information about ${country.name}`}
    >
      <img src={country.flag} alt={`${country.name} flag`} />
      <Content>
        <h2>{country.name}</h2>
        <ul>
          <li>
            Population: <span>{country.population}</span>
          </li>
          <li>
            Region: <span>{country.region}</span>
          </li>
          <li>
            Capital: <span>{country.capital}</span>
          </li>
        </ul>
      </Content>
    </Wrapper>
  )
}

export default Card
