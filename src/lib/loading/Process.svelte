<script lang="ts">
    import { loading } from '$lib/loading'
    import { fade } from 'svelte/transition'
    import { Jumper } from 'svelte-loading-spinners'
</script>

{#if $loading.active}
    <section transition:fade|global>
        {#if $loading.message}
            <span>{@html $loading.message}</span>
        {/if}
        <aside>
            <Jumper size="80" color="var(--primary)"/>
        </aside>
        {#if $loading.submessage}
            <strong>{@html $loading.submessage}</strong>
        {/if}
    </section>
{/if}

<style>
    section{
        position:fixed;
        z-index:99999;
        top:0;
        left:0;
        bottom:0;
        right:0;
        background:rgba(255,255,255,0.8);
    }
    aside{
        position:absolute;
        width:80px;
        height:80px;
        top:calc(50% - 80px);
        left: 50%;
        transform:translate(-50%, -50%);
    }
    span{
        display:block;
        position:absolute;
        top:calc(50% - 152px);
        left: 50%;
        transform:translate(-50%, -50%);
        color:var(--primary);
        margin:0 auto;
        font-size:28px;
        text-align:center;
    }
    strong{
        display:block;
        font-weight:normal;
        position:absolute;
        top:calc(50% - 24px);
        left: 50%;
        transform:translate(-50%, -50%);
        color:var(--primary);
        margin:0 auto;
        font-size:18px;
        text-align:center;
    }
</style>