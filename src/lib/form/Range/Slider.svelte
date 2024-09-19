<script lang="ts">
    import { spring } from 'svelte/motion'
    import { onMount } from 'svelte'
    // import { createEventDispatcher } from 'svelte'
    import { preventDefault } from '$lib/event-modifier'
    // import Pips from './Pips.svelte'
    import SliderHandler from './SliderHandler.svelte'


    type Props = {
        big?: boolean,
        values: number[],
        min?: number,
        max?: number,
        step?: number,
        float?: boolean,
        pushy?: boolean,
        pips?: boolean,
        suffix?: string,
        prefix?: string,
        range?: boolean | 'min' | 'max'
        first?: string,
        last?: string
    }

    let {
        big = false,
        values = $bindable(),
        min = 0,
        max = 100,
        step = 1,
        float = true,
        pushy = false,
        pips = false,
        suffix = '',
        prefix = '',
        range,
        first = undefined,
        last = undefined
    }: Props = $props()


    // dom references
    let slider = undefined

    const handler = new SliderHandler({ values, min, max, step, pips, range, pushy })
    onMount(() => handler.slider = slider)
    // prepare dispatched events
    // const dispatch = createEventDispatcher()


    // $effect(() => {
    //     handler.values = handler.trimRange(handler.values.map((v) => handler.alignValueToStep(v)))

    //     if ( handler.valueLength !== handler.values.length ) {
    //         handler.springPositions = spring(values.map((v) => handler.percentOf(v)), handler.springValues )
    //     } else {
    //         handler.springPositions.set(values.map((v) => handler.percentOf(v)))
    //     }
    //     handler.valueLength = values.length
    // })
</script>




<section class:small={!big}>
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div
        bind:this={slider}
        class="rangeSlider"
        class:range={handler.range}
        class:focus={handler.focus}
        class:min={handler.range === 'min'}
        class:max={handler.range === 'max'}
        class:pips
        class:pip-labels={pips}
        onmousedown={(e) => handler.sliderInteractStart(e)}
        onmouseup={(e) => handler.sliderInteractEnd(e)}
        ontouchstart={(e) => preventDefault(handler.sliderInteractStart(e))}
        ontouchend={(e) => preventDefault(handler.sliderInteractEnd(e))}
    >
        {#each values as value, index}
            <span
                role="slider"
                class="rangeHandle"
                class:active={handler.focus && handler.activeHandle === index}
                class:press={handler.handlePressed && handler.activeHandle === index}
                data-handle={handler.index}
                onblur={(e) => handler.sliderBlurHandle(e)}
                onfocus={(e) => handler.sliderFocusHandle(e)}
                onkeydown={(e) => handler.sliderKeydown(e)}
                style="left: 0%; z-index: {handler.activeHandle === index ? 3 : 2};"
                aria-valuemin={handler.range === true && index === 1 ? values[0] : min}
                aria-valuemax={handler.range === true && index === 0 ? values[1] : max}
                aria-valuenow={value}
                aria-valuetext="{prefix}{handler.handleFormatter(value,index,handler.percentOf(value))}{suffix}"
                aria-orientation={handler.vertical ? 'vertical' : 'horizontal'}
                aria-disabled={handler.disabled}
                tabindex="{ handler.disabled ? -1 : 0 }"
            >
                <span class="rangeNub"></span>
                {#if handler.float}
                    <span class="rangeFloat">
                        {#if prefix}
                            <span class="rangeFloat-prefix">{prefix}</span>
                        {/if}
                        {handler.handleFormatter(value,index,handler.percentOf(value))}
                        {#if suffix}
                            <span class="rangeFloat-suffix">{suffix}</span>
                        {/if}
                    </span>
                {/if}
            </span>
        {/each}
        {#if handler.range}
            <span
                class="rangeBar"
                style="left: 0%; right: 100%;" 
            ></span>
        {/if}
        <!-- {#if pips}
            <Pips
                {values} {min} {max} {step} {range} {vertical} {reversed}
                {orientationStart} {hoverable} {disabled} {all} {first}
                {last} {rest} {pipstep} {prefix} {suffix} {formatter}
                {focus} {percentOf} {moveHandle} {fixFloat} 
            />
        {/if} -->
    </div>


</section>

<svelte:window
    onmousedown={(e) => handler.bodyInteractStart(e)}
    ontouchstart={(e) => handler.bodyInteractStart(e)}
    onmousemove={(e) => handler.bodyInteract(e)}
    ontouchmove={(e) => handler.bodyInteract(e)}
    onmouseup={(e) => handler.bodyMouseUp(e)}
    ontouchend={(e) => handler.bodyTouchEnd(e)}
    onkeydown={(e) => handler.bodyKeyDown(e)} 
/>


<style>
    section{width:auto;}
    .rangeSlider {
        position: relative;
        border-radius: 2px;
        height: 6px;
        transition: opacity 0.2s ease;
        user-select: none;
    }
    .rangeSlider * {
        user-select: none;
    }
    .rangeSlider.pips {
        margin-bottom:0;
    }
    .rangeSlider.pip-labels {
        margin-bottom:0;
    }
    .rangeSlider .rangeHandle {
        position: absolute;
        display: block;
        height: 18px;
        width: 18px;
        top: 3.5px;
        bottom: auto;
        transform: translateY(-50%) translateX(-50%);
        z-index: 2;
    }
    .rangeSlider .rangeNub,
    .rangeSlider .rangeHandle:before {
        position: absolute;
        left: 0;
        top: 0;
        display: block;
        border-radius: 100%;
        height: 100%;
        width: 100%;
        transition: box-shadow 0.2s ease;
    }
    .rangeSlider .rangeHandle:before {
        content: "";
        left: 1px;
        top: 1px;
        bottom: 1px;
        right: 1px;
        height: auto;
        width: auto;
        box-shadow: 0 0 0 0px rgba(0,0,0,.3);
        opacity: 0;
    }
    .rangeSlider.range:not(.min):not(.max) .rangeNub {
      border-radius: 50%;
    }
    .rangeSlider .rangeFloat {
      display: block;
      position: absolute;
      left: 50%;
      top: -0.5em;
      transform: translate(-50%, -100%);
      font-size: 1em;
      text-align: center;
      opacity: 0;
      pointer-events: none;
      white-space: nowrap;
      transition: all 0.2s ease;
      font-size: 12px;
      padding:2px 4px;
      border-radius: 2px;
      height:22px;
      line-height:18px;
    }
    .rangeSlider .rangeHandle.active .rangeFloat {
      opacity: 1;
      top: -0.2em;
      transform: translate(-50%, -100%);
    }
    .rangeSlider .rangeBar {
      position: absolute;
      display: block;
      transition: background 0.2s ease;
      border-radius: 1em;
      height: 0.5em;
      top: 0;
      user-select: none;
      z-index: 1;
    }
    .rangeSlider {
      background-color: #e0e0e0;
    }
    .rangeSlider .rangeBar {
      background-color: #9e9e9e;
    }
    .rangeSlider.focus .rangeBar {
      background-color: #757575;
    }
    .rangeSlider .rangeNub {
      background-color: #616161;
    }
    .rangeSlider.focus .rangeNub {
      background-color: #424242;
    }
    .rangeSlider .rangeHandle.active .rangeNub {
      background-color: #424242;
    }
    .rangeSlider .rangeFloat {
      color: white;
      color: #fff;
      background-color: rgba(0,0,0,0.7);
    }
    .rangeSlider.focus .rangeFloat {
      background-color: rgba(0,0,0,0.7);
    }
    .small .rangeSlider {
        height: 4px;
    }
    .small .rangeSlider .rangeHandle {
        height: 14px;
        width: 14px;
        top: 2px;
    }
    .small  .rangeSlider .rangeBar {
      height: 4px;
    }
  </style>