import { useContext } from "react"
import { ShoppingCartContext } from "../../../../contexts/ShoppingCart"
import { CheckoutCard, CheckoutTitle } from "../../styles"
import { ShoppingItem } from "../ShoppingItem"
import { ShoppingCartContainer, ShoppingList, ShoppingTotal, Spacer, SubmitButton, TotalItem, EmptyCartWarning} from "./styles"

export function ShoppingCart(){
	const {cart} = useContext(ShoppingCartContext)
	
	const totalItems = (cart.reduce((total, item) => total + item.price * item.quantity, 0)/100).toFixed(2)
	const shippingFee = (340/100).toFixed(2)
	const totalCheckout = (Number(totalItems) + Number(shippingFee)).toFixed(2)

	const isDisabled = cart.length > 0 ? false : true

	return(
		<ShoppingCartContainer>
			<CheckoutTitle>Cafés selecionados</CheckoutTitle>
			<CheckoutCard>
				<Spacer />
				<ShoppingList>
					{cart.length > 0 ? cart.map(item => (
						<ShoppingItem key={item.id} coffeeData={item}/>
					)): <EmptyCartWarning>Carrinho vazio</EmptyCartWarning>}
				</ShoppingList>
				<Spacer />
				<ShoppingTotal>
					<TotalItem>
						<p>Total de itens</p>
						<p>R$ {totalItems}</p>
					</TotalItem>
					<TotalItem>
						<p>Entrega</p>
						<p>R$ {shippingFee}</p>
					</TotalItem>
					<TotalItem>
						<p>Total</p>
						<p>R$ {totalCheckout}</p>
					</TotalItem>
				</ShoppingTotal>
				<SubmitButton type="submit" form="order-details" disabled={isDisabled}>
					CONFIRMAR PEDIDO
				</SubmitButton>
			</CheckoutCard>
		</ShoppingCartContainer>
	)
}