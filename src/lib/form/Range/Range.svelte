<script lang="ts">
    import Slider from './Slider.svelte'

    type Props = {
        big?: boolean,
        value: number[],
        min?: number,
        max?: number,
        step?: number,
        tooltip?: boolean,
        pips?: boolean,
        suffix?: string,
        prefix?: string
    }

    let {
        big = false,
        value,
        min = 0,
        max = 100,
        step = 1,
        tooltip = true,
        pips = false,
        suffix = '',
        prefix = '',
    }: Props = $props()

</script>

{#if value.length === 1}
    <Slider bind:values={value} {step} range="min" float={tooltip} {min} {max} {suffix} {prefix} {big}/>
{:else}
    <Slider bind:values={value} {step} range pushy pips={pips} float={tooltip}  {min} {max} {suffix} {prefix} first="label" last="label" {big}/>
{/if}