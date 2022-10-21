
import { ActionsContainer, HeaderContainer, NotificationBadge } from "./styles"
import {MapPin, ShoppingCart} from "phosphor-react"
import logo from "/assets/Logo.svg"
import { NavLink } from "react-router-dom"
import { useContext } from "react"
import { ShoppingCartContext } from "../../contexts/ShoppingCart"


export function Header(){
	const {cart} = useContext(ShoppingCartContext)

	const ItemsInCart = cart.reduce((acc, item) => acc + 1, 0)

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
					<NavLink to='/checkout' className="cart-link">
						<ShoppingCart size={22} weight="fill"/>
						{ ItemsInCart > 0 ? 
							<NotificationBadge>
								{ItemsInCart}
							</NotificationBadge>
							: ""}
					</NavLink>
				</ActionsContainer>
			</nav>
		</HeaderContainer>
	)
}