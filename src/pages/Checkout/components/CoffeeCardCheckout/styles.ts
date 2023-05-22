import styled from 'styled-components'

export const CoffeeCardContainer = styled.div`
  padding: 1.3rem 0.25rem;

  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1.25rem;

  img {
    width: 4rem;
  }

  border-bottom: 2px solid ${({ theme }) => theme['base-input']};
`

export const ImgAndInfosCoffee = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
`

export const TitleAndAmountContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  span {
    line-height: 1.6;
    color: ${({ theme }) => theme['base-subtitle']};
  }
`

export const CounterContainer = styled.div`
  display: flex;
  gap: 0.5rem;

  button:nth-child(2) {
    border: 0;
    padding: 0.2rem 0.5rem;
    border-radius: 6px;

    display: flex;
    align-items: center;
    gap: 0.375rem;

    font-size: 0.75rem;
    line-height: 1.6;

    color: ${({ theme }) => theme['base-text']};
    background: ${(props) => props.theme['base-button']};

    cursor: pointer;
    transition: 0.2s;

    &:hover {
      background: ${(props) => props.theme['base-hover']};
    }
  }
`

export const Counter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;

  border: 0;
  border-radius: 6px;
  min-width: 4.5rem;

  background: ${(props) => props.theme['base-button']};

  button {
    line-height: 0;
    border: 0;
    border-radius: 3px;
    padding: 0rem;
    background: transparent;
    color: ${(props) => props.theme.purple};

    cursor: pointer;

    &:hover {
      color: ${(props) => props.theme['purple-dark']};
    }
  }

  p {
    line-height: 1.3;
  }
`

export const Price = styled.span`
  font-weight: bold;
`
