import type { DataHandler } from '@vincjo/datatables/legacy';
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
declare const ThFilter: $$__sveltets_2_IsomorphicComponent<{
    handler: DataHandler;
    filterBy?: any;
    align?: string;
}, {
    [evt: string]: CustomEvent<any>;
}, {}, {}, string>;
type ThFilter = InstanceType<typeof ThFilter>;
export default ThFilter;
