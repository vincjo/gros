<script>
    import { clickOutside } from '$lib/dropdown'
    import { fade } from 'svelte/transition'
    import { createPopperActions } from '$lib/tooltip'

    export let position = 'bottom'
    export let preventClosing = false
    const [popperRef, popperContent] = createPopperActions({
        placement: position,
        strategy: 'fixed',
    })
    const extraOpts = {
        modifiers: [
            { name: 'offset', options: { offset: [0, 0] } }
        ],
    }
    let active = false
    let minWidth = 'auto'
    let element

    const open = () => {
        active = !active
        if (element) {
            minWidth = element.offsetWidth + 'px'
        }
    }

    const close = (event) => {
        if (!preventClosing) {
            active = false 
            return
        }
        if (
            event.target.classList.contains('close-dropdown')
            && !event.target.parentNode.classList.contains('close-dropdown')
        ) {
            active = false 
            return
        }
    }
</script>


<button class="dropdown-trigger" on:click={open} bind:this={element} use:popperRef use:clickOutside={close}>
    <slot></slot>
</button>

{#if active}
    <div
        transition:fade={{ duration:120 }}
        use:popperContent={extraOpts}
        style:min-width={minWidth}
        class="dropdown"
        data-position="{position}"
    >
        <slot name="content"/>
    </div>
{/if}


<style>
    button{
        margin:0;
        padding:0;
        background:transparent;
    }
    .dropdown{
        z-index:9999;
        user-select: none;
    }
</style>
