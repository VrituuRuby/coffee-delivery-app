import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react"
import { CheckoutCard, CheckoutTitle } from "../../styles"
import { FormContainer, FormDescription, InputsContainer, PaymentOptions } from "./styles"

export function Form(){
	return(
		<FormContainer>
			<CheckoutTitle>Complete seu pedido</CheckoutTitle>
			<CheckoutCard>
				<FormDescription>
					<MapPinLine weight="fill" size={24}/>
								
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
			</CheckoutCard>
			<CheckoutCard>
				<FormDescription className='payment-option'>
					<CurrencyDollar size={24} />
					<div>
						<h3>Pagamento</h3>
						<p>O pagamento é feito na entrega. Escolha a forma que desja pagar</p>
					</div>
				</FormDescription>
				<PaymentOptions>
					<input name='payment-method' id='radioCredit' type="radio" value="credit-card"/>
					<label htmlFor="radioCredit">
						<CreditCard size={22} />
							CARTÃO DE CRÉDITO
					</label>
					<input name='payment-method' id='radioDebit' type="radio" value="credit-debit"/>
					<label htmlFor="radioDebit">
						<Bank size={22}/>
							CARTÃO DE DÉBITO
					</label>
					<input name='payment-method' id='radioCash' type="radio" value="cash"/>
					<label htmlFor="radioCash">
						<Money size={22} />
							DINHEIRO
					</label>	
					
				</PaymentOptions>
			</CheckoutCard>
		</FormContainer>
	)
}