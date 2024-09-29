import type { Error } from './index';
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
declare const ErrorAlert: $$__sveltets_2_IsomorphicComponent<{
    errors: Error[];
    field: string;
}, {
    [evt: string]: CustomEvent<any>;
}, {}, {}, "">;
type ErrorAlert = InstanceType<typeof ErrorAlert>;
export default ErrorAlert;
