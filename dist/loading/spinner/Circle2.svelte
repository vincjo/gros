<script lang="ts">let { colorOuter = '#FF3E00', colorCenter = '#40B3FF', colorInner = '#676778', durationMultiplier = 1, durationOuter = `${durationMultiplier * 2}s`, durationInner = `${durationMultiplier * 1.5}s`, durationCenter = `${durationMultiplier * 3}s`, unit = 'px', size = '60', pause = false } = $props();
export {};
</script>

<div
	class="circle"
	class:pause-animation={pause}
	style="--size: {size}{unit}; --colorInner: {colorInner}; --colorCenter: {colorCenter}; --colorOuter: {colorOuter}; --durationInner: {durationInner}; --durationCenter: {durationCenter}; --durationOuter: {durationOuter};"
></div>

<style>
	.circle {
		width: var(--size);
		height: var(--size);
		box-sizing: border-box;
		position: relative;
		border: 3px solid transparent;
		border-top-color: var(--colorOuter);
		border-radius: 50%;
		animation: circleSpin var(--durationOuter) linear infinite;
	}
	.circle::before,
	.circle::after {
		content: '';
		box-sizing: border-box;
		position: absolute;
		border: 3px solid transparent;
		border-radius: 50%;
	}
	.circle::after {
		border-top-color: var(--colorInner);
		top: 9px;
		left: 9px;
		right: 9px;
		bottom: 9px;
		animation: circleSpin var(--durationInner) linear infinite;
	}
	.circle::before {
		border-top-color: var(--colorCenter);
		top: 3px;
		left: 3px;
		right: 3px;
		bottom: 3px;
		animation: circleSpin var(--durationCenter) linear infinite;
	}
	.pause-animation,
	.pause-animation::after,
	.pause-animation::before {
		animation-play-state: paused;
	}

	@keyframes circleSpin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
</style>
