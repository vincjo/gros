<script lang="ts">
	import type { SpinnerTypes } from './spinner.type';
	import { range, durationUnitRegex } from './utils';
	let {
        color = '#FF3E00',
        unit = 'px',
        duration = '1.25s',
        size = '60',
        pause = false
    }: SpinnerTypes = $props()

	let durationUnit = $state<string>(duration.match(durationUnitRegex)?.[0] ?? 's')
	let durationNum  = $state<string>(duration.replace(durationUnitRegex, ''))
</script>

<div class="wrapper" style="--size: {size}{unit}; --color: {color}; --duration: {duration};">
	{#each range(10, 0) as version}
		<div
			class={[ 'bar', { 'pause-animation': pause }]}
			style="left: {version * (+size / 5 + (+size / 15 - +size / 100)) +
				unit}; animation-delay: {version * (+durationNum / 8.3)}{durationUnit};"
		></div>
	{/each}
</div>

<style>
	.wrapper {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		width: calc(var(--size) * 2.5);
		height: var(--size);
		overflow: hidden;
	}
	.bar {
		position: absolute;
		top: calc(var(--size) / 10);
		width: calc(var(--size) / 5);
		height: calc(var(--size) / 10);
		margin-top: calc(var(--size) - var(--size) / 10);
		transform: skewY(0deg);
		background-color: var(--color);
		animation: motion var(--duration) ease-in-out infinite;
	}
	.pause-animation {
		animation-play-state: paused;
	}
	@keyframes motion {
		25% {
			transform: skewY(25deg);
		}
		50% {
			height: 100%;
			margin-top: 0;
		}
		75% {
			transform: skewY(-25deg);
		}
	}
</style>
