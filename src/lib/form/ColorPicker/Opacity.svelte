<script lang="ts">
    import type ColorHandler from './ColorHandler'

    export let handler: ColorHandler

    const opacity = handler.getOpacity()
    const hex = handler.getHEX()
    $: pct = Math.ceil($opacity * 100)
	let element: HTMLElement

	let isMouseDown = false
	let position: number

	const handleClick = (position: number): void => {
		const size = element.getBoundingClientRect().width
		const boundedPos = Math.max(0, Math.min(size, position))
		handler.setOpacity(boundedPos / size)
	}
	const mouseDown = (e: MouseEvent) => {
		if (e.button === 0) {
			isMouseDown = true
			handleClick(e.offsetX)
		}
	}
	const mouseUp = () => {
		isMouseDown = false
	}
	const mouseMove = (e: MouseEvent) => {
		if (isMouseDown)
            handleClick(e.clientX - element.getBoundingClientRect().left)
	}
	const touch = (e: TouchEvent) => {
		e.preventDefault()
		handleClick(e.changedTouches[0].clientX - element.getBoundingClientRect().left)
	}
	$: if (typeof $opacity === 'number' && element) {
        position = 100 * $opacity
    }
</script>


<svelte:window
	on:mouseup={mouseUp}
	on:mousemove={mouseMove}
/>

<section class="flex">
    <div class="label flex">
        <i class="micon">opacity</i>
    </div>
    <aside
        style="--opacity-color: {$hex}"
        bind:this={element}
        on:mousedown|preventDefault|stopPropagation={mouseDown}
        on:touchstart={touch}
        on:touchmove|preventDefault|stopPropagation={touch}
        on:touchend={touch}
    >
        <div
            class="handle"
            style:left="calc({position}% - 4px)"
        />
    </aside>
    <input type="number" bind:value={pct} min="0" max="100" step="1" on:input={() => handler.setOpacity(pct / 100)}/> 
</section>




<style>
    section {
        margin-top: 12px;
		width: 284px;
    }
	aside:after {
		position: absolute;
		content: '';
		inset: 0;
		background: linear-gradient(0.25turn, #00000000, var(--opacity-color));
		z-index: 0;
	}
	aside {
		position: relative;
		height: 24px;
        width: 100%;
        border: 1px solid #e0e0e0;
        border-radius: 4px;
		background-image: linear-gradient(45deg, #eee 25%, transparent 25%, transparent 75%, #eee 75%),
			linear-gradient(45deg, #eee 25%, transparent 25%, transparent 75%, #eee 75%);
		background-size: var(--pattern-size-2x, 12px) var(--pattern-size-2x, 12px);
		background-position: 0 0, var(--pattern-size, 6px) var(--pattern-size, 6px);
		outline: none;
		user-select: none;
	}

    div.handle {
        position: absolute;
        top: -2px;
        bottom: -2px;
        border: 2px solid #eee;
        box-shadow: 0px 0px 3px 0px hsla(0, 0%, 0%, 0.5);
        width: 8px;
        z-index: 2;
        background: transparent;
        border-radius: 2px;
    }

    div.label {
        min-width: 32px;
        margin-right: 12px;
        justify-content: center;
    }
    div.label i {
        font-size: 20px;
        color: #616161;
    }
    input[type=number] {
        padding: 0;
        height: 28px;
        border-radius: 2px;
        width: 48px;
        text-align: center;
        margin-left: 12px;
    }
</style>