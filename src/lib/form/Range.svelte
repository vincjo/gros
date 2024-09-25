<script lang="ts">
    import { fly, fade } from 'svelte/transition'
    import { onMount } from 'svelte'
    import { round, formatNumber } from '$lib/function'
    import RangeHandler from './RangeHandler.svelte'

    type Props = {
        value: number, 
        min?: number,
        max?: number,
        precision?: number,
        prefix?: string,
        suffix?: string,
        oninput?: (event?: Event) => void
    }

    let { 
        value = $bindable(), 
        min = 100, 
        max = 100,
        precision = 0,
        prefix = '',
        suffix = '',
        oninput = () => { return }
    }: Props = $props()
    let element: HTMLElement
    let container: HTMLElement
    let thumb: HTMLElement
    let progressBar: HTMLElement

    const range = new RangeHandler(value, min, max, oninput)

    onMount(() => range.setup(element, container, thumb, progressBar))

    $effect(() => {
        if (range.progressBar && range.thumb) {
            range.value = range.value > range.min ? range.value : range.min
            range.value = range.value < range.max ? range.value : range.max

            const percent = ((range.value - range.min) * 100) / (range.max - range.min)
            const offsetLeft = (range.container.clientWidth - 10) * (percent / 100) + 5

            range.thumb.style.left = `${offsetLeft}px`
            range.progressBar.style.width = `${offsetLeft}px`

            value = round(range.value, precision)
        }
    })
</script>

<svelte:window
    ontouchmove={(e) => range.updateValueOnEvent(e)}
    ontouchcancel={(e) => range.onDragEnd(e)}
    ontouchend={(e) => range.onDragEnd(e)}
    onmousemove={(e) => range.updateValueOnEvent(e)}
    onmouseup={(e) => range.onDragEnd(e)}
    onresize={() => range.resizeWindow()}
/>
<div class="range">
    <div
        class="range__wrapper"
        tabindex="0"
        onkeydown={(e) => range.onKeyPress(e)}
        bind:this={element}
        role="slider"
        aria-valuemin={range.min}
        aria-valuemax={range.max}
        aria-valuenow={range.value}
        onmousedown={(e) => range.onTrackEvent(e)}
        ontouchstart={(e) => range.onTrackEvent(e)}
    >
        <div class="range__track" bind:this={container}>
            <div class="range__track--highlighted" bind:this={progressBar}></div>
            <!-- svelte-ignore a11y_no_static_element_interactions -->
            <!-- svelte-ignore a11y_mouse_events_have_key_events -->
            <div
                class="range__thumb z-depth-2"
                class:range__thumb--holding={range.holding}
                bind:this={thumb}
                ontouchstart={(e) => range.onDragStart(e)}
                onmousedown={(e) => range.onDragStart(e)}
                onmouseover={() => (range.thumbHover = true)}
                onmouseout={() => (range.thumbHover = false)}
            >
                {#if range.holding || range.thumbHover}
                    <div
                        class="range__tooltip"
                        in:fly={{ y: 7, duration: 200 }}
                        out:fade={{ duration: 100 }}
                    >
                        {prefix}
                        {formatNumber(round(range.value, precision))}
                        {suffix}
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
        height: 4px;
        background-color: var(--grey, #e0e0e0);
        border-radius: 999px;
    }

    .range__track--highlighted {
        background: linear-gradient(90deg, var(--primary-lighten), var(--primary-darken));
        background: #757575;
        width: 0;
        height: 4px;
        position: absolute;
        border-radius: 999px;
    }

    .range__thumb {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        width: 14px;
        height: 14px;
        background-color: #424242;
        cursor: pointer;
        border-radius: 999px;
        margin-top: -5px;
        transition: box-shadow 100ms;
        user-select: none;
    }

    .range__thumb--holding {
        box-shadow:
            0 1px 1px 0 rgba(0, 0, 0, 0.14),
            0 1px 2px 1px rgba(0, 0, 0, 0.2),
            0 0 0 6px rgba(40,40,40,0.4);
    }

    .range__tooltip {
        pointer-events: none;
        position: absolute;
        top: -33px;
        color: #fff;
        width: fit-content;
        white-space: nowrap;
        padding: 2px 4px;
        border-radius: 4px;
        text-align: center;
        background: linear-gradient(45deg, #242424, #212121);
    }

    .range__tooltip::after {
        content: '';
        display: block;
        position: absolute;
        height: 7px;
        width: 7px;
        background-color: #212121;
        bottom: -3px;
        left: calc(50% - 3px);
        clip-path: polygon(0% 0%, 100% 100%, 0% 100%);
        transform: rotate(-45deg);
        border-radius: 0 0 0 3px;
    }
</style>
