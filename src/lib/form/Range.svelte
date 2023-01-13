<script>
    import RangeSlider from './RangeSlider.svelte'
    export let big = false
    export let values
    export let min = 0
    export let max = 100
    export let tooltip = true
    export let pips = false
    export let suffix = ''
    export let prefix = ''
</script>

{#if values.length === 1}
    <RangeSlider bind:values range="min" float={tooltip}  {min} {max} {suffix} {prefix} {big}/>
{:else}
    <RangeSlider bind:values range pushy pips={pips} float={tooltip}  {min} {max} {suffix} {prefix} first="label" last="label" {big}/>
{/if}