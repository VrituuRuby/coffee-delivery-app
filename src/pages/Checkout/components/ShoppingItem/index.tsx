import { Trash } from "phosphor-react"
import { useState } from "react"
import { InputCounter } from "../../../../components/InputCounter"
import { ICart } from "../../../../contexts/ShoppingCart"
import { RemoveButton, ShoppingDetails, ShoppingItemContainer } from "./styles"

interface ShoppingItemProps {
  coffeeData: ICart
}

export function ShoppingItem({coffeeData}: ShoppingItemProps){
	const [counter, setCounter] = useState(1)
	return(
		<ShoppingItemContainer>
			<img src={coffeeData.image} alt={coffeeData.name} />
			<ShoppingDetails>
				<span>{coffeeData.name}</span>
				<div>
					<InputCounter counter={counter} setCounter={setCounter}/>
					<RemoveButton type="button">
						<Trash size={16}/>
            REMOVER
					</RemoveButton>
				</div>
			</ShoppingDetails>
			<span>R$ <b>{(coffeeData.price/100).toFixed(2)}</b></span>
		</ShoppingItemContainer>
	)
}