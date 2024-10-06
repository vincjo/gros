import { page } from '$app/stores'
import { base } from '$app/paths'
import { derived, fromStore } from 'svelte/store'


export const path = fromStore(derived(page, $page => $page?.url?.pathname ?? ''))

export const getPath = (name: string) => {
    if (base) {
        return `${base}${name}`.replace('//', '/').replace(/\/$/, '')
    }
    return name
}
