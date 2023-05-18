import { CartButton, CoffeeCardContainer, Counter, PriceText } from './styles'
import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { Coffee } from '../../../../data/coffeeListData'
import { useContext } from 'react'

import { CoffeesContext } from '../../../../context/CoffeesContext'

interface coffeeData {
  coffeeData: Coffee
}

export function CoffeeCard({ coffeeData }: coffeeData) {
  const { addCoffee, removeCoffee } = useContext(CoffeesContext)

  function handleAddCoffee() {
    addCoffee(coffeeData.type)
  }

  function handleRemoveCoffee() {
    removeCoffee(coffeeData.type)
  }

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
          <button onClick={handleRemoveCoffee}>
            <Minus size={14} weight="bold" />
          </button>
          <p>{coffeeData.amount.toString()}</p>
          <button onClick={handleAddCoffee}>
            <Plus size={14} weight="bold" />
          </button>
        </Counter>

        <CartButton>
          <ShoppingCart size={17.88} weight="fill" />
        </CartButton>
      </div>
    </CoffeeCardContainer>
  )
}
