<script>
    import { goto } from '$app/navigation'
    import { onMount } from 'svelte'
    import Folder from './Folder.svelte'
    import { TreeHandler, Sortable } from '$lib/treestructure'
    export let tree
    const handler = new TreeHandler()
    const url = handler.getURLParams()

    onMount(() => {
        goto(url)
    })
</script>

<button class="btn" on:click={() => handler.combine()}>
    <i class="micon">vertical_align_center</i>
    COMBINE ALL
</button>

<section class="thin-scrollbar">
    <Sortable type="folder" scope={0}>
        {#each tree.folders as folder (folder.id)}
            <Folder {handler} {folder}/>
        {/each}
    </Sortable>
</section>


<style>
    button {
        margin-top: 80px;
        color: var(--primary);

    }
    section {
        position: relative;
        overflow-y: auto;
        height: calc(100vh - 160px);
        margin-bottom: 80px;
        width: 600px;
        border: 1px solid #e0e0e0;
        border-radius: 8px;
        padding: 24px;
    }
</style>