import type { Error, Option } from '../index';
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
declare const Simple: $$__sveltets_2_IsomorphicComponent<{
    big?: boolean;
    value?: string | number | boolean;
    label?: string;
    icon?: string;
    required?: boolean;
    errors?: Error[];
    field?: string | null;
    options?: Option[];
}, {
    [evt: string]: CustomEvent<any>;
}, {}, {}, "value">;
type Simple = InstanceType<typeof Simple>;
export default Simple;
