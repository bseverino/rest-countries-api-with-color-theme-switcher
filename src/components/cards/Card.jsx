import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  border-radius: 10px;
  margin-bottom: 5rem;
  background: ${({ theme }) => theme.elements};
  box-shadow: ${({ theme }) => theme.shadow};

  img {
    border-radius: 10px 10px 0 0;
  }
`

const Content = styled.div`
  padding: 2rem;

  h2 {
    margin-bottom: 2rem;
    font-weight: ${({ theme }) => theme.bold};
    font-size: 1.8rem;
  }

  p {
    line-height: 2.4rem;
    span {
      font-weight: ${({ theme }) => theme.light};
    }
  }
`

function Card({ country }) {
  return (
    <Wrapper>
      <img src={country.flag} alt={`${country.name} flag`} />
      <Content>
        <h2>{country.name}</h2>
        <p>
          Population: <span>{country.population}</span>
        </p>
        <p>
          Region: <span>{country.region}</span>
        </p>
        <p>
          Capital: <span>{country.capital}</span>
        </p>
      </Content>
    </Wrapper>
  )
}

export default Card
