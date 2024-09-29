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
declare const Checkbox: $$__sveltets_2_IsomorphicComponent<{
    checked: boolean;
    size?: number;
    margin?: number[];
    children?: Snippet;
    before?: Snippet;
    onclick?: () => void;
}, {
    [evt: string]: CustomEvent<any>;
}, {}, {}, "checked">;
type Checkbox = InstanceType<typeof Checkbox>;
export default Checkbox;
