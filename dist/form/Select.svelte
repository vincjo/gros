<script lang="ts">import Simple from './Select/Simple.svelte';
import Multiple from './Select/Multiple.svelte';
let { big = false, value = $bindable(), values = [], label = '', icon = null, required = false, errors = [], field = '', options = [], multiple = false, } = $props();
const args = (typeof options[0] === 'string') ? options.map((option) => ({ value: option })) : options;
</script>

{#if multiple}
    <Multiple {big} values={values} {label} {icon} {required} {errors} {field} options={args}/>
{:else}
    <Simple {big} bind:value={value} {label} {icon} {required} {errors} {field} options={args}/>
{/if}