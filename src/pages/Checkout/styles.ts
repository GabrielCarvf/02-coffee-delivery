import { styled } from 'styled-components'

export const CheckoutContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 1rem 10rem;
  gap: 2rem;
  flex-wrap: wrap;

  line-height: 1.3;

  color: ${({ theme }) => theme['base-subtitle']};

  p {
    color: ${({ theme }) => theme['base-text']};
    font-size: 0.875rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1rem;
  }
`

const InfosContainerDefault = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  min-width: 20rem;
  width: 100%;

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

export const ConfirmPaymentContainer = styled(InfosContainerDefault)`
  max-width: 30rem;

  @media (max-width: 1000px) {
    max-width: 100%;
  }
`

export const CoffeeListContainer = styled.div`
  min-width: 28rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 2.5rem;
  border-radius: 6px 44px;

  background: ${({ theme }) => theme['base-card']};

  @media (max-width: 768px) {
    min-width: 100%;
  }
`

export const ListCoffees = styled.div`
  flex: 1;
  max-height: 20rem;
  overflow-y: auto;
  overflow-x: hidden;
  /* margin: 0; */

  &::-webkit-scrollbar {
    width: 0.15rem;
  }
`

export const ButtonConfirmOrder = styled.button`
  text-align: center;
  padding: 0.75rem 0.5rem;
  border-radius: 6px;
  margin-top: 0.5rem;
  border: 0;

  font-size: 0.875rem;
  line-height: 1.6;

  color: ${({ theme }) => theme.white};
  background: ${({ theme }) => theme.yellow};

  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background: ${({ theme }) => theme['yellow-dark']};
  }
`

export const PartialValues = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${({ theme }) => theme['base-text']};
`

export const TotalValues = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${({ theme }) => theme['base-subtitle']};

  font-weight: bold;

  font-size: 1.25rem;
`
