export { default as Dropdown } from './Dropdown.svelte'

export const clickOutsideOld = (node) => {
    const handleClick = (event) => {
        if (node && !node.contains(event.target) && !event.defaultPrevented) {
            console.log(event.target.classList.contains('ignore-click-outside'))
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

export const clickOutside = (node: HTMLElement, handler: (event: any) => void ): { destroy: () => void } => {
    const onClick = (event: any) => {
        if ( 
            node
            && !node.contains(event.target as HTMLElement)
            && !event.defaultPrevented 
        ) {
            handler(event)
        }
    }
    document.addEventListener('click', onClick, true)

    return {
        destroy() {
            document.removeEventListener('click', onClick, true)
        },
    }
}