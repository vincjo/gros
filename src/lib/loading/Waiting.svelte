
<script lang="ts">
    import { fade } from 'svelte/transition'
    import Jumper   from './spinner/Jumper.svelte'
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
        background:var(--bg-opac, rgba(255,255,255,0.3));
        display:flex;
        border-radius: inherit;
        align-items:center;
        justify-content:center;
    }
</style>