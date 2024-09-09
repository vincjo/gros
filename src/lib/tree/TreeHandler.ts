import { writable, get } from 'svelte/store'
import { page } from '$app/stores'


export default class TreeHandler 
{
    private active = {
        folder: writable([]),
        file: writable([]) 
    }
    private current = {
        folder: writable(null),
        file: writable(null) 
    }
    private dragging = writable({ status: false, data: null })


    public getActive(type: 'folder' | 'file')
    {
        return this.active[type]
    }

    public isActive(type: 'folder' | 'file', identifier)
    {
        const active = get(this.active[type])
        return active.includes(identifier)
    }

    public getCurrent(type: 'folder' | 'file')
    {
        return this.current[type]
    }

    public getDragging()
    {
        return this.dragging
    }

    public drag(data: Object)
    {
        this.dragging.set({ status: true, data: data })
    }

    public drop()
    {
        this.dragging.update(store => {
            store.status = false
            return store
        })
    }

    public setActive(type: 'folder' | 'file' = 'folder', identifier: string | number )
    {
        this.active[type].update(store => {
            if (store.includes(identifier) ) {
                store = store.filter(value => {
                    return value !== identifier
                })
            }
            else {
                store = [ ...new Set([ ...store, identifier]) ]
            }
            return store
        })
    }

    public setCurrent(type: 'folder' | 'file' = 'folder', identifier: string | number )
    {
        this.current[type].set(identifier)
    }

    public combine()
    {
        this.active.folder.set([])
    }

    public setURLParams()
    {
        const $page = get(page)
        const folders = get(this.active.folder)
        const folder = get(this.current.folder)
        const file = get(this.current.file)
        $page.url.searchParams.set('folders', folders.join('-'))
        $page.url.searchParams.set('folder', folder)
        $page.url.searchParams.set('file', file)
        return $page.url.toString()
    }

    public getURLParams()
    {
        const $page = get(page)
        const [folders, folder, file] = this.parse([
            $page.url.searchParams.get('folders'),
            $page.url.searchParams.get('folder'),
            $page.url.searchParams.get('file'),
        ])
        this.active.folder.set(folders as (string|number)[])
        this.current.folder.set(folder)
        this.current.file.set(file)
        return $page.url.toString()
    }

    private parse(params: [folders: string, folder: string, file: string])
    {
        const [ folders, folder, file ] = params
        return [
            folders ? folders.split('-').map(id => isNaN(id as any) ? id : Number(id)) : [],
            folder ? isNaN(folder as any) ? folder : Number(folder) : null,
            file ? isNaN(file as any) ? file : Number(file) : null
        ]
    }
}