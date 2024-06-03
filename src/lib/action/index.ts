
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