import { ShoppingCart } from "phosphor-react"
import ExpressoImage from "../../../../assets/coffees/Expresso.png"

import { CoffeeCardContainer, CoffeeDescription, CoffeeName, ContentContainer, Tags } from "./styles"

export function CoffeeCard(){
	return (
		<CoffeeCardContainer>
			<ContentContainer>
				<img src={ExpressoImage} alt="Expresso Tradicional" />
				<Tags>
					<span>Tradicional</span>
				</Tags>
				<CoffeeName>Expresso Tradicional</CoffeeName>
				<CoffeeDescription>O tradicional café feito com água quente e grãos moídos</CoffeeDescription>
			</ContentContainer>
			<footer>
				<span>
							R$ <b>9,90</b>
				</span>
				<div>
					<input type="number" />
					<button>
						<ShoppingCart weight="fill" />
					</button>
				</div>
			</footer>
		</CoffeeCardContainer>
	)
}