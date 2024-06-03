<svelte:options runes={true}/>
<script lang="ts">
    import type { Error, Option } from './index'
    import Simple from './Select/Simple.svelte'
    import Multiple from './Select/Multiple.svelte'

    type Props = {
        big         ?: boolean,
        value       ?:  string | number |boolean,
        values      ?: (string | number |boolean)[],
        label       ?: string,
        icon        ?: string,
        required    ?: boolean,
        errors      ?: Error[],
        field       ?: string | null,
        options     ?: Option[] | string[]
        multiple    ?: boolean,
    }

    let {
        big         = false,
        value       = $bindable(),
        values      = [],
        label       = '',
        icon        = null,
        required    = false,
        errors      = [],
        field       = '',
        options     = [],
        multiple    = false,
    }: Props = $props()

    const args = (typeof options[0] === 'string') ? options.map((option: string) => ({ value: option })) : options as Option[]
</script>

{#if multiple}
    <Multiple {big} values={values} {label} {icon} {required} {errors} {field} options={args}/>
{:else}
    <Simple {big} bind:value={value} {label} {icon} {required} {errors} {field} options={args}/>
{/if}