
<script lang="ts">import { fade } from 'svelte/transition';
import Diamonds from './spinner/Diamonds.svelte';
</script>

<section transition:fade|global>
    <aside>
        <Diamonds size="104" color="var(--primary)" unit="px"/>
    </aside>
</section>

<style>
    section{
        position:fixed;
        z-index:99999;
        top:0;
        left:0;
        bottom:0;
        right:0;
        background: var(--bg, #fff);
    }
    aside{
        width:104px;
        height:32px;
        margin:24vh auto 0 auto;
    }
</style>