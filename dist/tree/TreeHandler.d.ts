export default class TreeHandler {
    private active;
    private current;
    private dragging;
    getActive(type: 'folder' | 'file'): import("svelte/store").Writable<any[]>;
    isActive(type: 'folder' | 'file', identifier: any): boolean;
    getCurrent(type: 'folder' | 'file'): import("svelte/store").Writable<any>;
    getDragging(): import("svelte/store").Writable<{
        status: boolean;
        data: any;
    }>;
    drag(data: Object): void;
    drop(): void;
    setActive(type: 'folder' | 'file', identifier: string | number): void;
    setCurrent(type: 'folder' | 'file', identifier: string | number): void;
    combine(): void;
    setURLParams(): any;
    getURLParams(): any;
    private parse;
}
