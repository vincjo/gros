import type { Error } from './';
import { type Format } from '../date';
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
declare const DateInput: $$__sveltets_2_IsomorphicComponent<{
    big?: boolean;
    value?: string;
    label?: string;
    icon?: string;
    required?: boolean;
    errors?: Error[];
    field?: string;
    format?: Format;
}, {
    [evt: string]: CustomEvent<any>;
}, {}, {}, "value">;
type DateInput = InstanceType<typeof DateInput>;
export default DateInput;
