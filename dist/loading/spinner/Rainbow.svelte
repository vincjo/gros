<script lang="ts">let { color = '#FF3E00', unit = 'px', duration = '3s', size = '60', pause = false } = $props();
export {};
</script>

<div class="wrapper" style="--size: {size}{unit}; --color: {color}; --duration: {duration};">
	<div class="rainbow" class:pause-animation={pause}></div>
</div>

<style>
	.wrapper {
		width: var(--size);
		height: calc(var(--size) / 2);
		overflow: hidden;
	}
	.rainbow {
		width: var(--size);
		height: var(--size);
		border-left-color: transparent;
		border-bottom-color: transparent;
		border-top-color: var(--color);
		border-right-color: var(--color);
		box-sizing: border-box;
		transform: rotate(-200deg);
		border-radius: 50%;
		border-style: solid;
		animation: var(--duration) ease-in-out 0s infinite normal none running rotate;
	}
	.pause-animation {
		animation-play-state: paused;
	}
	@keyframes rotate {
		0% {
			border-width: 10px;
		}
		25% {
			border-width: 3px;
		}
		50% {
			transform: rotate(115deg);
			border-width: 10px;
		}
		75% {
			border-width: 3px;
		}
		100% {
			border-width: 10px;
		}
	}
</style>
