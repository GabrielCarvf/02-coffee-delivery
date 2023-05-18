import { CheckoutButton, HeaderContainer, InfosContainer } from './styles'
import logo from '../../assets/logo_coffee_delivery.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { useContext } from 'react'
import { CoffeesContext } from '../../context/CoffeesContext'
import { NavLink } from 'react-router-dom'

export function Header() {
  const { amountOfCoffees } = useContext(CoffeesContext)

  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={logo} alt="Logo Coffee Delivery" />
      </NavLink>

      <InfosContainer>
        <span>
          <MapPin size={22} weight="fill" /> <p>Jataí, GO</p>
        </span>
        <CheckoutButton data-after={amountOfCoffees}>
          <NavLink to="/checkout">
            <ShoppingCart size={22} weight="fill" />
          </NavLink>
        </CheckoutButton>
      </InfosContainer>
    </HeaderContainer>
  )
}
