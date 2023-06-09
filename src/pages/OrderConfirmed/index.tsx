import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import delivery from '../../assets/delivery.svg'
import { ShortInfo } from '../Home/styles'
import {
  ContainerShortInfos,
  InfosContainer,
  OrderConfirmedContainer,
  TitleContainer,
} from './styles'
import { useContext } from 'react'
import { CoffeesContext } from '../../context/CoffeesContext'

export function OrderConfirmed() {
  const { checkoutData } = useContext(CoffeesContext)

  return (
    <OrderConfirmedContainer>
      <InfosContainer>
        <TitleContainer>
          <h1>Uhu! Pedido confirmado</h1>
          <p>Agora é só aguardar que logo o café chegará até você</p>
        </TitleContainer>
        <ContainerShortInfos>
          <ShortInfo background_color="purple">
            <span>
              <MapPin weight="fill" />
            </span>
            <div>
              <p>
                Entrega em{' '}
                <strong>
                  Rua {checkoutData.address}, {checkoutData.number}{' '}
                </strong>
              </p>
              <p>
                {checkoutData.district} - {checkoutData.city},{' '}
                {checkoutData.federatedUnit}
              </p>
            </div>
          </ShortInfo>
          <ShortInfo background_color="yellow">
            <span>
              <Timer weight="fill" />
            </span>
            <div>
              <p>Previsão de entrega</p>
              <p>
                <strong>20 min - 30 min</strong>
              </p>
            </div>
            <label></label>
          </ShortInfo>
          <ShortInfo background_color="yellowDark">
            <span>
              <CurrencyDollar weight="fill" />
            </span>
            <div>
              <p>Pagamento na entrega</p>
              <p>
                <strong>{checkoutData.paymentMethod}</strong>
              </p>
            </div>
            <label></label>
          </ShortInfo>
        </ContainerShortInfos>
      </InfosContainer>
      <img src={delivery} alt="" />
    </OrderConfirmedContainer>
  )
}
