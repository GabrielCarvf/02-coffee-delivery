import { styled } from 'styled-components'

export const CheckoutContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 1rem 10rem;
  gap: 2rem;

  line-height: 1.3;

  span {
    color: ${(props) => props.theme['base-subtitle']};
  }
  p {
    color: ${(props) => props.theme['base-text']};
    font-size: 14px;
  }
`

export const FormContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  max-width: 40rem;

  h3 {
    font-family: 'Baloo 2';
    font-size: 18px;
    line-height: 1.3;
  }

  div {
    background: ${(props) => props.theme['base-card']};
    padding: 2.5rem;
    border-radius: 6px;
  }
`

export const ConfirmPaymentContainer = styled.div`
  flex: 1;
  display: flex;
  gap: 1rem;
  max-width: 28rem;

  div {
    background: ${(props) => props.theme['base-card']};
  }
`
