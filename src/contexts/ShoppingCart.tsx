import { createContext, ReactNode, useState } from "react"
import { Coffee, COFFEE_LIST } from "../data/coffees"

export interface ICart extends Coffee {
  quantity: number
} 

interface IShoppingCartContext {
  cart: ICart[],
  setCart: (newCart : ICart[]) => void,
  addItem: (itemId : number) => void,
}

type ShoppingCartProps = {
  children: ReactNode
}

export const ShoppingCartContext = createContext({} as IShoppingCartContext)

export function ShoppingCartProvider({children}: ShoppingCartProps){
	const [cart, setCart] = useState<ICart[]>([])

	function addItem(itemId: number){
		const copyCart = [...cart]
		const coffeeExists = copyCart.find(coffee => coffee.id === itemId)
	
		if (coffeeExists){
			coffeeExists.quantity += 1
			setCart(copyCart)
		} else {
			const coffee = COFFEE_LIST.find(coffee => coffee.id === itemId)
			if (!coffee) return
			const newCoffee : ICart = {...coffee, quantity : 1}
			const newCart = [...copyCart, newCoffee]

			setCart(newCart)
		}

		console.log(cart)
	}

	return(
		<ShoppingCartContext.Provider value={{cart, setCart, addItem}}>
			{children}
		</ShoppingCartContext.Provider>
	)
}