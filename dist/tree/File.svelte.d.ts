import type TreeHandler from './TreeHandler.svelte';
import type { Snippet } from 'svelte';
interface $$__sveltets_2_IsomorphicComponent<Props extends Record<string, any> = any, Events extends Record<string, any> = any, Slots extends Record<string, any> = any, Exports = {}, Bindings = string> {
    new (options: import('svelte').ComponentConstructorOptions<Props>): import('svelte').SvelteComponent<Props, Events, Slots> & {
        $$bindings?: Bindings;
    } & Exports;
    (internal: unknown, props: Props & {
        $$events?: Events;
        $$slots?: Slots;
    }): Exports;
    z_$$bindings?: Bindings;
}
declare const File: $$__sveltets_2_IsomorphicComponent<{
    children: Snippet;
    option?: Snippet;
    tree: TreeHandler;
    identifier: string | number;
    parent: number | string;
    onclick?: () => void;
}, {
    [evt: string]: CustomEvent<any>;
}, {}, {}, "">;
type File = InstanceType<typeof File>;
export default File;
