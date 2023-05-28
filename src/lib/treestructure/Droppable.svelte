<script lang="ts">
    import type TreeHandler from './TreeHandler'
    import { fade } from 'svelte/transition'

    export let handler: TreeHandler
    export let identifier: number | string
    export let onDrop = async (data: Object, event: DragEvent) => {}
    let timeout: number

    const dragenter = (event: DragEvent) => {
        const target = event.target as HTMLElement
        target.style.background = 'rgba(251, 192, 45, 0.2)'
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            if (!handler.isActive('folder', identifier)) {
                handler.setActive('folder', identifier)
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
        const data = { ...$dragging.data, destination: identifier }
        if (data.origin === data.destination) {
            return
        }
        await onDrop(data, event)
        handler.drop()
    }
    const dragging = handler.getDragging()
</script>

{#if $dragging.status === true && $dragging.data.identifier !== identifier}
    <div class="droppable" transition:fade={{ duration:200 }}
        on:dragenter|self={(event) => dragenter(event)}
        on:dragover|preventDefault
        on:dragleave|self={(event) => dragleave(event)}
        on:drop|self|preventDefault={(event) => drop(event)}
    />
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