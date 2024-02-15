<script lang="ts">
    import { fade } from 'svelte/transition'
    import { Jumper } from 'svelte-loading-spinners'
</script>

<aside transition:fade|global>
    <Jumper size="64" color="var(--primary)"/>
</aside>

<style>
    aside{
        position: absolute;
        z-index:99999;
        top:0;
        left:0;
        bottom:0;
        right:0;
        background:rgba(255,255,255,0.3);
        display:flex;
        align-items:center;
        justify-content:center;
    }
</style>