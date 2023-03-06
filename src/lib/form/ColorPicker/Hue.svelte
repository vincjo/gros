<script lang="ts">
    import type ColorHandler from './ColorHandler'
    export let handler: ColorHandler

    const hsv = handler.getHSV()

	let element: HTMLElement

	let isMouseDown = false
	let position = 0

	const handleClick = (position: number) => {
		const size = element.getBoundingClientRect().height
		const boundedPosition = Math.max(0, Math.min(size, position))
		const h = Math.ceil((boundedPosition / size) * 360)
        handler.setHSV([h, $hsv[1], $hsv[2]])
	}
	const mouseDown = (e: MouseEvent) => {
		if (e.button === 0) {
			isMouseDown = true
			handleClick(e.offsetY)
		}
	}
	const mouseUp = () => {
		isMouseDown = false
	}
	const mouseMove = (e: MouseEvent) => {
		if (isMouseDown)
			handleClick(e.clientY - element.getBoundingClientRect().top)
	}
	const touch = (e: TouchEvent) => {
		e.preventDefault()
		handleClick(e.changedTouches[0].clientY - element.getBoundingClientRect().top)
	}
	$: if (typeof $hsv[0] === 'number' && element) {
        position = (100 * $hsv[0]) / 360
    }
</script>
<svelte:window
	on:mouseup={mouseUp}
	on:mousemove={mouseMove}
/>
<section
    bind:this={element}
    on:mousedown|preventDefault|stopPropagation={mouseDown}
    on:touchstart={touch}
    on:touchmove|preventDefault|stopPropagation={touch}
    on:touchend={touch}
>
    <div
        class="handle"
        style:top="calc({position}% - 4px)" 
    />

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