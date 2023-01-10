<script>
    import Waiting from './Waiting.svelte'
    import Bootstrap from './Bootstrap.svelte'
    import Process from './Process.svelte'
    export let type
</script>

{#if type === 'process'}
    <Process/>
{:else if type === 'bootstrap'}
    <Bootstrap/>
{:else}
    <Waiting/>
{/if}