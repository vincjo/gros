<script lang="ts">
    import { createPopperActions } from '$lib/tooltip'
    import type { Placement } from '@popperjs/core'
    import { fade } from 'svelte/transition'
    export let top = false
    export let right = false
    export let bottom = false
    export let left = false
    export let position: Placement = top ? 'top' : right ? 'right' : bottom ? 'bottom' : left ? 'left' : 'bottom'

    export let content = ''

    const [popperRef, popperContent] = createPopperActions({
        placement: position,
        strategy: 'fixed',
    })
    const params = {
        modifiers: [
            { name: 'offset', options: { offset: [0, 8] } }
        ],
    }
    let show = false
</script>

    <aside
        use:popperRef
        on:mouseenter={() => show = true}
        on:mouseleave={() => show = false}
    >
    </aside>


    {#if show}
        <div 
            class:active={show}
            in:fade={{ duration:120 }}
            out:fade={{ duration:200 }}
            use:popperContent={params} 
            class="tooltip" 
            data-position="{position}"
        >
            {@html content}
        </div>
    {/if}


<style>
    aside{
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
    }

    .tooltip {
        background: rgba(0,0,0,0.7);
        color: white;
        padding: 8px 14px;
        font-size: 12px;
        border-radius: 2px;
        z-index: 9999;
        text-transform:none;
        font-family: Roboto;
    }
</style>