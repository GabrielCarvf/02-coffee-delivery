import { ReactNode, createContext, useState } from 'react'
import { Coffee, coffeeListData } from '../data/coffeeListData'
import { produce } from 'immer'

interface CoffeesContextProviderProps {
  children: ReactNode
}

interface CoffeesContextType {
  coffees: Coffee[]
  totalCoffees: Number
  addCoffee: (coffeeType: string) => void
  removeCoffee: (coffeeType: string) => void
}

export const CoffeesContext = createContext({} as CoffeesContextType)

export function CoffeesContextProvider({
  children,
}: CoffeesContextProviderProps) {
  const [coffees, setCoffees] = useState(coffeeListData)
  const [totalCoffees, setTotalCoffees] = useState(0)

  function addCoffee(coffeeType: string) {
    setCoffees(
      produce(coffees, (draft) => {
        const indexCoffee = draft.findIndex(
          (coffee) => coffee.type === coffeeType,
        )
        if (indexCoffee !== -1) {
          draft[indexCoffee].amount = draft[indexCoffee].amount + 1
        }
      }),
    )

    setTotalCoffees((state) => {
      return state + 1
    })
  }

  function removeCoffee(coffeeType: string) {
    setCoffees(
      produce(coffees, (draft) => {
        const indexCoffee = draft.findIndex(
          (coffee) => coffee.type === coffeeType,
        )
        if (indexCoffee !== -1 && draft[indexCoffee].amount > 0) {
          draft[indexCoffee].amount = draft[indexCoffee].amount - 1
        }
      }),
    )

    setTotalCoffees((state) => {
      return state === 0 ? 0 : state - 1
    })
  }

  return (
    <CoffeesContext.Provider
      value={{ coffees, totalCoffees, addCoffee, removeCoffee }}
    >
      {children}
    </CoffeesContext.Provider>
  )
}
