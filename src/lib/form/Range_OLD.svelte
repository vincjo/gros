<script lang="ts">
    import { fly, fade } from 'svelte/transition'
    import RangeHandler from './RangeHandler.svelte'

    type Props = {
        min: number
        max: number
        initial: number
        value: number
    }
    let { min = 0, max = 100, initial = 0, value = 0 }: Props = $props()
    let element: HTMLElement

    const handler = new RangeHandler(value, min, max)

    // $: if (element) elementX = element.getBoundingClientRect().left;

    // // Set a class based on if dragging
    // $: holding = Boolean(currentThumb);

    // // Update progressbar and thumb styles to represent value
    // $: if (progressBar && thumb) {
    //   // Limit value min -> max
    //   value = value > min ? value : min;
    //   value = value < max ? value : max;

    //   let percent = ((value - min) * 100) / (max - min);
    //   let offsetLeft = (container.clientWidth - 10) * (percent / 100) + 5;

    //   // Update thumb position + active range track width
    //   thumb.style.left = `${offsetLeft}px`;
    //   progressBar.style.width = `${offsetLeft}px`;
    // }
</script>

<svelte:window
    on:mousemove={handler.updateValueOnEvent}
    on:mouseup={handler.onDragEnd}
    on:resize={handler.resizeWindow}
/>

<div class="range">
    <div
        class="range__wrapper"
        tabindex="0"
        bind:this={element}
        role="slider"
        onmousedown={handler.onTrackEvent}
    >
        <div class="range__track" bind:this={handler.container}>
            <div class="range__track--highlighted" bind:this={progressBar} />
            <div
                class="range__thumb"
                class:range__thumb--holding={holding}
                bind:this={thumb}
                ontouchstart={onDragStart}
                onmousedown={onDragStart}
                onmouseover={() => (thumbHover = true)}
                onmouseout={() => (thumbHover = false)}
            >
                {#if holding || thumbHover}
                    <div
                        class="range__tooltip"
                        in:fly={{ y: 7, duration: 200 }}
                        out:fade={{ duration: 100 }}
                    >
                        {value}
                    </div>
                {/if}
            </div>
        </div>
    </div>
</div>

<svelte:head>
    <style>
        .mouse-over-shield {
            position: fixed;
            top: 0px;
            left: 0px;
            height: 100%;
            width: 100%;
            background-color: rgba(255, 0, 0, 0);
            z-index: 10000;
            cursor: grabbing;
        }
    </style>
</svelte:head>

<style>
    .range {
        position: relative;
        flex: 1;
    }

    .range__wrapper {
        min-width: 100%;
        position: relative;
        padding: 0.5rem;
        box-sizing: border-box;
        outline: none;
    }

    .range__wrapper:focus-visible > .range__track {
        box-shadow:
            0 0 0 2px white,
            0 0 0 3px var(--track-focus, #6185ff);
    }

    .range__track {
        height: 6px;
        background-color: var(--track-bgcolor, #d0d0d0);
        border-radius: 999px;
    }

    .range__track--highlighted {
        background-color: var(--track-highlight-bgcolor, #6185ff);
        background: var(--track-highlight-bg, linear-gradient(90deg, #6185ff, #9c65ff));
        width: 0;
        height: 6px;
        position: absolute;
        border-radius: 999px;
    }

    .range__thumb {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        width: 20px;
        height: 20px;
        background-color: var(--thumb-bgcolor, white);
        cursor: pointer;
        border-radius: 999px;
        margin-top: -8px;
        transition: box-shadow 100ms;
        user-select: none;
        box-shadow: var(
            --thumb-boxshadow,
            0 1px 1px 0 rgba(0, 0, 0, 0.14),
            0 0px 2px 1px rgba(0, 0, 0, 0.2)
        );
    }

    .range__thumb--holding {
        box-shadow:
            0 1px 1px 0 rgba(0, 0, 0, 0.14),
            0 1px 2px 1px rgba(0, 0, 0, 0.2),
            0 0 0 6px var(--thumb-holding-outline, rgba(113, 119, 250, 0.3));
    }

    .range__tooltip {
        pointer-events: none;
        position: absolute;
        top: -33px;
        color: var(--tooltip-text, white);
        width: 38px;
        padding: 4px 0;
        border-radius: 4px;
        text-align: center;
        background-color: var(--tooltip-bgcolor, #6185ff);
        background: var(--tooltip-bg, linear-gradient(45deg, #6185ff, #9c65ff));
    }

    .range__tooltip::after {
        content: '';
        display: block;
        position: absolute;
        height: 7px;
        width: 7px;
        background-color: var(--tooltip-bgcolor, #6185ff);
        bottom: -3px;
        left: calc(50% - 3px);
        clip-path: polygon(0% 0%, 100% 100%, 0% 100%);
        transform: rotate(-45deg);
        border-radius: 0 0 0 3px;
    }
</style>
