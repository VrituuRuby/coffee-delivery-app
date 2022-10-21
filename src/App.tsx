import { ThemeProvider } from "styled-components"
import {BrowserRouter} from "react-router-dom"
import { Router } from "./Router"
import { GlobalStyle } from "./styles/global"
import { defaultTheme } from "./styles/themes/default"
import { ShoppingCartProvider } from "./contexts/ShoppingCart"
import { ToastContainer } from "react-toastify"

import "react-toastify/dist/ReactToastify.css"

export function App() {

	return (
		<ThemeProvider theme={defaultTheme}>
			<ShoppingCartProvider>
				<ToastContainer />
				<BrowserRouter>
					<Router />
					<GlobalStyle />
				</BrowserRouter>
			</ShoppingCartProvider>
		</ThemeProvider>
	)
}

