<script lang="ts">
	import type { SpinnerTypes } from './spinner.type';
	let {
        color = '#FF3E00',
        unit = 'px',
        duration = '1.25s',
        size = '60',
        pause = false
    }: SpinnerTypes = $props()
</script>

<div class="wrapper" style="--size: {size}{unit}; --color: {color}; --duration: {duration};">
	<div class={[ 'firework', { 'pause-animation': pause }]}></div>
</div>

<style>
	.wrapper {
		width: calc(var(--size) * 1.3);
		height: calc(var(--size) * 1.3);
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.firework {
		border: calc(var(--size) / 10) dotted var(--color);
		width: var(--size);
		height: var(--size);
		border-radius: 50%;
		animation: fire var(--duration) cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
	}
	.pause-animation {
		animation-play-state: paused;
	}

	@keyframes fire {
		0% {
			opacity: 1;
			transform: scale(0.1);
		}
		25% {
			opacity: 0.85;
		}
		100% {
			transform: scale(1);
			opacity: 0;
		}
	}
</style>
