<script lang="ts">
    import { clickOutside } from '$lib/dropdown'
    import { fade } from 'svelte/transition'
    import { createPopperActions } from '$lib/tooltip'
    import type { Placement } from '@popperjs/core'

    export let position: Placement = 'bottom'
    export let preventClosing = false
    export let fixedWidth = false
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
    let element: HTMLButtonElement
    let dropdownElement: HTMLDivElement

    const open = () => {
        active = !active
        if (element && !fixedWidth) {
            minWidth = element.offsetWidth + 'px'
        }
    }

    const close = (event) => {
        if (!preventClosing) {
            return active = false 
        }
        if (
            event.target.classList.contains('close-dropdown')
            || event.target.parentNode.classList.contains('close-dropdown')
        ) {
            return active = false 
        }
        else if (dropdownElement && dropdownElement.firstChild && dropdownElement.firstChild.contains(event.target)) {
            return
        }
        else {
            return active = false 
        }
    }
</script>


<button class="dropdown-trigger" on:click={open} bind:this={element} use:popperRef use:clickOutside={close}>
    <slot></slot>
</button>

{#if active}
    <div
        transition:fade|local={{ duration:120 }}
        use:popperContent={extraOpts}
        bind:this={dropdownElement}
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
