<script lang="ts">import { range, durationUnitRegex } from './utils';
let { color = '#FF3E00', unit = 'px', duration = '1s', size = '60', pause = false } = $props();
let durationUnit = $state(duration.match(durationUnitRegex)?.[0] ?? 's');
let durationNum = $state(duration.replace(durationUnitRegex, ''));
</script>

<div class="wrapper" style="--size: {size}{unit}; --color: {color}; --duration: {duration};">
	{#each range(3, 1) as version}
		<div
			class="circle"
			class:pause-animation={pause}
			style="animation-delay: {(+durationNum / 3) * (version - 1) + durationUnit};"
		></div>
	{/each}
</div>

<style>
	.wrapper {
		width: var(--size);
		height: var(--size);
	}
	.circle {
		border-radius: 100%;
		animation-fill-mode: both;
		position: absolute;
		opacity: 0;
		width: var(--size);
		height: var(--size);
		background-color: var(--color);
		animation: bounce var(--duration) linear infinite;
	}
	.pause-animation {
		animation-play-state: paused;
	}
	@keyframes bounce {
		0% {
			opacity: 0;
			transform: scale(0);
		}
		5% {
			opacity: 1;
		}
		100% {
			opacity: 0;
			transform: scale(1);
		}
	}
</style>
