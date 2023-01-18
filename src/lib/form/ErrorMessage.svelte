<script lang="ts">
    import type { error } from './'
    export let errors: error[]
    export let field: string

    let message = null

    $: errors, getMessage()

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