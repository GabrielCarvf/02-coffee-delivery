import { CartButton, CoffeeCardContainer, Counter, PriceText } from './styles'
import expresso from '../../../../assets/coffee/Type=Expresso.svg'
import { Minus, Plus, ShoppingCart } from 'phosphor-react'

export function CoffeeCard() {
  return (
    <CoffeeCardContainer>
      <img src={expresso} alt="" />
      <label>TRADICIONAL</label>
      <h3>Expresso Tradicional</h3>
      <text>O tradicional café feito com água quente e grãos moídos</text>
      <div>
        <PriceText>
          <span>R$ </span>9,90
        </PriceText>

        <Counter>
          <button>
            <Minus size={14} weight="bold" />
          </button>
          <p>0</p>
          <button>
            <Plus size={14} weight="bold" />
          </button>
        </Counter>

        <CartButton>
          <ShoppingCart size={22} weight="fill" />
        </CartButton>
      </div>
    </CoffeeCardContainer>
  )
}
