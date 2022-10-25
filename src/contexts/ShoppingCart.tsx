import { createContext, ReactNode, useEffect, useState } from "react"
import { Coffee, COFFEE_LIST } from "../data/coffees"

export interface ICart extends Coffee {
  quantity: number
} 

interface IShoppingCartContext {
  cart: ICart[],
  setCart: (newCart : ICart[]) => void,
  addItem: (itemId : number, quantity?: number) => void,
	incrementItem: (itemID: number) => void,
	decrementItem: (itemID: number) => void,
	removeItem: (itemID: number) => void,
	wipeShoppingCart: () => void
}

type ShoppingCartProps = {
  children: ReactNode
}

export const ShoppingCartContext = createContext({} as IShoppingCartContext)

export function ShoppingCartProvider({children}: ShoppingCartProps){
	const cartStored = localStorage.getItem("@ignite-coffee-delivery:cartState-1.0.0")
	const [cart, setCart] = useState<ICart[]>(cartStored ? JSON.parse(cartStored) : [])

	useEffect(() => {
		const cartState = JSON.stringify(cart)
		localStorage.setItem("@ignite-coffee-delivery:cartState-1.0.0", cartState)

	}, [cart])

	function wipeShoppingCart(){
		setCart([])
	}

	function addItem(itemId: number, quantity = 1){
		const copyCart = [...cart]
		const coffeeExists = copyCart.find(coffee => coffee.id === itemId)
	
		if (coffeeExists){
			coffeeExists.quantity += quantity
			setCart(copyCart)
		} else {
			const coffee = COFFEE_LIST.find(coffee => coffee.id === itemId)
			if (!coffee) return
			const newCoffee : ICart = {...coffee, quantity : quantity}
			const newCart = [...copyCart, newCoffee]

			setCart(newCart)
		}
	}

	function incrementItem(itemID: number){
		const cartCopy = [...cart]
		const coffeItem = cartCopy.find(item => item.id === itemID)
		if(!coffeItem) return
		coffeItem.quantity += 1
		setCart(cartCopy)
		console.log(cart)
	}

	function decrementItem(itemID: number){
		const cartCopy = [...cart]
		const coffeItem = cartCopy.find(item => item.id === itemID)
		if(!coffeItem) return
		if (coffeItem.quantity - 1 <= 0) return
		coffeItem.quantity -= 1
		setCart(cartCopy)
		console.log(cart)
	}

	function removeItem(itemID: number){
		const cartCopy = [...cart]
		const coffeeIndex = cartCopy.findIndex(item => item.id === itemID)
		if (coffeeIndex < 0) return
		cartCopy.splice(coffeeIndex, 1)
		setCart(cartCopy)
	}

	return(
		<ShoppingCartContext.Provider value={{cart, setCart, addItem, incrementItem, decrementItem, removeItem, wipeShoppingCart}}>
			{children}
		</ShoppingCartContext.Provider>
	)
}