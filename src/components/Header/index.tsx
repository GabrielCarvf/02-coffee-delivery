import { ButtonContainer, HeaderContainer, InfosContainer } from './styles'
import logo from '../../assets/logo_coffee_delivery.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="Logo Coffee Delivery" />

      <InfosContainer>
        <p>
          <MapPin size={15} weight="fill" /> Jataí, GO
        </p>
        <ButtonContainer>
          <button>
            <ShoppingCart size={18.56} weight="fill" />
          </button>
        </ButtonContainer>
      </InfosContainer>
    </HeaderContainer>
  )
}
