import { Trash } from "phosphor-react"
import { InputCounter } from "../../../../components/InputCounter"
import { CheckoutCard, CheckoutTitle } from "../../styles"
import { RemoveButton, ShoppingCartContainer, ShoppingDetails, ShoppingItem, ShoppingList, ShoppingTotal, SubmitButton, TotalItem } from "./styles"

export function ShoppingCart(){
	return(
		<ShoppingCartContainer>
			<CheckoutTitle>Cafés selecionados</CheckoutTitle>
			<CheckoutCard>
				<ShoppingList>
					<ShoppingItem>
						<img src='./assets/coffees/Expresso.png' alt='Americano' />
						<ShoppingDetails>
							<span>Expresso Tradicional</span>
							<div>
								<InputCounter />
								<RemoveButton type="button">
									<Trash size={16}/>
									REMOVER
								</RemoveButton>
							</div>
						</ShoppingDetails>
						<span>R$ <b>9,90</b></span>
					</ShoppingItem>
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