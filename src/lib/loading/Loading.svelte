
<script lang="ts">
    import Waiting      from './Waiting.svelte'
    import Bootstrap    from './Bootstrap.svelte'
    import Process      from './Process.svelte'
    type Props = { process ?: boolean, bootstrap ?: boolean }
    let { 
        process = false,
        bootstrap = false
    }: Props = $props()
</script>

{#if process}
    <Process/>
{:else if bootstrap}
    <Bootstrap/>
{:else}
    <Waiting/>
{/if}