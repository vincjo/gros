import { createPopper, } from '@popperjs/core';
import { onDestroy } from 'svelte';
export { default as Tooltip } from './Tooltip.svelte';
export function createPopperActions(initOptions) {
    let popperInstance = null;
    let referenceNode;
    let contentNode;
    let options = initOptions;
    const initPopper = () => {
        if (referenceNode !== undefined && contentNode !== undefined) {
            popperInstance = createPopper(referenceNode, contentNode, options);
        }
    };
    const deinitPopper = () => {
        if (popperInstance !== null) {
            popperInstance.destroy();
            popperInstance = null;
        }
    };
    const referenceAction = (node) => {
        if ('subscribe' in node) {
            setupVirtualElementObserver(node);
            return {};
        }
        else {
            referenceNode = node;
            initPopper();
            return {
                destroy() {
                    deinitPopper();
                },
            };
        }
    };
    const setupVirtualElementObserver = (node) => {
        const unsubscribe = node.subscribe(($node) => {
            if (referenceNode === undefined) {
                referenceNode = $node;
                initPopper();
            }
            else {
                // Preserve the reference to the virtual element.
                Object.assign(referenceNode, $node);
                popperInstance?.update();
            }
        });
        onDestroy(unsubscribe);
    };
    const contentAction = (node, contentOptions) => {
        contentNode = node;
        options = { ...initOptions, ...contentOptions };
        initPopper();
        return {
            update(newContentOptions) {
                options = { ...initOptions, ...newContentOptions };
                popperInstance?.setOptions(options);
            },
            destroy() {
                deinitPopper();
            },
        };
    };
    return [referenceAction, contentAction, () => popperInstance];
}
