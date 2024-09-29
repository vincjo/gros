import type { Circle2Types } from './spinner.type';
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
declare const Circle2: $$__sveltets_2_IsomorphicComponent<Circle2Types, {
    [evt: string]: CustomEvent<any>;
}, {}, {}, "">;
type Circle2 = InstanceType<typeof Circle2>;
export default Circle2;
