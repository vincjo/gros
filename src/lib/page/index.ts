import { page } from '$app/stores'
import { base } from '$app/paths'
import { derived } from 'svelte/store'

export const url = derived(
	page, $page => {
        return $page.url.pathname
    }
)

export const getPath = (url: string) => {
    if (base) {
        return `${base}${url}`.replace('//', '/').replace(/\/$/, '')
    }
    return url
}
