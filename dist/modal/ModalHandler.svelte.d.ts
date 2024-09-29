import type { Component } from 'svelte';
export default class ModalHandler {
    isActive: boolean;
    component: Component<{}, {}, string>;
    props: any;
    open(component: Component, props?: any): void;
    close(): void;
}
