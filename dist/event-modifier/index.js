export const once = (fn) => {
    return (event) => {
        if (fn)
            fn.call(this, event);
        fn = null;
    };
};
export const preventDefault = (fn) => {
    return (event) => {
        event.preventDefault();
        fn.call(this, event);
    };
};
export const stopPropagation = (fn) => {
    return (event) => {
        event.stopPropagation();
        fn.call(this, event);
    };
};
