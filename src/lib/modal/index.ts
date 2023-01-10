import { writable } from 'svelte/store'

export { default as Modal } from './Modal.svelte'
export { default as ModalContainer } from './ModalContainer.svelte'

export const isActive = writable(false)

const createModal = () => {
	const { subscribe, set } = writable({ component: null, props: null })
	return {
        subscribe, set,
        open: (component, props = null) => { 
			isActive.set(true)
			modal.set({
				component: component,
				props: props,
			}) 
		},
		close: () => {
			isActive.set(false)
			modal.set({
				component: false,
				props: null,
			}) 
		},
	}
}
export const modal = createModal()


export const fadeScale = (node, { delay = 0, duration = 200, easing = x => x, baseScale = 0 } ) => {
	const o = +getComputedStyle(node).opacity
	const m = getComputedStyle(node).transform.match(/scale\(([0-9.]+)\)/) 
	const s = m ? m[1] : 1 as any
	const is = 1 - baseScale
  
	return {
		delay,
		duration,
		css: t => {
			const eased = easing(t)
			return `opacity: ${eased * o}; transform: scale(${(eased * s * is) + baseScale})`
		}
	}
}