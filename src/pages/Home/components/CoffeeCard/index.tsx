import { ShoppingCart } from "phosphor-react"
import ExpressoImage from "../../../../assets/coffees/Expresso.png"

import { ActionsContainer, CardFooter, CoffeeCardContainer, CoffeeDescription, CoffeeName, ContentContainer, Tags } from "./styles"

export function CoffeeCard(){
	return (
		<CoffeeCardContainer>
			<ContentContainer>
				<img src={ExpressoImage} alt="Expresso Tradicional" />
				<Tags>
					<span>Tradicional</span>
					<span>Com Leite</span>
				</Tags>
				<CoffeeName>Expresso Tradicional</CoffeeName>
				<CoffeeDescription>O tradicional café feito com água quente e grãos moídos</CoffeeDescription>
			</ContentContainer>
			<CardFooter>
				<span>
							R$ <b>9,90</b>
				</span>
				<ActionsContainer>
					<input type="number" value={1} />
					<button>
						<ShoppingCart weight="fill" size={22} />
					</button>
				</ActionsContainer>
			</CardFooter>
		</CoffeeCardContainer>
	)
}