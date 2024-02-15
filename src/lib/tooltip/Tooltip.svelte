<script lang="ts">
    import { createPopperActions } from '$lib/tooltip'
    import type { Placement } from '@popperjs/core'
    import { fade } from 'svelte/transition'
    export let gap = 4
    export let top = false
    export let right = false
    export let bottom = false
    export let left = false
    export let position: Placement = top ? 'top' : right ? 'right' : bottom ? 'bottom' : left ? 'left' : 'bottom'

    export let content = ''

    const [popperRef, popperContent] = createPopperActions({
        placement: position,
        strategy: 'absolute',
    })
    const params = {
        modifiers: [
            { name: 'offset', options: { offset: [0, gap] } },
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
            class="tooltip" 
            in:fade={{ duration:120 }}
            out:fade={{ duration:200 }}
            use:popperContent={params} 
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
        padding: 4px 12px;
        font-size: 13px;
        border-radius: 2px;
        z-index: 999999;
        text-transform:none;
        font-family: Roboto;
        letter-spacing: .02em;
    }
</style>