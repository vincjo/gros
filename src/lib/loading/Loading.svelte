<script lang="ts">
    import Waiting from './Waiting.svelte'
    import Bootstrap from './Bootstrap.svelte'
    import Process from './Process.svelte'
    export let process: boolean | null
    export let bootstrap: boolean | null
</script>

{#if process}
    <Process/>
{:else if bootstrap}
    <Bootstrap/>
{:else}
    <Waiting/>
{/if}