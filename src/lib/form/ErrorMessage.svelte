<svelte:options runes={true}/>
<script lang="ts">
    import type { Error } from './index'
    let { errors, field }: { errors: Error[], field: string } = $props()

    let message = $state(null)

    $effect(() => {
        errors
        getMessage()
    })

    const getMessage = () => {
        if (!errors || errors.length === 0) {
            message = null
            return
        }
        const error = errors.find(item => item.field === field)
        message = error?.message
    }
</script>


{#if message}
    <span>
        {message}
    </span>
{/if}

<style>
    span{
        color:#e57373;
        font-size:11px;
    }
</style>