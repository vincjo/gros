<svelte:options runes={true}/>
<script lang="ts">
    import { clickOutside } from '$lib/action'
    import type { Snippet } from 'svelte'
    import { fade } from 'svelte/transition'
    import { createPopperActions } from '$lib/tooltip'
    import type { Placement } from '@popperjs/core'
    import { onMount } from 'svelte'

    type Props = {
        position        ?: Placement,
        preventClosing  ?: boolean,
        fixedWidth      ?: boolean,
        isBlock         ?: boolean,
        active          ?: boolean,
        disabled        ?: boolean,
        onclick         ?: () => any
        content          : Snippet,
        children         : Snippet
    }

    let {
        position        = 'bottom',
        preventClosing  = false,
        fixedWidth      = false,
        isBlock         = false,
        active          = false,
        disabled        = false,
        onclick         = () => { return },
        content,
        children,
    }: Props = $props()


    let minWidth = $state('auto')
    let element: HTMLButtonElement
    let dropdownElement: HTMLDivElement = $state(undefined)

    onMount(() => {
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

    const getTarget = (event: Event) => {
        if (event.target instanceof HTMLElement || event.target instanceof SVGElement) {
            return {
                keep: event.target.closest('.open-dropdown') === null ? false : true,
                leave: event.target.closest('.close-dropdown') === null ? false : true,
                contains: dropdownElement && dropdownElement.firstChild && dropdownElement.firstChild.contains(event.target),
                preventOpening: event.target.closest('.prevent-opening') === null ? false : true
            }
        }
        return {}
    }

    const open = (event: Event) => {
        onclick()
        const { preventOpening } = getTarget(event)
        if (preventOpening) {
            return
        }
        return active = !active
    }

    const close = (event: Event) => {
        const { keep, leave, contains } = getTarget(event)
        if (keep) {
            return
        }
        // else if (contains) {
        //     return active = false
        // }
        else if (preventClosing === true && leave === false) {
            return
        }
        return active = false 
    }
</script>


<button 
    type="button"
    class="dropdown-trigger" 
    class:block={isBlock} 
    onclick={(event) => open(event)} bind:this={element}
    use:popperRef 
    use:clickOutside={close}
>
    {@render children()}
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
        {@render content()}
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
    button:focus {
        transform: none;
    }
</style>
