import type { DataHandler, Row } from '@vincjo/datatables/legacy';
declare class __sveltets_Render<T extends Row> {
    props(): {
        handler: DataHandler<T_1>;
        search?: boolean;
        rowCount?: boolean;
        pagination?: boolean;
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
declare const Datatable: $$IsomorphicComponent;
type Datatable<T extends Row> = InstanceType<typeof Datatable<T>>;
export default Datatable;
