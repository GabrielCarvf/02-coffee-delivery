import { HeaderContainer, InfosContainer } from './styles'
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
        <div>
          <button>
            <ShoppingCart size={18} weight="fill" />
          </button>
          <span>5</span>
        </div>
      </InfosContainer>
    </HeaderContainer>
  )
}
