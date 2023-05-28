<script lang="ts">
    import { Dropdown } from '$lib/dropdown'
    // import { modal } from '$lib/modal'
    export let folder: any 
    export let level: number
</script>



<button class="handle btn option">
    <i class="micon">drag_handle</i>
</button>
<Dropdown fixedWidth position="bottom-start">
    <button class="dropdown btn option">
        <i class="micon">more_vert</i>
    </button>
    <aside slot="content" class="z-depth-2">
        {#if level === 0}
        <button class="btn" on:click={() => console.log(`modal.open(Modal_CreateFolder)`, folder)}>
            <i class="micon">create_new_folder</i>
            New folder...
        </button>
        {/if}
        <button class="btn" on:click={() => console.log(`modal.open(Modal_CreateFile)`)}>
            <i class="micon">note_add</i>
            New file...
        </button>
        <button class="btn delete" on:click={() => console.log(`modal.open(Modal_DeleteFolder)`)}>
            <i class="micon">delete_forever</i>
            Delete
        </button>
    </aside>
</Dropdown>


<style>
    aside {
        min-width:160px;
        background: #fff;
        border: 1px solid #eee;
        border-radius: 4px;
    }
    aside button {
        justify-content: flex-start;
        border-bottom: 1px solid #eee;
        padding:0 4px;
        color:#616161;
        font-size:13px;
        width: 100%;
        text-transform: none;
        padding: 8px;
    }
    aside button:hover {
        background :#f5f5f5;
    }
    aside button i{
        color:#757575;
        font-size:18px;
        margin-right:8px;
    }
    aside button.delete{
        color:#e57373
    }
    aside button.delete i{
        color:#e57373
    }
</style>