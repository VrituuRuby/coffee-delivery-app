import { Header } from "../components/Header"
import { Outlet } from "react-router-dom"
import { DefaultLayoutContainer } from "./defaultStyles"
import { Footer } from "../components/Footer"

export function DefaultLayout(){
	return(
		<DefaultLayoutContainer>
			<Header/>
			<Outlet/>
			<Footer/>
		</DefaultLayoutContainer>
	)
}