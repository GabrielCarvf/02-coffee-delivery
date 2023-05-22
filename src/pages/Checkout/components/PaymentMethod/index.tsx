import { Bank, CreditCard, Money } from 'phosphor-react'
import { ErrorInputValidation, PaymentMethodsContainer } from './styles'
import { defaultTheme } from '../../../../styles/themes/default'
import { useFormContext } from 'react-hook-form'
import { NewOrderFormData } from '../..'

export function PaymentMethods() {
  const {
    register,
    formState: { errors },
  } = useFormContext<NewOrderFormData>()

  return (
    <>
      <PaymentMethodsContainer>
        <label>
          <input
            type="radio"
            id="paymentMethod_1"
            value="creditCard"
            {...register('paymentMethod')}
          />
          <span>
            <CreditCard size={16} color={defaultTheme.purple} /> CARTÃO DE
            CRÉDITO
          </span>
        </label>
        <label>
          <input
            type="radio"
            id="paymentMethod_2"
            value="debitCard"
            {...register('paymentMethod')}
          />
          <span>
            <Bank size={16} color={defaultTheme.purple} /> CARTÃO DE DÉBITO
          </span>
        </label>
        <label>
          <input
            type="radio"
            id="paymentMethod_3"
            value="cash"
            {...register('paymentMethod')}
          />
          <span>
            <Money size={16} color={defaultTheme.purple} /> DINHEIRO
          </span>
        </label>
      </PaymentMethodsContainer>
      {errors?.paymentMethod && (
        <ErrorInputValidation>
          {errors.paymentMethod.message}
        </ErrorInputValidation>
      )}
    </>
  )
}
