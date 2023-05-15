import { styled } from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 5.75rem 10rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 3.5rem;
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
  flex-direction: column;
  gap: 1.25rem;
  flex-wrap: wrap;

  color: ${(props) => props.theme['base-text']};
  line-height: 1.3;
  text-align: left;
`

export const ContainerShortInfos = styled.div`
  display: flex;
  align-items: center;
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
    border-radius: 50%;
    background: ${(props) =>
      props.theme[BACKGROUND_ICONS_COLORS[props.background_color]]};
    color: ${(props) => props.theme.white};
  }
`
