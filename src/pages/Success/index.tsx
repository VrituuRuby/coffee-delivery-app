import { CurrencyDollar, MapPin, Timer } from "phosphor-react"
import { useLocation } from "react-router-dom"
import { Illustration, OrderConfirmed, OrderInfo, SuccessContainer, SuccessTitle, SuccesSubtitle } from "./styles"

interface Location{
	state: {
		cep: string,
		city: string,
		number: string,
		district: string,
		uf: string,
		"street-address": string,
		"payment-method": "debit-card" | "credit-card" | "cash",
	}
}

export function Success(){
	const location: Location = useLocation()
	
	const getPaymentString = (): string => {
		switch(location.state["payment-method"]){
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

	return(
		<SuccessContainer>
			<OrderConfirmed>
				<SuccessTitle>Uhu! Pedido confirmado</SuccessTitle>
				<SuccesSubtitle>Agora é só aguardar que logo o café chegará até você</SuccesSubtitle>
				<OrderInfo>
					<li>
						<i className="purple">
							<MapPin weight="fill" size={16}/>
						</i>
						<p>Entrega em <b>{`${location.state["street-address"]}, ${location.state.number}`}</b>
							<br/>{`${location.state.district}, ${location.state.uf}`}
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
}