
<script lang="ts">import { fadescale } from '../transition';
import { modal } from './';
import { fade } from 'svelte/transition';
import { cubicInOut } from 'svelte/easing';
import { draggable } from '@neodrag/svelte';
import { clickOutside } from '../action';
const close = () => modal.close();
</script>

{#if modal.isActive}
    {@const Component = modal.component}
    <section transition:fade|global={{ duration: 150 }}>
        <article 
            use:draggable={{ handle: '.modal.handle' }} 
            use:clickOutside={close}
            class="z-depth-2"
            transition:fadescale|global={{ duration: 150, easing: cubicInOut, baseScale: 0.5 }}
        >
            <Component props={modal.props} {close}/>
        </article>

    </section>
{/if}


<style>
    section{
        display:flex;
        align-items:center;
        justify-content:center;
        position:fixed;
        top:0;
        left:0;
        bottom:0;
        right:0;
        background:rgba(40,40,40,0.56);
        z-index:9999;
    }

    article{
        max-height:80vh;
        background:var(--bg-darken, #fff);
        margin:calc(auto - 4vh) auto;
        position: relative;
        border-radius:4px;
    }
</style>