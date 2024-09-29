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
    big?: boolean;
    value: number[];
    min?: number;
    max?: number;
    step?: number;
    tooltip?: boolean;
    pips?: boolean;
    suffix?: string;
    prefix?: string;
}, {
    [evt: string]: CustomEvent<any>;
}, {}, {}, "">;
type Range = InstanceType<typeof Range>;
export default Range;
