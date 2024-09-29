import type { DataHandler, Field, Row } from '@vincjo/datatables/legacy';
declare class __sveltets_Render<T extends Row> {
    props(): {
        handler: DataHandler<T_1>;
        orderBy: Field<T_1>;
        align?: "left" | "right" | "center";
    };
    events(): {} & {
        [evt: string]: CustomEvent<any>;
    };
    slots(): {
        default: {};
    };
    bindings(): string;
    exports(): {};
}
interface $$IsomorphicComponent {
    new <T extends Row>(options: import('svelte').ComponentConstructorOptions<ReturnType<__sveltets_Render<T>['props']> & {
        children?: any;
    }>): import('svelte').SvelteComponent<ReturnType<__sveltets_Render<T>['props']>, ReturnType<__sveltets_Render<T>['events']>, ReturnType<__sveltets_Render<T>['slots']>> & {
        $$bindings?: ReturnType<__sveltets_Render<T>['bindings']>;
    } & ReturnType<__sveltets_Render<T>['exports']>;
    <T extends Row>(internal: unknown, props: ReturnType<__sveltets_Render<T>['props']> & {
        $$events?: ReturnType<__sveltets_Render<T>['events']>;
        $$slots?: ReturnType<__sveltets_Render<T>['slots']>;
        children?: any;
    }): ReturnType<__sveltets_Render<T>['exports']>;
    z_$$bindings?: ReturnType<__sveltets_Render<any>['bindings']>;
}
declare const Th: $$IsomorphicComponent;
type Th<T extends Row> = InstanceType<typeof Th<T>>;
export default Th;
