import { ReactNode, createContext, useReducer } from 'react'
import { Coffee, coffeeListData } from '../data/coffeeListData'
import { coffeesReducer } from '../reducers/coffees/reduces'

interface CoffeesContextProviderProps {
  children: ReactNode
}

interface CoffeesContextType {
  coffees: Coffee[]
  amountOfCoffees: Number
  addCoffee: (coffeeType: string) => void
  removeCoffee: (coffeeType: string) => void
}

export const CoffeesContext = createContext({} as CoffeesContextType)

export function CoffeesContextProvider({
  children,
}: CoffeesContextProviderProps) {
  const [coffeesState, dispatch] = useReducer(
    coffeesReducer,
    {
      coffees: coffeeListData,
      amountOfCoffees: 0,
      totalPrice: 0,
    },
    (initialState) => {
      const storedStateAsJSON = localStorage.getItem(
        '@coffee-delivery:coffees-state-1.0.0',
      )

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON)
      }

      return initialState
    },
  )

  const { coffees, amountOfCoffees } = coffeesState

  function addCoffee(coffeeType: string) {
    dispatch({
      type: 'ADD_COFFEE',
      payload: {
        coffeeType,
      },
    })
  }

  function removeCoffee(coffeeType: string) {
    dispatch({
      type: 'REMOVE_COFFEE',
      payload: {
        coffeeType,
      },
    })
  }

  return (
    <CoffeesContext.Provider
      value={{ coffees, amountOfCoffees, addCoffee, removeCoffee }}
    >
      {children}
    </CoffeesContext.Provider>
  )
}
