import { CurrencyDollar, MapPinLine } from 'phosphor-react'
import {
  CheckoutContainer,
  ConfirmPaymentContainer,
  FormContainer,
  FormInputsContainer,
  FormInputsText,
  InputsContainer,
} from './styles'
import { defaultTheme } from '../../styles/themes/default'

export function Checkout() {
  return (
    <CheckoutContainer>
      <FormContainer>
        <h3>Complete seu pedido</h3>
        <InputsContainer>
          <FormInputsText>
            <label>
              <MapPinLine size={19.25} color={defaultTheme['yellow-dark']} />
            </label>
            <div>
              Endereço de Entrega
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </FormInputsText>
          <FormInputsContainer>
            <input type="text" placeholder="CEP" />
            <input type="text" placeholder="Rua" />
            <div>
              <input type="text" placeholder="Número" />
              <input type="text" placeholder="Complemento" />
            </div>
            <div>
              <input type="text" placeholder="Bairro" />
              <input type="text" placeholder="Cidade" />
              <input type="text" placeholder="UF" />
            </div>
          </FormInputsContainer>
        </InputsContainer>

        <InputsContainer>
          <FormInputsText>
            <label data-color="purple">
              <CurrencyDollar size={19.25} color={defaultTheme.purple} />
            </label>
            <div>
              Pagamento
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </FormInputsText>
        </InputsContainer>
      </FormContainer>
      <ConfirmPaymentContainer>
        <h3>Cafés selecionados</h3>
        <div>Expresso</div>
      </ConfirmPaymentContainer>
    </CheckoutContainer>
  )
}
