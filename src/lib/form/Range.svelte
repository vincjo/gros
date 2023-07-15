<script lang="ts">
    import Slider from './Range/Slider.svelte'
    export let big = false
    export let value: number[]
    export let min = 0
    export let max = 100
    export let step = 1
    export let tooltip = true
    export let pips = false
    export let suffix = ''
    export let prefix = ''
</script>

{#if value.length === 1}
    <Slider bind:values={value} {step} range="min" float={tooltip} {min} {max} {suffix} {prefix} {big}/>
{:else}
    <Slider bind:values={value} {step} range pushy pips={pips} float={tooltip}  {min} {max} {suffix} {prefix} first="label" last="label" {big}/>
{/if}