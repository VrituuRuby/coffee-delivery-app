import { Trash } from "phosphor-react"
import { useContext } from "react"
import { InputCounter } from "../../../../components/InputCounter"
import { ICart, ShoppingCartContext } from "../../../../contexts/ShoppingCart"
import { RemoveButton, ShoppingDetails, ShoppingItemContainer } from "./styles"

interface ShoppingItemProps {
	coffeeData: ICart
}

export function ShoppingItem({ coffeeData }: ShoppingItemProps) {
	const { incrementItem, decrementItem, removeItem } = useContext(ShoppingCartContext)

	function incrementCounter() {
		incrementItem(coffeeData.id)
	}

	function decrementCounter() {
		decrementItem(coffeeData.id)
	}

	return (
		<ShoppingItemContainer>
			<ShoppingDetails>
				<img src={coffeeData.image} alt={coffeeData.name} />
				<div>
					<span>{coffeeData.name}</span>
					<div>
						<InputCounter
							counter={coffeeData.quantity}
							incrementCounter={incrementCounter}
							decrementCounter={decrementCounter}
						/>
						<RemoveButton type="button" onClick={() => removeItem(coffeeData.id)}>
							<Trash size={16} />
						</RemoveButton>
					</div>
				</div>
			</ShoppingDetails>
			<span>R$ {((coffeeData.price * coffeeData.quantity) / 100).toFixed(2)}</span>
		</ShoppingItemContainer>
	)
}