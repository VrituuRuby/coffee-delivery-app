import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react"
import coffeeImage from "/assets/Imagem.png"
import { GridContainer, HeroContainer } from "./styles"

import BgImage from "/assets/Background.png"

export function Hero(){
	return(
		<HeroContainer>
			<img className='blur' src={BgImage} alt="" />
			<div>
				<h1>
					Encontre o café perfeito para qualquer hora do dia
				</h1>
				<h2>
					Com coffee delivery você recebe seu café aonde estiver, a qualquer hora
				</h2>
				<GridContainer>
					<li>
						<i className="dark-yellow">
							<ShoppingCart size={20} weight="fill" />
						</i>
						Compra simples e segura
					</li>
					<li>
						<i className="base">
							<Package size={20} weight="fill" />
						</i>
						Embalagem mantem o café intacto
					</li>
					<li>
						<i className="yellow">
							<Timer size={20} weight="fill" />
						</i>
						Entrega rápida e rastreada
					</li>
					<li>
						<i className='purple'>
							<Coffee size={20} weight="fill" />
						</i>
						O café chega fresquinho até você
					</li>
				</GridContainer>
			</div>
			<img id="promo" src={coffeeImage} alt='A coffee delivery promotional image' />
		</HeroContainer>
	)
}