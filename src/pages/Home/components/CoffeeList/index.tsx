import { CoffeListContainer } from "./styles"

import { ShoppingCart } from "phosphor-react"
import { CoffeeCard } from "../CoffeeCard"

export function CoffeList(){
	return(
		<CoffeListContainer>
			<h3>Nossos cafés</h3>
			<ul>
				<CoffeeCard />
				<CoffeeCard />
				<CoffeeCard />
				<CoffeeCard />
				<CoffeeCard />
				<CoffeeCard />
				<CoffeeCard />
				<CoffeeCard />
				<CoffeeCard />
				<CoffeeCard />
				<CoffeeCard />
				<CoffeeCard />
				<CoffeeCard />
			</ul>
		</CoffeListContainer>
	)
}