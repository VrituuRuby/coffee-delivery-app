import { Minus, Plus } from "phosphor-react"
import { InputCounterContainer } from "./styles"

interface InputCounterProps {
	incrementCounter: () => void,
	decrementCounter: () => void,
	counter: number
}

export function InputCounter({incrementCounter, decrementCounter, counter}: InputCounterProps){
	return(
		<InputCounterContainer>
			<button type="button" onClick={() => decrementCounter()}><Minus weight="bold" /></button>
			<input type="number" min={1} value={counter} readOnly/>
			<button type="button" onClick={() => incrementCounter()}><Plus weight="bold" /></button>
		</InputCounterContainer>
	)
}