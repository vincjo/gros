<script lang="ts">
    import { createPopperActions } from '$lib/tooltip'
    import type { Placement } from '@popperjs/core'
    import { fade } from 'svelte/transition'

    type Props = {
        gap?: number
        top?: boolean
        right?: boolean
        bottom?: boolean
        left?: boolean
        content?: string
    }
    let {
        gap = 4,
        top = false,
        right = false,
        bottom = false,
        left = false,
        content = ''
    }: Props = $props()

    const position: Placement = top
        ? 'top'
        : right
          ? 'right'
          : bottom
            ? 'bottom'
            : left
              ? 'left'
              : 'bottom'

    const [popperRef, popperContent] = createPopperActions({
        placement: position,
        strategy: 'absolute'
    })
    const params = {
        modifiers: [{ name: 'offset', options: { offset: [0, gap] } }]
    }
    let show = $state(false)
</script>

<aside use:popperRef onmouseenter={() => (show = true)} onmouseleave={() => (show = false)}></aside>

{#if show}
    <div
        class="tooltip"
        in:fade={{ duration: 120 }}
        out:fade={{ duration: 200 }}
        use:popperContent={params}
        data-position={position}
    >
        {@html content}
    </div>
{/if}

<style>
    aside {
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
    }
    .tooltip {
        background: rgba(0, 0, 0, 0.7);
        color: white;
        padding: 4px 12px;
        font-size: 13px;
        border-radius: 2px;
        z-index: 999999;
        text-transform: none;
        font-family: Roboto;
        letter-spacing: 0.02em;
    }
</style>
