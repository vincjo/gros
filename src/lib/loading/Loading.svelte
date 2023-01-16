<script>
    import Waiting from './Waiting.svelte'
    import Bootstrap from './Bootstrap.svelte'
    import Process from './Process.svelte'
    export let process
    export let bootstrap
</script>

{#if process}
    <Process/>
{:else if bootstrap}
    <Bootstrap/>
{:else}
    <Waiting/>
{/if}