<script lang="ts">
    import type ColorHandler from './ColorHandler'

    export let handler: ColorHandler

    const hsv = handler.getHSV()
    const hsl = handler.getHSL()
    const hex = handler.getHEX()
    const rgb = handler.getRGB()

    let position = { x: 0, y: 0 }

    let element: HTMLElement


	let isMouseDown = false


    const clamp = (value: number, min: number, max: number): number => {
		return Math.min(Math.max(min, value), max)
	}

	const handleClick = (e: { offsetX: number; offsetY: number }) => {
		const mouse = { x: e.offsetX, y: e.offsetY }
		const width = element.getBoundingClientRect().width
		const height = element.getBoundingClientRect().height

		const s = Math.ceil(clamp(mouse.x / width, 0, 1) * 100)
		const v = Math.ceil(clamp((height - mouse.y) / height, 0, 1) * 100)

        handler.setHSV([$hsv[0], s, v])
	}

	const pick = (e: MouseEvent) => {
		if (e.button === 0) {
			isMouseDown = true
			handleClick(e)
		}
	}

    const mouseMove = (e: MouseEvent) => {
		if (isMouseDown) {
			handleClick({
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

    const mouseUp = () => {
		isMouseDown = false
	}



    const touch = (e: TouchEvent) => {
		e.preventDefault()
		handleClick({
			offsetX: e.changedTouches[0].clientX - element.getBoundingClientRect().left,
			offsetY: e.changedTouches[0].clientY - element.getBoundingClientRect().top
		})
	}

	$: if (typeof $hsv[1] === 'number' && typeof $hsv[2] === 'number' && element)
		position = {
			x: $hsv[1],
			y: 100 - $hsv[2]
		}
</script>

<svelte:window
	on:mouseup={mouseUp}
	on:mousemove={mouseMove}
/>

<section
    bind:this={element}
    style:--hue-color={`hsl(${Math.ceil($hsv[0])},100%,50%)`}
    on:mousedown|preventDefault|stopPropagation={pick}
    on:touchstart={touch}
    on:touchmove|preventDefault|stopPropagation={touch}
    on:touchend={touch}
>
    <div
        class="handle"
        style:background-color={$hex}
        style:left="calc({position.x}% + 2px)"
        style:top="calc({position.y}% + 2px)" 
    />
</section>

<style>
    section {
        width: 240px;
        user-select: none;
        height: 200px;
        position: relative;
        border-radius: 4px;
        background: linear-gradient(transparent, #000000), linear-gradient(0.25turn, #ffffff, transparent), var(--hue-color);
        border: 1px solid #e0e0e0;
    }

    div.handle {
        width: 14px;
        height: 14px;
        position: absolute;
        transform: translate(-50%, -50%);
        border-radius: 50%;
        border: 2px solid #ffffff;
        box-shadow: 0px 0px 3px 0px hsla(0, 0%, 0%, 0.5);
    }
</style>