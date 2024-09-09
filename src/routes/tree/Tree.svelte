<script lang="ts">
    import { goto } from '$app/navigation'
    import { onMount } from 'svelte'
    import { data } from './data'
    import Folder from './Folder.svelte'
    import { TreeHandler, Sortable } from '$lib/tree'
    const tree = new TreeHandler()
    const url = tree.getURLParams()

    onMount(() => {
        goto(url)
    })
</script>

<button class="btn" onclick={() => tree.combine()}>
    <i class="micon">vertical_align_center</i>
    COMBINE ALL
</button>

<section class="thin-scrollbar">
    <Sortable type="folder" scope={0}>
        {#each data.folders as folder (folder.id)}
            <Folder {tree} {folder} level={0} parent={folder.parent_id}/>
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
        height: fit-content;
        margin-bottom: 80px;
        width: 600px;
        border: 1px solid var(--grey);
        border-radius: 8px;
        padding: 24px;
    }
</style>