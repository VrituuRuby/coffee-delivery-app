import { Trash } from "phosphor-react"
import { useContext, useState } from "react"
import { InputCounter } from "../../../../components/InputCounter"
import { ICart, ShoppingCartContext } from "../../../../contexts/ShoppingCart"
import { RemoveButton, ShoppingDetails, ShoppingItemContainer } from "./styles"

interface ShoppingItemProps {
  coffeeData: ICart
}

export function ShoppingItem({coffeeData}: ShoppingItemProps){
	const {incrementItem, decrementItem, removeItem} = useContext(ShoppingCartContext)

	function incrementCounter(){
		incrementItem(coffeeData.id)
	}

	function decrementCounter(){
		decrementItem(coffeeData.id)
	}

	return(
		<ShoppingItemContainer>
			<img src={coffeeData.image} alt={coffeeData.name} />
			<ShoppingDetails>
				<span>{coffeeData.name}</span>
				<div>
					<InputCounter 
						counter={coffeeData.quantity}
						incrementCounter={incrementCounter}
						decrementCounter={decrementCounter}
					/>
					<RemoveButton type="button" onClick={() => removeItem(coffeeData.id)}>
						<Trash size={16}/>
            REMOVER
					</RemoveButton>
				</div>
			</ShoppingDetails>
			<span>R$ <b>{((coffeeData.price * coffeeData.quantity)/100).toFixed(2)}</b></span>
		</ShoppingItemContainer>
	)
}