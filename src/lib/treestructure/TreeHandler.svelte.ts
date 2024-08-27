import { get } from 'svelte/store'
import { page } from '$app/stores'


export default class TreeHandler 
{
    public active   = $state({ folder: [], file: [] })
    public current  = $state({ folder: null, file: null })
    public dragging = $state({ status: false, data: null })

    public isActive(type: 'folder' | 'file', identifier: string | number)
    {
        return this.active[type].includes(identifier)
    }

    public drag(data: Object)
    {
        this.dragging = { status: true, data }
    }

    public drop()
    {
        this.dragging.status = false
    }

    public setActive(type: 'folder' | 'file' = 'folder', identifier: string | number )
    {
        if (this.active[type].includes(identifier)) {
            this.active[type].filter(value => value !== identifier)
        }
        else {
            this.active[type].push(identifier)
        }
    }

    public setCurrent(type: 'folder' | 'file' = 'folder', identifier: string | number )
    {
        this.current[type] = identifier
    }

    public combine()
    {
        this.active.folder = []
    }

    public setURLParams()
    {
        const $page = get(page)
        const folders = this.active.folder
        const folder = this.current.folder
        const file = this.current.file
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
        this.active.folder = folders as (string|number)[]
        this.current.folder = folder
        this.current.file = file
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