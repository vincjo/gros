export const clickOutside = (node, handler) => {
    const onClick = (event) => {
        if (node
            && !node.contains(event.target)
            && !event.defaultPrevented) {
            handler(event);
        }
    };
    document.addEventListener('click', onClick, true);
    return {
        destroy() {
            document.removeEventListener('click', onClick, true);
        },
    };
};
