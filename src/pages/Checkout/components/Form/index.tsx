import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react"
import { useContext } from "react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { ShoppingCartContext } from "../../../../contexts/ShoppingCart"
import { CheckoutCard, CheckoutTitle } from "../../styles"
import { FormContainer, FormDescription, InputsContainer, PaymentOptions } from "./styles"

export function Form(){
	const { register, handleSubmit , formState: {errors}} = useForm()
	const { cart, wipeShoppingCart} = useContext(ShoppingCartContext)
	const navigate = useNavigate()
	
	function onSubmit(data: any){
		const order = {...data, orders: cart, id: Date.now()}	
		navigate("/success", {state: order})
		wipeShoppingCart()
	}
	
	return(
		<FormContainer id="order-details" onSubmit={handleSubmit(onSubmit)}>
			<CheckoutTitle>Complete seu pedido</CheckoutTitle>
			<CheckoutCard>
				<FormDescription color="yellow">
					<MapPinLine weight="fill" size={24}/>
								
					<div>
						<h3>Endereço da entrega</h3>
						<p>Informe o endereço onde deseja receber o pedido</p>
					</div>
				</FormDescription>

				<InputsContainer>
					<input type="text" placeholder="CEP" {...register("cep")}/>
					<input type="text" placeholder="Rua" {...register("street-address", {required: true})}/>
					<div>
						<input type="number" placeholder="Número" {...register("number", {required: true})}/>
						<input type="text" placeholder="Complemento" {...register("complement")}/>
					</div>
					<div>
						<input type="text" placeholder="Bairro" {...register("district", {})}/>
						<input type="text" placeholder="Cidade" {...register("city", {required: true})}/>
						<input type="text" placeholder="UF" {...register("uf", {required: true, max: 2})}/>
					</div>
				</InputsContainer>
			</CheckoutCard>
			<CheckoutCard>
				<FormDescription color="purple">
					<CurrencyDollar size={24} />
					<div>
						<h3>Pagamento</h3>
						<p>O pagamento é feito na entrega. Escolha a forma que desja pagar</p>
					</div>
				</FormDescription>
				<PaymentOptions>
					<input id='radioCredit' type="radio" value="credit-card" {...register("payment-method", {required: true})}/>
					<label htmlFor="radioCredit">
						<CreditCard size={22} />
							CARTÃO DE CRÉDITO
					</label>
					<input id='radioDebit' type="radio" value="debit-card" {...register("payment-method")}/>
					<label htmlFor="radioDebit">
						<Bank size={22}/>
							CARTÃO DE DÉBITO
					</label>
					<input id='radioCash' type="radio" value="cash" {...register("payment-method")}/>
					<label htmlFor="radioCash">
						<Money size={22} />
							DINHEIRO
					</label>	
					
				</PaymentOptions>
				{errors?.["payment-method"] ? <span className="error">Informar método de pagamento...</span> : ""}
			</CheckoutCard>
		</FormContainer>
	)
}