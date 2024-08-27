
<script lang="ts">
    import type { ColorHandler } from '$lib/form'
    import { preventDefault, stopPropagation } from '$lib/event'
    type Props = { handler: ColorHandler } 
    let { handler }: Props = $props()

	let element: HTMLElement
	let position: number = $state(0)
    let pct = $state(Math.ceil(handler.opacity * 100))
	let isMouseDown = $state(false)

	const update = (position: number): void => {
		const size = element.getBoundingClientRect().width
		const boundedPos = Math.max(0, Math.min(size, position))
		handler.opacity = boundedPos / size
	}
	const mousedown = (e: MouseEvent) => {
		if (e.button === 0) {
			isMouseDown = true
			update(e.offsetX)
		}
	}
	const mouseup = () => {
		isMouseDown = false
	}
	const mousemove = (e: MouseEvent) => {
		if (isMouseDown)
            update(e.clientX - element.getBoundingClientRect().left)
	}
	const touch = (e: TouchEvent) => {
		e.preventDefault()
		update(e.changedTouches[0].clientX - element.getBoundingClientRect().left)
	}
    $effect(() => {
        pct = Math.ceil(handler.opacity * 100)
        if (typeof handler.opacity === 'number' && element) {
            position = 100 * handler.opacity
        }
    })

</script>


<svelte:window onmouseup={mouseup} onmousemove={mousemove}/>

<section class="flex">
    <div class="label flex">
        <i class="micon">opacity</i>
    </div>
    <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
    <aside
        style="--opacity-color: {handler.hex}"
        bind:this={element}
        onmousedown={preventDefault(stopPropagation(mousedown))}
        ontouchstart={touch}
        ontouchmove={preventDefault(stopPropagation(touch))}
        ontouchend={touch}
    >
        <div class="handle" style:left="calc({position}% - 4px)"></div>
    </aside>
    <input type="number" bind:value={pct} min="0" max="100" step="1" oninput={() => handler.opacity = (pct / 100)}/> 
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