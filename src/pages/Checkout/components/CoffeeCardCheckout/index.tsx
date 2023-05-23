import { Minus, Plus, Trash } from 'phosphor-react'
import { Coffee } from '../../../../data/coffeeListData'
import {
  CoffeeCardContainer,
  Counter,
  CounterContainer,
  ImgAndInfosCoffee,
  Price,
  TitleAndAmountContainer,
} from './styles'
import { useContext } from 'react'
import { CoffeesContext } from '../../../../context/CoffeesContext'
import { defaultTheme } from '../../../../styles/themes/default'

interface coffeeData {
  coffeeData: Coffee
}

export function CoffeeCardCheckout({ coffeeData }: coffeeData) {
  const { addCoffee, removeCoffee, removeAllAmountOfCoffee } =
    useContext(CoffeesContext)

  function handleAddCoffee() {
    addCoffee(coffeeData.type)
  }

  function handleRemoveCoffee() {
    removeCoffee(coffeeData.type)
  }

  function handleRemoveAllAmountOfCoffee() {
    removeAllAmountOfCoffee(coffeeData.type)
  }

  return (
    <CoffeeCardContainer>
      <ImgAndInfosCoffee>
        <img src={coffeeData.image} alt="" />
        <TitleAndAmountContainer>
          <span>{coffeeData.title}</span>
          <CounterContainer>
            <Counter>
              <button type="button" onClick={handleRemoveCoffee}>
                <Minus size={14} weight="bold" />
              </button>
              <p>{coffeeData.amount.toString()}</p>
              <button type="button" onClick={handleAddCoffee}>
                <Plus size={14} weight="bold" />
              </button>
            </Counter>
            <button type="button" onClick={handleRemoveAllAmountOfCoffee}>
              <Trash size={13} color={defaultTheme.purple} />
              REMOVER
            </button>
          </CounterContainer>
        </TitleAndAmountContainer>
      </ImgAndInfosCoffee>
      <Price>
        R$
        {coffeeData.price.toLocaleString('pt-BR', {
          minimumFractionDigits: 2,
        })}
      </Price>
    </CoffeeCardContainer>
  )
}
