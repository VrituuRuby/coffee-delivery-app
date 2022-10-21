import { ShoppingCart } from "phosphor-react"
import { useContext, useState } from "react"
import { InputCounter } from "../../../../components/InputCounter"
import { ShoppingCartContext } from "../../../../contexts/ShoppingCart"
import { Coffee } from "../../../../data/coffees"
import { toast} from "react-toastify"

import { ActionsContainer, CardFooter, CoffeeCardContainer, CoffeeDescription, CoffeeName, ContentContainer, Tags } from "./styles"

interface CoffeeCardProps {
	coffee: Coffee
}

export function CoffeeCard({ coffee }: CoffeeCardProps){
	const coffeeImage = coffee.image
	const [quantity, setQuantity] = useState(1)
	const { addItem } = useContext(ShoppingCartContext)

	function incrementCounter(){
		setQuantity(quantity + 1)
	}

	function decrementCounter(){
		if (quantity - 1 <= 0) return
		setQuantity(quantity - 1)
	}

	function handleAddItem(){
		toast.success(`Adicionado ao carrinho: ${quantity} ${coffee.name}`, {
			position: "top-center"
		})
		addItem(coffee.id, quantity)
	}

	return (
		<CoffeeCardContainer>
			<ContentContainer>
				<img src={coffeeImage} alt={coffee.name} />
				<Tags>
					{coffee.tags.map(tag => (
						<span key={tag}>{tag}</span>
					))}
				</Tags>
				<CoffeeName>{coffee.name}</CoffeeName>
				<CoffeeDescription>{coffee.description}</CoffeeDescription>
			</ContentContainer>
			<CardFooter>
				<span>
							R$ <b>{(coffee.price/100).toFixed(2)}</b>
				</span>
				<ActionsContainer>
					<InputCounter 
						counter={quantity}
						incrementCounter={incrementCounter}
						decrementCounter={decrementCounter}
					/>
					<button type="button" onClick={() => handleAddItem()}>
						<ShoppingCart weight="fill" size={22} />
					</button>
				</ActionsContainer>
			</CardFooter>
		</CoffeeCardContainer>
	)
}