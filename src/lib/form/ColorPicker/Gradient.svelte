<script lang="ts">
    import type { ColorHandler } from '$lib/form'
    import { preventDefault, stopPropagation } from '$lib/event-modifier'
    type Props = { handler: ColorHandler }
    let { handler }: Props = $props()

    let element: HTMLElement
    let position = $state({ x: 0, y: 0 })
	let isMouseDown = $state(false)

    const clamp = (value: number, min: number, max: number): number => {
		return Math.min(Math.max(min, value), max)
	}

	const update = (e: { offsetX: number, offsetY: number }) => {
		const mouse = { x: e.offsetX, y: e.offsetY }
		const width = element.getBoundingClientRect().width
		const height = element.getBoundingClientRect().height

		const s = Math.ceil(clamp(mouse.x / width, 0, 1) * 100)
		const v = Math.ceil(clamp((height - mouse.y) / height, 0, 1) * 100)

        handler.setHSV([handler.hsv[0], s, v])
	}

	const pick = (e: MouseEvent) => {
		if (e.button === 0) {
			isMouseDown = true
			update(e)
		}
	}
    const mousemove = (e: MouseEvent) => {
		if (isMouseDown) {
			update({
				offsetX: Math.max(
					0,
					Math.min(
						element.getBoundingClientRect().width,
						e.clientX - element.getBoundingClientRect().left
					)
				),
				offsetY: Math.max(
					0,
					Math.min(
						element.getBoundingClientRect().height,
						e.clientY - element.getBoundingClientRect().top
					)
				)
			})
        }
	}

    const mouseup = () => {
		isMouseDown = false
	}

    const touch = (e: TouchEvent) => {
		e.preventDefault()
		update({
			offsetX: e.changedTouches[0].clientX - element.getBoundingClientRect().left,
			offsetY: e.changedTouches[0].clientY - element.getBoundingClientRect().top
		})
	}

	$effect(() => {
		if (typeof handler.hsv[1] === 'number' && typeof handler.hsv[2] === 'number' && element) {
			position = { x: handler.hsv[1], y: 100 - handler.hsv[2] }
		}
	})

</script>

<svelte:window onmouseup={mouseup} onmousemove={mousemove}/>

<section
	role="button"
	tabindex="0"
    bind:this={element}
    style:--hue-color={`hsl(${Math.ceil(handler.hsv[0])},100%,50%)`}
    onmousedown={preventDefault(stopPropagation(pick))}
    ontouchstart={touch}
    ontouchmove={preventDefault(stopPropagation(touch))}
    ontouchend={touch}
>
    <div
        class="handle"
        style:background-color={handler.hex}
        style:left="calc({position.x}% + 2px)"
        style:top="calc({position.y}% + 2px)" 
    ></div>
</section>

<style>
    section {
        width: 240px;
        user-select: none;
        height: 200px;
        position: relative;
        border-radius: 4px;
        background: linear-gradient(transparent, #000000), linear-gradient(0.25turn, #ffffff, transparent), var(--hue-color);
        border: 1px solid var(--grey, #e0e0e0);
    }

    div.handle {
        width: 14px;
        height: 14px;
        position: absolute;
        transform: translate(-50%, -50%);
        border-radius: 50%;
        border: 2px solid #fff;
        box-shadow: 0px 0px 3px 0px hsla(0, 0%, 0%, 0.5);
    }
</style>