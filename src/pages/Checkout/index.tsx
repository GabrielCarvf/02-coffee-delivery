import { CurrencyDollar, MapPinLine } from 'phosphor-react'
import { useContext } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { defaultTheme } from '../../styles/themes/default'
import { CoffeesContext } from '../../context/CoffeesContext'
import { CoffeeCardCheckout } from './components/CoffeeCardCheckout'
import { PaymentMethods } from './components/PaymentMethod'
import { OrderInformationForm } from './components/OrderInformationForm'
import { useNavigate } from 'react-router-dom'
import * as zod from 'zod'
import {
  CheckoutContainer,
  CoffeeListContainer,
  ButtonConfirmOrder,
  ConfirmPaymentContainer,
  FormContainer,
  FormInputsText,
  InputsContainer,
  PartialValues,
  TotalValues,
  ListCoffees,
} from './styles'
import { FormProvider, useForm } from 'react-hook-form'

const newOrderValidationSchema = zod.object({
  zipCode: zod.string().nonempty('Informe o CEP').min(5, 'CEP inválido'),
  address: zod.string().nonempty('Informe a Rua'),
  number: zod.string().nonempty('Informe o Número'),
  complement: zod.string(),
  district: zod.string().nonempty('Informe o Bairro'),
  city: zod.string().nonempty('Informe a Cidade'),
  federatedUnit: zod
    .string()
    .nonempty('Informe o Estado')
    .min(2, 'Preencha a sigla do estado'),
  paymentMethod: zod.string().nonempty('Informe o Método de Pagamento'),
})

export type NewOrderFormData = zod.infer<typeof newOrderValidationSchema>

export function Checkout() {
  const { coffees, totalPrice } = useContext(CoffeesContext)
  const newOrderForm = useForm<NewOrderFormData>({
    resolver: zodResolver(newOrderValidationSchema),
    defaultValues: {
      zipCode: '',
      address: '',
      number: '',
      complement: '',
      district: '',
      city: '',
      federatedUnit: '',
      paymentMethod: '',
    },
  })

  const { handleSubmit, reset } = newOrderForm
  const navigate = useNavigate()

  function handleCreateNewOrder() {
    navigate('/order_confirmed')
    reset()
  }

  return (
    <form onSubmit={handleSubmit(handleCreateNewOrder)}>
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
            <FormProvider {...newOrderForm}>
              <OrderInformationForm />
            </FormProvider>
          </InputsContainer>

          <InputsContainer>
            <FormInputsText>
              <label data-color="purple">
                <CurrencyDollar size={19.25} color={defaultTheme.purple} />
              </label>
              <div>
                Pagamento
                <p>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </div>
            </FormInputsText>
            <FormProvider {...newOrderForm}>
              <PaymentMethods />
            </FormProvider>
          </InputsContainer>
        </FormContainer>

        <ConfirmPaymentContainer>
          <h3>Cafés selecionados</h3>
          <CoffeeListContainer>
            <ListCoffees>
              {coffees.map((coffee) => {
                if (coffee.amount > 0) {
                  return (
                    <CoffeeCardCheckout key={coffee.type} coffeeData={coffee} />
                  )
                } else return <div key={coffee.type}></div>
              })}
            </ListCoffees>

            <PartialValues>
              <p>Total dos itens</p>
              <span>
                R${' '}
                {totalPrice.toLocaleString('pt-BR', {
                  minimumFractionDigits: 2,
                })}
              </span>
            </PartialValues>
            <PartialValues>
              <p>Frete</p>
              <span>
                R${' '}
                {(3.5).toLocaleString('pt-BR', {
                  minimumFractionDigits: 2,
                })}
              </span>
            </PartialValues>
            <TotalValues>
              <span>Total</span>
              <span>
                R${' '}
                {(totalPrice + 3.5).toLocaleString('pt-BR', {
                  minimumFractionDigits: 2,
                })}
              </span>
            </TotalValues>
            <ButtonConfirmOrder type="submit">
              CONFIRMAR PEDIDO
            </ButtonConfirmOrder>
          </CoffeeListContainer>
        </ConfirmPaymentContainer>
      </CheckoutContainer>
    </form>
  )
}
