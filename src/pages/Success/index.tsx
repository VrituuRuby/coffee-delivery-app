import { CurrencyDollar, MapPin, Timer } from "phosphor-react"
import { Illustration, OrderConfirmed, OrderInfo, SuccessContainer, SuccessTitle, SuccesSubtitle } from "./styles"

export function Success(){
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
						<p>Entrega em <b>Antonio Escorsin, 2126</b> <br /> São Braz - Curitiba, PR</p>
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
						<p>Pagar no local  <br /><b>Cartão de crédito</b></p>
					</li>
				</OrderInfo>
			</OrderConfirmed>
			<Illustration src='./assets/Illustration.svg' alt='' />
		</SuccessContainer>
	)
}