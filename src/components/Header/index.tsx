import logo from "../../assets/Logo.svg"
import {MapPin, ShoppingCart} from "phosphor-react"
import { ActionsContainer, HeaderContainer } from "./styles"

export function Header(){
	return(
		<HeaderContainer>
			<nav>
				<h1>
					<img src={logo} alt="Coffe Delivery" />
				</h1>
				<ActionsContainer>
					<a href="#">
						<MapPin size={22} weight="fill" />
						Curitiba - PR
					</a>
					<a>
						<ShoppingCart size={22} weight="fill"/>
					</a>
				</ActionsContainer>
			</nav>
		</HeaderContainer>
	)
}