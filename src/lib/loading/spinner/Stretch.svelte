<script lang="ts">
	import type { SpinnerTypes } from './spinner.type'
	import { range, durationUnitRegex } from './utils'
	let {
        color = '#FF3E00',
        unit = 'px',
        duration = '1.2s',
        size = '60',
        pause = false
    }: SpinnerTypes = $props()

	let durationUnit = $state<string>(duration.match(durationUnitRegex)?.[0] ?? 's')
	let durationNum  = $state<string>(duration.replace(durationUnitRegex, ''))
</script>

<div class="wrapper" style="--size: {size}{unit}; --color: {color}; --duration: {duration}">
	{#each range(5, 1) as version}
		<div
			class={[ 'rect', { 'pause-animation': pause }]}
			style="animation-delay: {(version - 1) * (+durationNum / 12)}{durationUnit}"
		></div>
	{/each}
</div>

<style>
	.wrapper {
		height: var(--size);
		width: var(--size);
		display: inline-block;
		text-align: center;
		font-size: 10px;
	}
	.rect {
		height: 100%;
		width: 10%;
		display: inline-block;
		margin-right: 4px;
		transform: scaleY(0.4);
		background-color: var(--color);
		animation: stretch var(--duration) ease-in-out infinite;
	}
	.pause-animation {
		animation-play-state: paused;
	}
	@keyframes stretch {
		0%,
		40%,
		100% {
			transform: scaleY(0.4);
		}
		20% {
			transform: scaleY(1);
		}
	}
</style>
