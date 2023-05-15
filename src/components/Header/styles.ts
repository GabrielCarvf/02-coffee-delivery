import { styled } from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 2rem 10rem;
`

export const InfosContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  p {
    display: flex;
    align-items: center;
    padding: 0.5rem;
    gap: 0.25rem;
    border-radius: 6px;

    background: ${(props) => props.theme['purple-light']};
    color: ${(props) => props.theme['purple-dark']};

    font-size: 0.875;
    line-height: 1.8;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 0.75rem;
    border: 0;
    border-radius: 6px;

    color: ${(props) => props.theme['yellow-dark']};
    background: ${(props) => props.theme['yellow-light']};

    :hover {
    }
  }

  &::after {
    content: '3';
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
