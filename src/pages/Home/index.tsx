import { CoffeeList } from "./components/CoffeeList"
import { Hero } from "./components/Hero"
import { HomePage } from "./styles"

export function Home(){
	return(
		<HomePage>
			<Hero />
			<CoffeeList />
		</HomePage>
	)
}