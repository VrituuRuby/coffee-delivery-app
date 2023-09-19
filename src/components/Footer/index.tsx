import React from "react"
import { FooterContainer } from "./styles"

export const Footer: React.FC = () => {
	return (
		<FooterContainer>
			<p>
                Site desenvolvido por fins educacionais e aprendizado como parte do curso <a href="https://www.rocketseat.com.br/ignite" target="_blank" rel="noreferrer">
                    Ignite da Rocketseat 🚀.
				</a>
			</p>
			<p>
                Desenvolvido com React, por <a href="https://victorvelozo.vercel.app" target="_blank" rel="noreferrer">Victor Velozo</a>
			</p>
			<a href="https://github.com/VrituuRuby/coffee-delivery-app">Repositório Github</a>
		</FooterContainer>
	)
}