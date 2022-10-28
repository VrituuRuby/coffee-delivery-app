import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react"
import { useContext, useState } from "react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { ShoppingCartContext } from "../../../../contexts/ShoppingCart"
import { useDebounce } from "../../../../hooks/useDebounce"
import { CheckoutCard, CheckoutTitle } from "../../styles"
import { FormContainer, FormDescription, InputsContainer, PaymentOptions } from "./styles"

interface IFormsData{
	cep: string,
	rua: string,
	numero: string,
	complemento: string,
	bairro: string,
	cidade: string,
	uf: string,
	paymentMethod: string
}

interface LocationData{
	bairro: string,
	cep: string,
	localidade: string,
	logradouro: string,
	uf: string
}

export function Form(){
	const { register, handleSubmit , formState: {errors}, setValue, setFocus} = useForm<IFormsData>()
	const { cart, wipeShoppingCart} = useContext(ShoppingCartContext)
	const navigate = useNavigate()

	async function getLocationData(cep: string){
		const dataJSON : LocationData = await (await fetch(`https://viacep.com.br/ws/${cep}/json`)).json()
		setValue("rua", dataJSON.logradouro)
		setValue("bairro", dataJSON.bairro)
		setValue("cidade", dataJSON.localidade)
		setValue("uf", dataJSON.uf)
		setFocus("numero")
	}

	function onSubmit(data: IFormsData){
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
					<input type="text" 
						placeholder="CEP" 
						{...register("cep", {
							onBlur: e => getLocationData(e.target.value),
						})} 
					/>
					<input type="text" placeholder="Rua" {...register("rua", {required: true})}/>
					<div>
						<input type="number" placeholder="Número" {...register("numero", {required: true})}/>
						<input type="text" placeholder="Complemento" {...register("complemento")}/>
					</div>
					<div>
						<input type="text" placeholder="Bairro" {...register("bairro", {})}/>
						<input type="text" placeholder="Cidade" {...register("cidade", {required: true})}/>
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
					<input id='radioCredit' type="radio" value="credit-card" {...register("paymentMethod", {required: true})}/>
					<label htmlFor="radioCredit">
						<CreditCard size={22} />
							CARTÃO DE CRÉDITO
					</label>
					<input id='radioDebit' type="radio" value="debit-card" {...register("paymentMethod")}/>
					<label htmlFor="radioDebit">
						<Bank size={22}/>
							CARTÃO DE DÉBITO
					</label>
					<input id='radioCash' type="radio" value="cash" {...register("paymentMethod")}/>
					<label htmlFor="radioCash">
						<Money size={22} />
							DINHEIRO
					</label>	
					
				</PaymentOptions>
				{errors?.paymentMethod ? <span className="error">Informar método de pagamento...</span> : ""}
			</CheckoutCard>
		</FormContainer>
	)
}