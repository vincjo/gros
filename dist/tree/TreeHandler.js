import { writable, get } from 'svelte/store';
import { page } from '$app/stores';
export default class TreeHandler {
    active = {
        folder: writable([]),
        file: writable([])
    };
    current = {
        folder: writable(null),
        file: writable(null)
    };
    dragging = writable({ status: false, data: null });
    getActive(type) {
        return this.active[type];
    }
    isActive(type, identifier) {
        const active = get(this.active[type]);
        return active.includes(identifier);
    }
    getCurrent(type) {
        return this.current[type];
    }
    getDragging() {
        return this.dragging;
    }
    drag(data) {
        this.dragging.set({ status: true, data: data });
    }
    drop() {
        this.dragging.update(store => {
            store.status = false;
            return store;
        });
    }
    setActive(type = 'folder', identifier) {
        this.active[type].update(store => {
            if (store.includes(identifier)) {
                store = store.filter(value => {
                    return value !== identifier;
                });
            }
            else {
                store = [...new Set([...store, identifier])];
            }
            return store;
        });
    }
    setCurrent(type = 'folder', identifier) {
        this.current[type].set(identifier);
    }
    combine() {
        this.active.folder.set([]);
    }
    setURLParams() {
        const $page = get(page);
        const folders = get(this.active.folder);
        const folder = get(this.current.folder);
        const file = get(this.current.file);
        $page.url.searchParams.set('folders', folders.join('-'));
        $page.url.searchParams.set('folder', folder);
        $page.url.searchParams.set('file', file);
        return $page.url.toString();
    }
    getURLParams() {
        const $page = get(page);
        const [folders, folder, file] = this.parse([
            $page.url.searchParams.get('folders'),
            $page.url.searchParams.get('folder'),
            $page.url.searchParams.get('file'),
        ]);
        this.active.folder.set(folders);
        this.current.folder.set(folder);
        this.current.file.set(file);
        return $page.url.toString();
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
