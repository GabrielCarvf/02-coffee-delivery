import { styled } from 'styled-components'
import backgroundIntroHome from '../../assets/background_intro_home.svg'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
    gap: 0;
  }

  /* filter: blur(10px); */
`

export const IntroContainer = styled.div`
  width: 100%;
  padding: 5.75rem 10rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3.5rem;

  background-image: url(${backgroundIntroHome});

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1rem 2rem;
    img {
      width: 90vw;
    }
  }
`

export const MainText = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 36.75rem;
  gap: 1rem;
  margin-bottom: 4.125rem;

  h1 {
    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: 3rem;
    line-height: 1.3;

    color: ${(props) => props.theme['base-title']};
  }

  span {
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 1.25rem;
    line-height: 1.3;
  }
`

export const TableInfos = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.25rem;
  flex-wrap: wrap;

  color: ${(props) => props.theme['base-text']};
  line-height: 1.3;
  text-align: left;
`

export const ContainerShortInfos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  gap: 1.5rem;
`

const BACKGROUND_ICONS_COLORS = {
  gray: 'base-text',
  yellow: 'yellow',
  yellowDark: 'yellow-dark',
  purple: 'purple',
} as const

interface IconBackgroundColor {
  background_color: keyof typeof BACKGROUND_ICONS_COLORS
}

export const ShortInfo = styled.div<IconBackgroundColor>`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  span {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 2rem;
    height: 2rem;
    min-width: 2rem;
    min-height: 2rem;
    border-radius: 50%;
    background: ${(props) =>
      props.theme[BACKGROUND_ICONS_COLORS[props.background_color]]};
    color: ${(props) => props.theme.white};
  }
`

export const CoffeeListContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 10rem;
  gap: 3.375rem;

  @media (max-width: 768px) {
    padding: 1rem 2rem;
    text-align: center;
  }

  h1 {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 800;
    line-height: 1.3;
  }
`

export const CoffeeList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 20rem);
  justify-content: center;
  gap: 3rem 4rem;

  @media (max-width: 768px) {
    grid-template-columns: none;
    gap: 2rem auto;
  }
`

export const CoffeeCard = styled.div`
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

    button {
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
    }

    span {
      font-family: 'Baloo 2';
      font-weight: 800;
      font-size: 1.5rem;
      line-height: 1.3;

      color: ${(props) => props.theme['base-text']};

      span {
        font-family: 'Roboto';
        font-weight: 400;
        font-size: 0.875rem;
      }
    }
  }
`

export const Counter = styled.div`
  display: flex;
  padding: 0.5rem;

  border: 0;
  border-radius: 6px;
  max-width: 4.5rem;

  background: ${(props) => props.theme['base-button']};

  button {
    padding: 0rem !important;
    background: transparent !important;
    color: ${(props) => props.theme.purple} !important;
  }

  p {
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.3;
  }
`
