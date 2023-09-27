<script lang="ts">
    import { fade } from 'svelte/transition'
    import { createPopperActions } from '$lib/tooltip'
    import type { Placement } from '@popperjs/core'

    export let position: Placement = 'bottom'
    const [popperRef, popperContent] = createPopperActions({
        placement: position,
        strategy: 'fixed',
    })
    const extraOpts = {
        modifiers: [
            { name: 'offset', options: { offset: [0, 0] } }
        ],
    }
    let minWidth = 'auto'

</script>


<button type="button" class="dropdown-trigger" use:popperRef>
    <slot></slot>
</button>

<div
    transition:fade={{ duration:120 }}
    use:popperContent={extraOpts}
    style:min-width={minWidth}
    class="dropdown"
    data-position="{position}"
>
    <slot name="content"/>
</div>


<style>
    button{
        margin:0;
        padding:0;
        background:transparent;
        transform: none;
    }
    .dropdown{
        z-index:9999;
        user-select: none;
    }
</style>
