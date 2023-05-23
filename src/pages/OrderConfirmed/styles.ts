import { styled } from 'styled-components'

export const OrderConfirmedContainer = styled.div`
  padding: 3.75rem 10rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 6.375rem;
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1rem 2rem;
    align-items: center;
    gap: 2rem;
    img {
      width: 90vw;
    }
  }
`

export const InfosContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`

export const TitleContainer = styled.div`
  h1 {
    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: 2rem;
    line-height: 1.3;

    color: ${(props) => props.theme['yellow-dark']};
  }

  p {
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 1.25rem;
    line-height: 1.3;
  }
`

export const ContainerShortInfos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;

  gap: 1.5rem;
  padding: 2.5rem;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 6px 36px;
    padding: 2px;
    background: linear-gradient(
      90deg,
      ${({ theme }) => theme.yellow},
      ${({ theme }) => theme.purple}
    );

    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }
`
