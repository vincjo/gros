
type Fn = (event: Event, ...args: Array<unknown>) => void

export const once = (fn: Fn) => {
    return (event: Event) => {
        if (fn) fn.call(this, event)
        fn = null
    }
}

export const preventDefault = (fn: Fn) => {
    return (event: Event) => {
        event.preventDefault()
        fn.call(this, event)
    }
}

export const stopPropagation = (fn: Fn) => {
    return (event: Event) => {
        event.stopPropagation()
        fn.call(this, event)
    }
}


export const self = (fn: Fn) => {
	return function (...args) {
		const event: Event = (args[0])
		if (event.target === this) {
			fn?.apply(this, args)
		}
	}
}
