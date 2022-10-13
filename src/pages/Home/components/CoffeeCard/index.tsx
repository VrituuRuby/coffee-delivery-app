import { ShoppingCart } from "phosphor-react"
import { useContext, useState } from "react"
import { InputCounter } from "../../../../components/InputCounter"
import { ShoppingCartContext } from "../../../../contexts/ShoppingCart"
import { Coffee } from "../../../../data/coffees"

import { ActionsContainer, CardFooter, CoffeeCardContainer, CoffeeDescription, CoffeeName, ContentContainer, Tags } from "./styles"

interface CoffeeCardProps {
	coffee: Coffee
}

export function CoffeeCard({ coffee }: CoffeeCardProps){
	const coffeeImage = coffee.image
	const [counter, setCounter] = useState(1)
	const {addItem} = useContext(ShoppingCartContext)

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
					<InputCounter counter={counter} setCounter={setCounter}/>
					<button type="button" onClick={() => addItem(coffee.id)}>
						<ShoppingCart weight="fill" size={22} />
					</button>
				</ActionsContainer>
			</CardFooter>
		</CoffeeCardContainer>
	)
}