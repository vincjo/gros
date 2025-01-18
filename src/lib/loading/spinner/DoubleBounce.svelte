<script lang="ts">
	import type { SpinnerTypes } from './spinner.type'
	import { range, durationUnitRegex } from './utils'
	let {
        color = '#FF3E00',
        unit = 'px',
        duration = '2.1s',
        size = '60',
        pause = false
    }: SpinnerTypes = $props()

	let durationUnit = $state<string>(duration.match(durationUnitRegex)?.[0] ?? 's')
	let durationNum  = $state<string>(duration.replace(durationUnitRegex, ''))
</script>

<div class="wrapper" style="--size: {size}{unit}; --color: {color}">
	{#each range(2, 1) as version}
		<div
			class={[ 'circle', { 'pause-animation': pause }]}
			style="animation: {duration} {version === 1
				? `${(+durationNum - 0.1) / 2}${durationUnit}`
				: `0s`} infinite ease-in-out"
		></div>
	{/each}
</div>

<style>
	.wrapper {
		position: relative;
		width: var(--size);
		height: var(--size);
	}
	.circle {
		position: absolute;
		width: var(--size);
		height: var(--size);
		background-color: var(--color);
		border-radius: 100%;
		opacity: 0.6;
		top: 0;
		left: 0;
		animation-fill-mode: both;
		animation-name: bounce !important;
	}
	.pause-animation {
		animation-play-state: paused;
	}
	@keyframes bounce {
		0%,
		100% {
			transform: scale(0);
		}
		50% {
			transform: scale(1);
		}
	}
</style>
