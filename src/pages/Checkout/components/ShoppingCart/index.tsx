import { useContext } from "react"
import { ShoppingCartContext } from "../../../../contexts/ShoppingCart"
import { CheckoutCard, CheckoutTitle } from "../../styles"
import { ShoppingItem } from "../ShoppingItem"
import { ShoppingCartContainer, ShoppingList, ShoppingTotal, SubmitButton, TotalItem } from "./styles"

export function ShoppingCart(){
	const {cart} = useContext(ShoppingCartContext)

	return(
		<ShoppingCartContainer>
			<CheckoutTitle>Cafés selecionados</CheckoutTitle>
			<CheckoutCard>
				<ShoppingList>
					{cart.map(item => (
						<ShoppingItem key={item.id} coffeeData={item}/>
					))}
				</ShoppingList>
				<ShoppingTotal>
					<TotalItem>
						<p>Total de itens</p>
						<p>R$ 29,90</p>
					</TotalItem>
					<TotalItem>
						<p>Entrega</p>
						<p>R$ 3,40</p>
					</TotalItem>
					<TotalItem>
						<p>Total</p>
						<p>R$ 33,30</p>
					</TotalItem>
				</ShoppingTotal>
				<SubmitButton>
					CONFIRMAR PEDIDO
				</SubmitButton>
			</CheckoutCard>
		</ShoppingCartContainer>
	)
}