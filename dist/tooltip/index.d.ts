import type { Readable } from 'svelte/store';
import { type Instance, type OptionsGeneric, type Modifier, type VirtualElement } from '@popperjs/core';
export { default as Tooltip } from './Tooltip.svelte';
export type { VirtualElement } from '@popperjs/core';
export type PopperOptions<TModifier> = Partial<OptionsGeneric<TModifier>> | undefined;
export type ReferenceAction = (node: Element | VirtualElement | Readable<VirtualElement>) => {
    destroy?(): void;
};
export type ContentAction<TModifier> = (node: HTMLElement, popperOptions?: PopperOptions<TModifier>) => {
    update(popperOptions: PopperOptions<TModifier>): void;
    destroy(): void;
};
export declare function createPopperActions<TModifier extends Partial<Modifier<any, any>>>(initOptions?: PopperOptions<TModifier>): [ReferenceAction, ContentAction<TModifier>, () => Instance | null];
