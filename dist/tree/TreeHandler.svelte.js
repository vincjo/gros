import { get } from 'svelte/store';
import { page } from '$app/stores';
export default class TreeHandler {
    active = $state({ folder: [], file: [] });
    current = $state({ folder: null, file: null });
    dragging = $state({ status: false, data: null });
    isActive(type, identifier) {
        return this.active[type].includes(identifier);
    }
    drag(data) {
        this.dragging = { status: true, data };
    }
    drop() {
        this.dragging.status = false;
    }
    setActive(type = 'folder', identifier) {
        if (this.active[type].includes(identifier)) {
            this.active[type] = this.active[type].filter(value => value !== identifier);
        }
        else {
            this.active[type].push(identifier);
        }
    }
    setCurrent(type = 'folder', identifier) {
        this.current[type] = identifier;
    }
    combine() {
        this.active.folder = [];
    }
    setURLParams() {
        const { url } = get(page);
        const folders = this.active.folder;
        const folder = this.current.folder;
        const file = this.current.file;
        url.searchParams.set('folders', folders.join('-'));
        url.searchParams.set('folder', folder);
        url.searchParams.set('file', file);
        return url.toString();
    }
    getURLParams() {
        const { url } = get(page);
        const [folders, folder, file] = this.parse([
            url.searchParams.get('folders'),
            url.searchParams.get('folder'),
            url.searchParams.get('file'),
        ]);
        this.active.folder = folders;
        this.current.folder = folder;
        this.current.file = file;
        return url.toString();
    }
    parse(params) {
        const [folders, folder, file] = params;
        return [
            folders ? folders.split('-').map(id => isNaN(id) ? id : Number(id)) : [],
            folder ? isNaN(folder) ? folder : Number(folder) : null,
            file ? isNaN(file) ? file : Number(file) : null
        ];
    }
}
