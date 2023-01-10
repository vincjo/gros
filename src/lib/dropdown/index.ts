export { default as Dropdown } from './Dropdown.svelte'
import { slide } from 'svelte/transition'

export const clickOutside = (node) => {
	const handleClick = (event) => {
		if (node && !node.contains(event.target) && !event.defaultPrevented) {
			node.dispatchEvent(
				new CustomEvent('clickOutside', { detail: event.target })
			)
		}
	}
	document.addEventListener('click', handleClick, true)
	return {
		destroy() {
			document.removeEventListener('click', handleClick, true)
		}
	}
}

export const fadeSlide = (node, options) => {
	const slideTrans = slide(node, options)
	return {
		duration: options.duration,
		css: (t, u) => `
			${slideTrans.css(t, u)}
			opacity: ${t};
		`
	};
}