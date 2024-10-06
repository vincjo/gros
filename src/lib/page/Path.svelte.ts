import { page } from '$app/stores'
import { base } from '$app/paths'
import { derived, fromStore } from 'svelte/store'


export default class Path
{
    public name = fromStore(derived(page, $page => $page?.url?.pathname ?? ''))
    // public name = $derived(this.fromStore.current)


    public get(name: string) 
    {
        if (base) {
            return `${base}${name}`.replace('//', '/').replace(/\/$/, '')
        }
        return name
    }
}