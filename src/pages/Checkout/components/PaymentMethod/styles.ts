import { styled } from 'styled-components'

export const PaymentMethodsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  input {
    display: none;
  }

  label {
    flex: 1;
  }

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    min-width: 10.18rem;

    padding: 1rem 0.5rem;
    border-radius: 6px;

    text-align: center;
    font-size: 0.75rem;
    line-height: 1.6;

    border: 1px solid transparent;

    background: ${({ theme }) => theme['base-button']};

    cursor: pointer;

    &:hover {
      background: ${({ theme }) => theme['base-hover']};
    }
  }

  label input:checked + span {
    background: ${({ theme }) => theme['purple-light']};
    border: 1px solid ${({ theme }) => theme.purple};
  }
`

export const ErrorInputValidation = styled.div`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.red};
`
