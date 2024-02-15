<script lang="ts">
    import { clickOutside } from '$lib/dropdown'
    import { fade } from 'svelte/transition'
    import { createPopperActions } from '$lib/tooltip'
    import type { Placement } from '@popperjs/core'
    import { onMount } from 'svelte'

    export let position: Placement = 'bottom'
    export let preventClosing = false
    export let fixedWidth = false
    export let isBlock = false
    export let active = false
    export let disabled = false

    let minWidth = 'auto'
    let element: HTMLButtonElement
    let dropdownElement: HTMLDivElement

    onMount( () => {
        if (element && !fixedWidth) {
            minWidth = element.offsetWidth + 'px'
        }
    })

    const [popperRef, popperContent] = createPopperActions({
        placement: position,
        strategy: 'fixed',
    })
    const extraOpts = {
        modifiers: [
            { name: 'offset', options: { offset: [0, 0] } }
        ],
    }

    const open = (event) => {
        if (
            event.target.classList.contains('prevent-opening')
            || event.target.parentNode.classList.contains('prevent-opening')
        ) {
            return
        }
        active = !active
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


<button 
    type="button"
    class="dropdown-trigger" 
    class:block={isBlock} 
    on:click={(event) => open(event)} bind:this={element}
    use:popperRef 
    use:clickOutside={close}
>
    <slot/>
</button>

{#if active && !disabled}
    <div
        transition:fade={{ duration:120 }}
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
    button.block {
        width: 100%;
    }
    .dropdown{
        z-index:9999;
        user-select: none;
    }
    button:active{
        transform:none;
    }
</style>
