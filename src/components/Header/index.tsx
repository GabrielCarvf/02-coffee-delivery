import { ButtonContainer, HeaderContainer, InfosContainer } from './styles'
import logo from '../../assets/logo_coffee_delivery.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
// import { CoffeesContext } from '../../context/CoffeesContext'
// import { useContext } from 'react'

export function Header() {
  // const { totalCoffes } = useContext(CoffeesContext)

  return (
    <HeaderContainer>
      <img src={logo} alt="Logo Coffee Delivery" />

      <InfosContainer>
        <span>
          <MapPin size={22} weight="fill" /> <p>Jataí, GO</p>
        </span>
        <ButtonContainer>
          <button>
            <ShoppingCart size={22} weight="fill" />
          </button>
        </ButtonContainer>
      </InfosContainer>
    </HeaderContainer>
  )
}
