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
            this.active[type] = this.active[type].filter(value => value !== identifier)
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
        const { url } = get(page)
        const folders = this.active.folder
        const folder = this.current.folder
        const file = this.current.file
        url.searchParams.set('folders', folders.join('-'))
        url.searchParams.set('folder', folder)
        url.searchParams.set('file', file)
        return url.toString()
    }

    public getURLParams()
    {
        const { url }= get(page)
        const [folders, folder, file] = this.parse([
            url.searchParams.get('folders'),
            url.searchParams.get('folder'),
            url.searchParams.get('file'),
        ])
        this.active.folder = folders as (string|number)[]
        this.current.folder = folder
        this.current.file = file
        return url.toString()
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