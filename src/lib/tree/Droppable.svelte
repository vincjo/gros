<script lang="ts">
    import type TreeHandler from './TreeHandler.svelte'
    import { fade } from 'svelte/transition'

    let {
        tree, 
        identifier,
        onDrop = async ({}, _) => {}
    }: {
        tree: TreeHandler,
        identifier: number | string,
        onDrop: (data: Object, event: DragEvent) => Promise<void>
    } = $props()
    let timeout: NodeJS.Timeout

    const dragenter = (event: DragEvent) => {
        const target = event.target as HTMLElement
        target.style.background = 'rgba(251, 192, 45, 0.2)'
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            if (!tree.isActive('folder', identifier)) {
                tree.setActive('folder', identifier)
            }
        }, 1000)
    }

    const dragleave = (event: DragEvent) => {
        clearTimeout(timeout)
        timeout = undefined
        const target = event.target as HTMLElement
        target.style.background = 'transparent'
    }
    const drop = async (event: DragEvent) => {
        clearTimeout(timeout)
        const data = { ...tree.dragging.data, destination: identifier }
        if (data.origin === data.destination) {
            return
        }
        await onDrop(data, event)
        tree.drop()
    }
</script>

{#if tree.dragging.status === true && tree.dragging.data.identifier !== identifier}
    <div class="droppable" transition:fade={{ duration:200 }}
        ondragenter={(event) => dragenter(event)}
        ondragleave={(event) => dragleave(event)}
        ondrop={(event) => drop(event)}
        role="button"
        tabindex="0"
    ></div>
{/if}

<style>
    div{
        position:absolute;
        top:0;
        left:0;
        right:0;
        bottom:0;
        z-index:20;
        transition:all, 0.3s;
        border-radius:3px;
    }
</style>