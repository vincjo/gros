import { page } from '$app/stores';
import { base } from '$app/paths';
import { get } from 'svelte/store';
export default class Page {
    url = $derived(get(page).url.pathname);
    getPath() {
        if (base) {
            return `${base}${this.url}`.replace('//', '/').replace(/\/$/, '');
        }
        return this.url;
    }
}
