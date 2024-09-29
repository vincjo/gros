import type { Placement } from '@popperjs/core';
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
declare const Autocomplete: $$__sveltets_2_IsomorphicComponent<{
    position?: Placement;
    children: Snippet;
    content: Snippet;
}, {
    [evt: string]: CustomEvent<any>;
}, {}, {}, "">;
type Autocomplete = InstanceType<typeof Autocomplete>;
export default Autocomplete;
