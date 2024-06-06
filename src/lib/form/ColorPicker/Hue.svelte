
<script lang="ts">
    import type { ColorHandler } from '$lib/form'
    import { preventDefault, stopPropagation } from '$lib/events'
    type Props = { handler: ColorHandler }
    let { handler }: Props = $props()

    let element: HTMLElement

    let isMouseDown = $state(false)
    let position =$state(0)

    const update = (position: number) => {
        const size = element.getBoundingClientRect().height
        const boundedPosition = Math.max(0, Math.min(size, position))
        const h = Math.ceil((boundedPosition / size) * 360)
        const [_, s, v] = handler.hsv
        handler.setHSV([h, s, v])
    }
    const mousedown = (e: MouseEvent) => {
        if (e.button === 0) {
            isMouseDown = true
            update(e.offsetY)
        }
    }
    const mouseup = () => {
        isMouseDown = false
    }
    const mousemove = (e: MouseEvent) => {
        if (isMouseDown)
            update(e.clientY - element.getBoundingClientRect().top)
    }
    const touch = (e: TouchEvent) => {
        e.preventDefault()
        update(e.changedTouches[0].clientY - element.getBoundingClientRect().top)
    }
    $effect(() => {
        if (typeof handler.hsv[0] === 'number' && element) {
            position = (100 * handler.hsv[0]) / 360
        }
    })
</script>
<svelte:window
    onmouseup={mouseup}
    onmousemove={mousemove}
/>
<!-- svelte-ignore a11y_no_static_element_interactions -->
<section
    bind:this={element}
    onmousedown={preventDefault(stopPropagation(mousedown))}
    ontouchstart={touch}
    ontouchmove={preventDefault(stopPropagation(touch))}
    ontouchend={touch}
>
    <div class="handle" style:top="calc({position}% - 4px)"></div>
</section>


<style>
    section {
        width: 32px;
        height: 200px;
        border-radius: 4px;
        border: 1px solid #e0e0e0;
        margin-right: 12px;
        --gradient: #ff0000, #ffff00 17.2%, #ffff00 18.2%, #00ff00 33.3%, #00ffff 49.5%, #00ffff 51.5%,
            #0000ff 67.7%, #ff00ff 83.3%, #ff0000;
        position: relative;
        background: linear-gradient(var(--gradient));
        outline: none;
        user-select: none;
    }

    div.handle {
        position: absolute;
        left: -2px;
        right: -2px;
        border: 2px solid #fff;
        box-shadow: 0px 0px 3px 0px hsla(0, 0%, 0%, 0.5);
        height: 8px;
        border-radius: 2px;
    }
</style>