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
declare const Droppable: $$__sveltets_2_IsomorphicComponent<{
    tree: TreeHandler;
    identifier: number | string;
    onDrop: (data: Object, event: DragEvent) => Promise<void>;
}, {
    [evt: string]: CustomEvent<any>;
}, {}, {}, "">;
type Droppable = InstanceType<typeof Droppable>;
export default Droppable;
