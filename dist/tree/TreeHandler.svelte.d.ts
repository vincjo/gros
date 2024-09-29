export default class TreeHandler {
    active: {
        folder: any[];
        file: any[];
    };
    current: {
        folder: any;
        file: any;
    };
    dragging: {
        status: boolean;
        data: any;
    };
    isActive(type: 'folder' | 'file', identifier: string | number): boolean;
    drag(data: Object): void;
    drop(): void;
    setActive(type: 'folder' | 'file', identifier: string | number): void;
    setCurrent(type: 'folder' | 'file', identifier: string | number): void;
    combine(): void;
    setURLParams(): any;
    getURLParams(): any;
    private parse;
}
