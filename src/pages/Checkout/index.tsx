import { CurrencyDollar, MapPin, Money } from "phosphor-react"
import { AddressForm, CheckoutContainer, FormContainer, FormDescription, InputsContainer } from "./styles"

export function Checkout() {
	return(
		<CheckoutContainer>
			<FormContainer>
				<h2>Complete seu pedido</h2>
				<form action="">
					<AddressForm>
						<FormDescription>
							<MapPin weight="fill" size={22}/>
								
							<div>
								<h3>Endereço da entrega</h3>
								<p>Informe o endereço onde deseja receber o pedido</p>
							</div>
						</FormDescription>

						<InputsContainer>
							<input type="text" placeholder="CEP"/>
							<input type="text" placeholder="Rua"/>
							<div>
								<input type="number" placeholder="Número"/>
								<input type="text" placeholder="Complemento"/>
							</div>
							<div>
								<input type="text" placeholder="Bairro"/>
								<input type="text" placeholder="Cidade"/>
								<input type="text" placeholder="UF"/>
							</div>
						</InputsContainer>
					</AddressForm>
					<div>
						<div>
							<CurrencyDollar size={22} />
							<h3>Pagamento</h3>
							<p>O pagamento é feito na entrega. Escolha a forma que desja pagar</p>
						</div>
					</div>
				</form>
			</FormContainer>
		</CheckoutContainer>
	)
}