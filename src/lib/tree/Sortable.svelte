<script lang="ts">
    import { onMount, type Snippet } from 'svelte'
    import SortableJS from 'sortablejs'

    type Order = { id: string | number, sort: number }[]
    type Props = {
        onSort?: (order: Order) => Promise<void>,
        type?: 'file' | 'folder',
        scope?: number | string,
        children: Snippet
    }

    let { 
        onSort = async (order: Order) => { console.log(order) },
        type = 'file',
        scope,
        children
    }: Props = $props()


    onMount( () => {
        const element = document.querySelector(`.sortable-${type}-${scope}`)
        new SortableJS(element, {
            preventOnFilter: false,
            handle: `.handle`,
            animation: 200,
            ghostClass: 'z-depth-2',
            filter: `.ignore-sortable`,
            direction: 'vertical',
            easing: "cubic-bezier(1, 0, 0, 1)",
            setData: (dataTransfer: DataTransfer, element: HTMLElement) => {
                dataTransfer.setData('Text', JSON.stringify({
                    id: parseInt(element.dataset.id)
                }))
            },
            onEnd: async (e: any) => {
                const sorted = Array.from( e.to.querySelectorAll(`.sortable-${type}-${scope} .${type}`) )
                const order = sorted.map((element: HTMLElement, i) => {
                    return { 
                        id: isNaN(element.dataset.id as any) ? element.dataset.id : Number(element.dataset.id), 
                        sort: i+1
                    }
                })
                await onSort(order)
            },
        })
    })
</script>

<div class="sortable-{type}-{scope}">
    {@render children()}
</div>
