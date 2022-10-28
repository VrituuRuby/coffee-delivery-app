import { useRef } from "react"

export const useDebounce = (func: () => void, delay: number) => {
	const timeoutRef = useRef<NodeJS.Timeout | undefined>(undefined)

	const debouncedFunc = (...args: any[]) => {
		clearTimeout(timeoutRef.current)

		timeoutRef.current = setTimeout(() => {
			func(...args)
		}, delay)
    
	}

	return debouncedFunc
}