<script lang="ts">
	import type { SpinnerTypes } from './spinner.type';
	import { calculateRgba } from './utils';
	let {
        color = '#FF3E00',
        unit = 'px',
        duration = '1.3s',
        size = '60',
        pause = false
    }: SpinnerTypes = $props()
    let rgba = $state<string>(calculateRgba(color, 0.2))
    $effect(() => {
        color
        rgba = calculateRgba(color, 0.2)
    })
</script>

<div
	class={[ 'wrapper', { 'pause-animation': pause }]}
	style="--size: {size}{unit}; --color: {color}; --rgba: {rgba}; --duration: {duration};"
>
	<div class={[ 'spinner-inner', { 'pause-animation': pause }]}>
		<div id="top" class="mask">
			<div class="plane"></div>
		</div>
		<div id="middle" class="mask">
			<div class="plane"></div>
		</div>
		<div id="bottom" class="mask">
			<div class="plane"></div>
		</div>
	</div>
</div>

<style>
	.wrapper {
		height: var(--size);
		width: var(--size);
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.wrapper * {
		line-height: 0;
		box-sizing: border-box;
	}
	.spinner-inner {
		height: var(--size);
		width: var(--size);
		transform: scale(calc(var(--size) / 70));
	}

	.mask {
		position: absolute;
		border-radius: 2px;
		overflow: hidden;
		perspective: 1000;
		backface-visibility: hidden;
	}

	.plane {
		background: var(--color);
		width: 400%;
		height: 100%;
		position: absolute;
		z-index: 100;
		perspective: 1000;
		backface-visibility: hidden;
	}

	#top .plane {
		z-index: 2000;
		animation: trans1 var(--duration) ease-in infinite 0s backwards;
	}
	#middle .plane {
		transform: translate3d(0px, 0, 0);
		background: var(--rgba);
		animation: trans2 var(--duration) linear infinite calc(var(--duration) / 4) backwards;
	}
	#bottom .plane {
		z-index: 2000;
		animation: trans3 var(--duration) ease-out infinite calc(var(--duration) / 2) backwards;
	}
	#top {
		width: 53px;
		height: 20px;
		left: 20px;
		top: 5px;
		transform: skew(-15deg, 0);
		z-index: 100;
	}
	#middle {
		width: 33px;
		height: 20px;
		left: 20px;
		top: 21px;
		transform: skew(-15deg, 40deg);
	}
	#bottom {
		width: 53px;
		height: 20px;
		top: 35px;
		transform: skew(-15deg, 0);
	}

	.pause-animation .plane {
		animation-play-state: paused;
	}

	@keyframes trans1 {
		from {
			transform: translate3d(53px, 0, 0);
		}
		to {
			transform: translate3d(-250px, 0, 0);
		}
	}
	@keyframes trans2 {
		from {
			transform: translate3d(-160px, 0, 0);
		}
		to {
			transform: translate3d(53px, 0, 0);
		}
	}
	@keyframes trans3 {
		from {
			transform: translate3d(53px, 0, 0);
		}
		to {
			transform: translate3d(-220px, 0, 0);
		}
	}
</style>
