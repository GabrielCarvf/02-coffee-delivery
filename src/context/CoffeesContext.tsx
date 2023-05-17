import { ReactNode, createContext, useState } from 'react'
import { Coffee, coffeeListData } from '../data/CoffeeListData'

interface CoffeesContextProviderProps {
  children: ReactNode
}

interface CoffeesContextType {
  coffees: Coffee[]
  totalCoffees: Number
}

export const CoffeesContext = createContext({} as CoffeesContextType)

export function CoffeesContextProvider({
  children,
}: CoffeesContextProviderProps) {
  const [coffees, setCoffees] = useState(coffeeListData)
  const [totalCoffees, setTotalCoffees] = useState(0)

  function addCoffee() {}

  return (
    <CoffeesContext.Provider value={{ coffees, totalCoffees }}>
      {children}
    </CoffeesContext.Provider>
  )
}
