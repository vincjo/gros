import type { ColorHandler } from '..';
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
declare const Opacity: $$__sveltets_2_IsomorphicComponent<{
    handler: ColorHandler;
}, {
    [evt: string]: CustomEvent<any>;
}, {}, {}, "">;
type Opacity = InstanceType<typeof Opacity>;
export default Opacity;
