<script lang="ts">
    import { fade } from 'svelte/transition'
    import { Diamonds } from 'svelte-loading-spinners'
</script>

<aside transition:fade>
    <Diamonds size="40" color="var(--primary)" duration="1s"/>
</aside>

<style>
    aside{
        width:100%;
        height:100%;
        background:rgba(255,255,255,0.3);
        display:flex;
        align-items:center;
        justify-content:center;
    }
</style>