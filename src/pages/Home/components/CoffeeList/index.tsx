import { CoffeListContainer } from "./styles"
import ExpressoImage from "../../../../assets/coffees/Expresso.png"
import { ShoppingCart } from "phosphor-react"

export function CoffeList(){
	return(
		<CoffeListContainer>
			<h3>Nossos cafés</h3>
			<ul>
				<li>
					<div>
						<img src={ExpressoImage} alt="Expresso Tradicional" />
						<div>
							<span>Tradicional</span>
						</div>
						<h4>Expresso Tradicional</h4>
						<p>O tradicional café feito com água quente e grãos moídos</p>
					</div>
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
				</li>
			</ul>
		</CoffeListContainer>
	)
}