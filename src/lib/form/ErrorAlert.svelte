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
    }
</script>


{#if message}
    <div class="tooltip">
        <Tooltip left content={message}/>
    </div>
{/if}

<style>
    div{
        background:#e57373;
        width: 8px;
        height: 8px;
        border-radius:50%;
        position:absolute;
        right:-2px; 
        top:-2px;
        font-size:14px;
    }
    div :global(.tooltip){color:#e57373;background:#ffebee}
</style>