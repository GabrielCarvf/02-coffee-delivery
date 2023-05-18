import {
  CheckoutContainer,
  ConfirmPaymentContainer,
  FormContainer,
} from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <FormContainer>
        <h3>Complete seu pedido</h3>
        <div>
          <span>Endereço de Entrega</span>
          <p>Informe o endereço onde deseja receber seu pedido</p>
        </div>
        <div>
          <span>Pagamento</span>
          <p>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
        </div>
      </FormContainer>
      <ConfirmPaymentContainer>
        <h3>Cafés selecionados</h3>
      </ConfirmPaymentContainer>
    </CheckoutContainer>
  )
}
