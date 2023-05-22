import { produce } from 'immer'
import { Coffee } from '../../data/coffeeListData'

interface CoffeeState {
  coffees: Coffee[]
  amountOfCoffees: number
  totalPrice: number
}

export function coffeesReducer(state: CoffeeState, action: any) {
  switch (action.type) {
    case 'ADD_COFFEE':
      return produce(state, (draft) => {
        const indexCoffee = draft.coffees.findIndex(
          (coffee) => coffee.type === action.payload.coffeeType,
        )
        if (indexCoffee !== -1) {
          draft.coffees[indexCoffee].amount += 1
          draft.amountOfCoffees += 1
          draft.totalPrice += draft.coffees[indexCoffee].price
        }
      })

    case 'REMOVE_COFFEE':
      return produce(state, (draft) => {
        const indexCoffee = draft.coffees.findIndex(
          (coffee) => coffee.type === action.payload.coffeeType,
        )
        if (indexCoffee !== -1 && draft.coffees[indexCoffee].amount > 0) {
          draft.coffees[indexCoffee].amount -= 1
          draft.amountOfCoffees -= 1
          draft.totalPrice -= draft.coffees[indexCoffee].price
        }
      })

    case 'REMOVE_ALL_AMOUNT_COFFEE':
      return produce(state, (draft) => {
        const indexCoffee = draft.coffees.findIndex(
          (coffee) => coffee.type === action.payload.coffeeType,
        )
        if (indexCoffee !== -1 && draft.coffees[indexCoffee].amount > 0) {
          draft.totalPrice -=
            draft.coffees[indexCoffee].price * draft.coffees[indexCoffee].amount

          draft.amountOfCoffees -= draft.coffees[indexCoffee].amount
          draft.coffees[indexCoffee].amount = 0
        }
      })

    default:
      return state
  }
}
