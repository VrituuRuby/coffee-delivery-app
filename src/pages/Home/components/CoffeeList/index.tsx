import { CoffeeListContainer } from "./styles"
import { CoffeeCard } from "../CoffeeCard"

import { COFFEE_LIST } from "../../../../data/coffees"

export function CoffeeList(){
	return(
		<CoffeeListContainer>
			<h3>Nossos cafés</h3>
			<ul>
				{COFFEE_LIST.map(coffee => (
					<CoffeeCard key={coffee.name} coffee={coffee} />
				))}
			</ul>
		</CoffeeListContainer>
	)
}