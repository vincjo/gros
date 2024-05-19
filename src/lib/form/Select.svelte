<script lang="ts">
    import Simple from './Select/Simple.svelte'
    import Multiple from './Select/Multiple.svelte'
    import type { error } from '.'

    type Option = { value?: string, label?: string, icon?: string }

    export let big = false
    export let value: string|number|boolean = ''
    export let values: (string|number|boolean)[] = []
    export let label = ''
    export let icon: string | null = null
    export let required = false
    export let errors: error[] = []
    export let field: string | null = ''
    export let options: Option[] | string[] = []
    export let multiple = false

    const pasedOptions = (typeof options[0] === 'string') ? options.map((option: string) => ({ value: option })) : options as Option[]
</script>

{#if multiple}
    <Multiple {big} bind:values={values} {label} {icon} {required} {errors} {field} options={pasedOptions}/>
{:else}
    <Simple {big} bind:value={value} {label} {icon} {required} {errors} {field} options={pasedOptions}/>
{/if}