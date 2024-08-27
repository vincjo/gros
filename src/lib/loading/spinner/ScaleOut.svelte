<script lang="ts">
	import type { SpinnerTypes } from './spinner.type';
	let {
        color = '#FF3E00',
        unit = 'px',
        duration = '1s',
        size = '60',
        pause = false
    }: SpinnerTypes = $props()
</script>

<div
	class="wrapper"
	style="--size: {size}{unit}; --color: {color}; --duration: {duration}; --duration: {duration};"
>
	<div class="circle" class:pause-animation={pause}></div>
</div>

<style>
	.wrapper {
		width: var(--size);
		height: var(--size);
	}
	.circle {
		width: var(--size);
		height: var(--size);
		background-color: var(--color);
		animation-duration: var(--duration);
		border-radius: 100%;
		display: inline-block;
		animation: scaleOut var(--duration) ease-in-out infinite;
	}
	.pause-animation {
		animation-play-state: paused;
	}
	@keyframes scaleOut {
		0% {
			transform: scale(0);
		}
		100% {
			transform: scale(1);
			opacity: 0;
		}
	}
</style>
