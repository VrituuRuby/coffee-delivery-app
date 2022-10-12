import { Minus, Plus } from "phosphor-react"
import { useState } from "react"
import { InputCounterContainer } from "./styles"

export function InputCounter(){
	const [counter, setCounter] = useState(1)

	function incrementCounter(step: number){
		setCounter(state => state + step)
	}
	function decrementCounter(step: number){
		if (counter - step <= 0) return
		setCounter(state => state - step)
	}

	return(
		<InputCounterContainer>
			<button type="button" onClick={() => decrementCounter(1)}><Minus weight="bold" /></button>
			<input type="number" min={1} value={counter}/>
			<button type="button" onClick={() => incrementCounter(1)}><Plus weight="bold" /></button>
		</InputCounterContainer>
	)
}