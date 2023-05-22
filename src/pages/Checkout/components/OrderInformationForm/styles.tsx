import styled from 'styled-components'

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

export const FlexRowWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 0.75rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`
interface WidthInputs {
  width?: string
}

export const FlexColumn = styled.div<WidthInputs>`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  max-width: ${(props) => props.width};

  input {
    width: 100%;
    @media (max-width: 768px) {
      width: 100%;
    }
  }

  span {
    font-size: 0.8rem;
    color: ${({ theme }) => theme.red};
  }

  @media (max-width: 768px) {
    max-width: 100%;
  }
`
