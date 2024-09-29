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
declare const Textarea: $$__sveltets_2_IsomorphicComponent<{
    big?: boolean;
    spellcheck?: boolean;
    height?: string;
    value?: string;
    label?: string;
    icon?: string;
    required?: boolean;
    errors?: Error[];
    field?: string | null;
    oninput?: (event: Event) => any;
}, {
    [evt: string]: CustomEvent<any>;
}, {}, {}, "value">;
type Textarea = InstanceType<typeof Textarea>;
export default Textarea;
