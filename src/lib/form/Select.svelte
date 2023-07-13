<script lang="ts">
    import Simple from './Select_Simple.svelte'
    import Multiple from './Select_Multiple.svelte'
    import type { error } from '.'

    type Option = { value?: string, label?: string, icon?: string }

    export let big = false
    export let value: string|number|boolean = ''
    export let values: (string|number|boolean)[] = []
    export let label = ''
    export let icon: string | null
    export let required = false
    export let errors: error[]
    export let field: string | null
    export let options: Option[]
    export let multiple = false
</script>

{#if multiple}
    <Multiple {big} {values} {label} {icon} {required} {errors} {field} {options}/>
{:else}
    <Simple {big} {value} {label} {icon} {required} {errors} {field} {options}/>
{/if}