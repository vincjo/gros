<script lang="ts">
    import { onMount } from 'svelte'
    import Sortable from 'sortablejs'
    export let type: 'file' | 'folder' = 'file'
    export let scope: number | string

    export let onSort = async (order: Order) => { console.log(order) }


    type Order = { id: string | number, sort: number }[]

    onMount( () => sort() )

    const sort = () => {
        const element = document.querySelector(`.sortable-${type}-${scope}`)
        new Sortable(element, {
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
    } 
</script>

<div class="sortable-{type}-{scope}">
    <slot/>
</div>
