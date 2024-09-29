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
declare const Slider: $$__sveltets_2_IsomorphicComponent<{
    big?: boolean;
    values: number[];
    min?: number;
    max?: number;
    step?: number;
    float?: boolean;
    pushy?: boolean;
    pips?: boolean;
    suffix?: string;
    prefix?: string;
    range?: boolean | "min" | "max";
    first?: string;
    last?: string;
}, {
    [evt: string]: CustomEvent<any>;
}, {}, {}, "values">;
type Slider = InstanceType<typeof Slider>;
export default Slider;
