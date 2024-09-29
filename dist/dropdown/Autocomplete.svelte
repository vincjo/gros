<script lang="ts">import { fade } from 'svelte/transition';
import { createPopperActions } from '../tooltip';
let { position = 'bottom', children, content } = $props();
const [popperRef, popperContent] = createPopperActions({
    placement: position,
    strategy: 'fixed',
});
const extraOpts = {
    modifiers: [
        { name: 'offset', options: { offset: [0, 0] } }
    ],
};
let minWidth = 'auto';
</script>


<aside class="dropdown-trigger" use:popperRef>
    {@render children()}
</aside>

<div
    transition:fade|global={{ duration:120 }}
    use:popperContent={extraOpts}
    style:min-width={minWidth}
    class="dropdown"
    data-position="{position}"
>
    {#if content}
        {@render content()}
    {/if}
</div>


<style>
    aside {
        background:transparent;
        width: fit-content;
        height: fit-content;
    }
    .dropdown{
        z-index:9999;
        user-select: none;
    }
</style>
