import type { SpinnerTypes } from './spinner.type';
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
declare const SpinLine: $$__sveltets_2_IsomorphicComponent<SpinnerTypes, {
    [evt: string]: CustomEvent<any>;
}, {}, {}, "">;
type SpinLine = InstanceType<typeof SpinLine>;
export default SpinLine;
