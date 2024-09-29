import type { TransitionConfig } from 'svelte/transition';
export declare const fadescale: (node: HTMLElement, { delay, duration, easing, baseScale }: {
    delay?: number;
    duration?: number;
    easing?: (x: number) => number;
    baseScale?: number;
}) => {
    delay: number;
    duration: number;
    css: (t: number) => string;
};
export declare const flipboard: (node: Element, params: TransitionConfig) => {
    tick: (t: number) => void;
    delay?: number;
    duration: number;
    easing?: import("svelte/transition").EasingFunction;
    css?: (t: number, u: number) => string;
};
