import { CoffeListContainer } from "./styles"
import { CoffeeCard } from "../CoffeeCard"

import { COFFEE_LIST } from "../../../../data/coffees"

export function CoffeList(){
	return(
		<CoffeListContainer>
			<h3>Nossos cafés</h3>
			<ul>
				{COFFEE_LIST.map(coffee => (
					<CoffeeCard key={coffee.name} coffee={coffee} />
				))}
			</ul>
		</CoffeListContainer>
	)
}