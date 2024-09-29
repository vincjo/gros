
<script lang="ts">import Waiting from './Waiting.svelte';
import Bootstrap from './Bootstrap.svelte';
import Process from './Process.svelte';
let { process = false, bootstrap = false } = $props();
</script>

{#if process}
    <Process/>
{:else if bootstrap}
    <Bootstrap/>
{:else}
    <Waiting/>
{/if}