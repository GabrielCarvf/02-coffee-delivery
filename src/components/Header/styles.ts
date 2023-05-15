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
