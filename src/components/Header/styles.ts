import { styled } from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 2rem 10rem;
  @media (max-width: 768px) {
    padding: 2rem 2rem;
  }
`

export const InfosContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  span {
    display: flex;
    align-items: center;
    padding: 0.5rem;
    gap: 0.25rem;
    border-radius: 6px;

    background: ${(props) => props.theme['purple-light']};
    color: ${(props) => props.theme.purple};

    font-size: 0.875;

    p {
      color: ${(props) => props.theme['purple-dark']};
    }
  }
`

export const CheckoutButton = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 0.5rem;
    border: 0.13rem solid transparent;
    border-radius: 6px;

    color: ${(props) => props.theme['yellow-dark']};
    background: ${(props) => props.theme['yellow-light']};

    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;

    transition: 0.15s;

    &:hover {
      border: 0.13rem solid ${(props) => props.theme['yellow-dark']};
      /* color: ${(props) => props.theme.background}; */
      /* background: ${(props) => props.theme.yellow}; */
    }

    cursor: pointer;
  }

  &::after {
    content: attr(data-after);
    position: relative;
    top: -1.1rem;
    right: 0.7rem;
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 50%;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 0.75rem;
    font-weight: bold;

    text-align: center;
    letter-spacing: -0.06em;

    color: ${(props) => props.theme.white};
    background: ${(props) => props.theme['yellow-dark']};
  }
`
