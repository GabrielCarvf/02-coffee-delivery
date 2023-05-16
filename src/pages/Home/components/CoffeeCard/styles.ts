import styled from 'styled-components'

export const CoffeeCardContainer = styled.div`
  width: 16rem;
  /* height: 19.375rem; */
  padding: 0 1.25rem 1.25rem 1.25rem;

  background: ${(props) => props.theme['base-card']};
  border-radius: 6px 36px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  text-align: center;

  img {
    margin-top: -1.75rem;
    width: 7.5rem;
  }

  label {
    background: ${(props) => props.theme['yellow-light']};
    color: ${(props) => props.theme['yellow-dark']};
    border-radius: 100px;
    padding: 0.25rem 0.5rem;

    font-weight: bold;
    font-size: 0.625rem;
    line-height: 1.3;
  }

  h3 {
    color: ${(props) => props.theme['base-subtitle']};
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 130%;
  }

  text {
    font-size: 0.875rem;
    line-height: 1.3;
    color: ${(props) => props.theme['base-label']};
  }

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`

export const PriceText = styled.span`
  font-family: 'Baloo 2';
  font-weight: 800;
  font-size: 1.5rem;
  line-height: 1.3;
  margin-right: 1rem;

  color: ${(props) => props.theme['base-text']};

  span {
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 0.875rem;
  }
`

export const CartButton = styled.button`
  border: 0;
  border-radius: 6px;
  padding: 0.5rem;

  line-height: 0px;

  color: ${(props) => props.theme['base-card']};
  background: ${(props) => props.theme['purple-dark']};

  cursor: pointer;
  transition: 0.15s;

  &:hover {
    background: ${(props) => props.theme.purple};
  }
`

export const Counter = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem;

  border: 0;
  border-radius: 6px;
  max-width: 4.5rem;

  background: ${(props) => props.theme['base-button']};

  button {
    line-height: 0;
    border: 0;
    border-radius: 3px;
    padding: 0rem;
    background: transparent;
    color: ${(props) => props.theme.purple};

    &:hover {
      color: ${(props) => props.theme['purple-dark']};
    }
  }

  p {
    line-height: 1.3;
  }
`
