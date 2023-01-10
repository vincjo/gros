<script>
    export let errors
    export let field

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
    <i class="material-icons">error</i>
{/if}

<style>
    i{color:#e57373;position:absolute;right:8px;font-size:18px;}
</style>