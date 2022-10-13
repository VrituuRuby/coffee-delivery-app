import { Minus, Plus } from "phosphor-react"
import React, { useState } from "react"
import { InputCounterContainer } from "./styles"

interface InputCounterProps {
	counter: number,
	setCounter: (n: number) => void ,
}

export function InputCounter({setCounter, counter}: InputCounterProps){
	function incrementCounter(step: number){
		setCounter(counter + step)
	}
	function decrementCounter(step: number){
		if (counter - step <= 0) return
		setCounter(counter - step)
	}

	return(
		<InputCounterContainer>
			<button type="button" onClick={() => decrementCounter(1)}><Minus weight="bold" /></button>
			<input type="number" min={1} value={counter} readOnly/>
			<button type="button" onClick={() => incrementCounter(1)}><Plus weight="bold" /></button>
		</InputCounterContainer>
	)
}