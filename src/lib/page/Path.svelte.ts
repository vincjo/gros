import { page } from '$app/state'
import { base } from '$app/paths'


export default class Path
{
    public name = $derived(page.url.pathname)

    public get(name: string) 
    {
        if (base) {
            return `${base}${name}`.replace('//', '/').replace(/\/$/, '')
        }
        return name
    }
}