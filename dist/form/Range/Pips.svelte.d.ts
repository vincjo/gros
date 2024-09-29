export default Pips;
type Pips = SvelteComponent<{
    values?: number[];
    max?: number;
    all?: boolean;
    min?: number;
    focus?: any;
    prefix?: string;
    disabled?: boolean;
    range?: boolean;
    last?: any;
    suffix?: string;
    step?: number;
    vertical?: boolean;
    reversed?: boolean;
    hoverable?: boolean;
    pipstep?: any;
    first?: any;
    rest?: any;
    formatter?: (v: any, i: any) => any;
    orientationStart?: any;
    percentOf?: any;
    moveHandle?: any;
    fixFloat?: any;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> & {
    $$bindings?: string;
};
declare const Pips: $$__sveltets_2_IsomorphicComponent<{
    values?: number[];
    max?: number;
    all?: boolean;
    min?: number;
    focus?: any;
    prefix?: string;
    disabled?: boolean;
    range?: boolean;
    last?: any;
    suffix?: string;
    step?: number;
    vertical?: boolean;
    reversed?: boolean;
    hoverable?: boolean;
    pipstep?: any;
    first?: any;
    rest?: any;
    formatter?: (v: any, i: any) => any;
    orientationStart?: any;
    percentOf?: any;
    moveHandle?: any;
    fixFloat?: any;
}, {
    [evt: string]: CustomEvent<any>;
}, {}, {}, string>;
interface $$__sveltets_2_IsomorphicComponent<Props extends Record<string, any> = any, Events extends Record<string, any> = any, Slots extends Record<string, any> = any, Exports = {}, Bindings = string> {
    new (options: import("svelte").ComponentConstructorOptions<Props>): import("svelte").SvelteComponent<Props, Events, Slots> & {
        $$bindings?: Bindings;
    } & Exports;
    (internal: unknown, props: Props & {
        $$events?: Events;
        $$slots?: Slots;
    }): Exports;
    z_$$bindings?: Bindings;
}
