import { CurrencyDollar, MapPin, Timer } from "phosphor-react"
import { useLocation } from "react-router-dom"
import { Illustration, OrderConfirmed, OrderInfo, SuccessContainer, SuccessTitle, SuccessSubtitle } from "./styles"

interface Location{
	state: {
		cep: string,
		cidade: string,
		numero: string,
		bairro: string,
		uf: string,
		rua: string,
		paymentMethod: "debit-card" | "credit-card" | "cash",
	}
}

export function Success(){
	const { state }: Location = useLocation()
	
	const getPaymentString = (): string => {
		switch(state.paymentMethod){
		case "debit-card":
			return "Cartão de Débito"
		case "credit-card":
			return "Cartão de Crédito"
		case "cash":
			return "Dinheiro"
		default:
			return "Erro"
		}
	}

	return state ?(
		<SuccessContainer>
			<OrderConfirmed>
				<SuccessTitle>Uhu! Pedido confirmado</SuccessTitle>
				<SuccessSubtitle>Agora é só aguardar que logo o café chegará até você</SuccessSubtitle>
				<OrderInfo>
					<li>
						<i className="purple">
							<MapPin weight="fill" size={16}/>
						</i>
						<p>Entrega em <b>{`${state.rua}, ${state.numero}`}</b>
							<br/>{`${state.bairro}, ${state.uf}`}
						</p>
					</li>
					<li>
						<i className="yellow">
							<Timer weight="fill" />
						</i>
						<p>Previsão de entrega <br/><b>20 - 30 minutos</b></p>
					</li>
					<li>
						<i className='dark-yellow'>
							<CurrencyDollar weight="bold"/>
						</i>
						<p>Pagar no local  <br />
							<b>
								{getPaymentString()}
							</b>
						</p>
					</li>
				</OrderInfo>
			</OrderConfirmed>
			<Illustration src='./assets/Illustration.svg' alt='' />
		</SuccessContainer>
	)
		: <p>Loading ...</p>
}