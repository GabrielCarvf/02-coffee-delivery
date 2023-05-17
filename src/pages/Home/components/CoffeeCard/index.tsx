import { CartButton, CoffeeCardContainer, Counter, PriceText } from './styles'
import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { Coffee } from '../../../../data/coffeeListData'

interface coffeeData {
  coffeeData: Coffee
}

export function CoffeeCard({ coffeeData }: coffeeData) {
  return (
    <CoffeeCardContainer>
      <img src={coffeeData.image} alt="" />
      <ul>
        {coffeeData.tags.map((tag) => (
          <label key={tag}>{tag}</label>
        ))}
      </ul>
      <h3>{coffeeData.title}</h3>
      <p>{coffeeData.subTitle}</p>
      <div>
        <PriceText>
          <span>R$ </span>
          {coffeeData.price.toLocaleString('pt-BR', {
            minimumFractionDigits: 2,
          })}
        </PriceText>

        <Counter>
          <button>
            <Minus size={14} weight="bold" />
          </button>
          <p>{coffeeData.amount.toString()}</p>
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
