import { ThemeProvider } from "styled-components"
import {BrowserRouter} from "react-router-dom"
import { Router } from "./Router"
import { GlobalStyle } from "./styles/global"
import { defaultTheme } from "./styles/themes/default"
import { ShoppingCartProvider } from "./contexts/ShoppingCart"

export function App() {

	return (
		<ThemeProvider theme={defaultTheme}>
			<ShoppingCartProvider>
				<BrowserRouter>
					<Router />
					<GlobalStyle />
				</BrowserRouter>
			</ShoppingCartProvider>
		</ThemeProvider>
	)
}

