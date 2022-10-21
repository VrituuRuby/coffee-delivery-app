import { Form } from "./components/Form"
import { ShoppingCart } from "./components/ShoppingCart"
import { CheckoutContainer } from "./styles"

export function Checkout() {
	return(
		<CheckoutContainer>
			<Form />
			<ShoppingCart />
		</CheckoutContainer>
	)
}