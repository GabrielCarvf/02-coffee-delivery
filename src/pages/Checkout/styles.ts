import { styled } from 'styled-components'

export const CheckoutContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 1rem 10rem;
  gap: 2rem;

  line-height: 1.3;

  color: ${({ theme }) => theme['base-subtitle']};

  p {
    color: ${({ theme }) => theme['base-text']};
    font-size: 0.875rem;
  }
`

const InfosContainerDefault = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  h3 {
    font-family: 'Baloo 2';
    font-size: 18px;
    line-height: 1.3;
  }
`

export const FormContainer = styled(InfosContainerDefault)`
  div {
    border-radius: 6px;
  }
`

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  background: ${({ theme }) => theme['base-card']};
  padding: 2.5rem;
`

export const FormInputsText = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.8rem;
`

export const FormInputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  input {
    font-size: 0.875rem;

    padding: 0.75rem;
    border-radius: 4px;

    background: ${({ theme }) => theme['base-input']};
    color: ${({ theme }) => theme['base-text']};
    border: 1px solid ${({ theme }) => theme['base-button']};

    &::placeholder {
      color: ${({ theme }) => theme['base-label']};
    }
  }
`

export const ConfirmPaymentContainer = styled(InfosContainerDefault)`
  max-width: 28rem;
  div {
    background: ${({ theme }) => theme['base-card']};
    padding: 2.5rem;
    border-radius: 6px 44px;
  }
`
