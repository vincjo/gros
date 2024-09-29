import type { Snippet } from 'svelte';
import type TreeHandler from './TreeHandler.svelte';
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
declare const Folder: $$__sveltets_2_IsomorphicComponent<{
    children: Snippet;
    option?: Snippet;
    nested?: Snippet;
    tree: TreeHandler;
    identifier: string | number;
    level?: number;
    parent?: number | string;
    onDrop?: (data: Object, event: DragEvent) => Promise<void>;
}, {
    [evt: string]: CustomEvent<any>;
}, {}, {}, "">;
type Folder = InstanceType<typeof Folder>;
export default Folder;
