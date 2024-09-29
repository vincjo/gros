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
declare const Range: $$__sveltets_2_IsomorphicComponent<{
    value: number;
    min?: number;
    max?: number;
    precision?: number;
    prefix?: string;
    suffix?: string;
    onchange?: (event?: Event) => void;
}, {
    [evt: string]: CustomEvent<any>;
}, {}, {}, "value">;
type Range = InstanceType<typeof Range>;
export default Range;
