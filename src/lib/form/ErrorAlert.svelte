<script>
    import { Tooltip } from '$lib/tooltip'
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
        console.log(message)
    }
</script>


{#if message}
    <i class="material-icons tooltip">
        <Tooltip position={'left'} content={message}/>
        error
    </i>
{/if}

<style>
    i{color:#e57373;position:absolute;right:8px;font-size:18px;}
    i :global(.tooltip){color:#e57373;background:rgba(255,255,255,0.9)}
</style>