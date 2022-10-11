
import { ActionsContainer, HeaderContainer } from "./styles"
import {MapPin, ShoppingCart} from "phosphor-react"
import logo from "/assets/Logo.svg"
import { NavLink } from "react-router-dom"


export function Header(){
	return(
		<HeaderContainer>
			<nav>
				<NavLink to="/">
					<h1>
						<img src={logo} alt="Coffe Delivery" />
					</h1>
				</NavLink>
				<ActionsContainer>
					<a href="#">
						<MapPin size={22} weight="fill" />
						Curitiba - PR
					</a>
					<NavLink to='/checkout'>
						<ShoppingCart size={22} weight="fill"/>
					</NavLink>
				</ActionsContainer>
			</nav>
		</HeaderContainer>
	)
}