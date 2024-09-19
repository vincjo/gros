<script lang="ts">
    import type { TableHandlerLike } from './'
    type T = $$Generic<Row>
    let { table }: { table: TableHandlerLike<T> } = $props()
</script>

<section>
    {#if table.pages === undefined}
        {@render nopage()}
    {:else if table.clientWidth < 600}
        {@render small()}
    {:else}
        {@render ellipsis()}
    {/if}
</section>


{#snippet nopage()}
    <button type="button" class="small" class:disabled={table.currentPage === 1} onclick={() => table.setPage('previous')}>
        &#10094;
    </button>
    <button class="page">Page <b>{table.currentPage}</b></button>
    <button type="button" class="small" onclick={() => table.setPage('next')}>
        &#10095;
    </button>
{/snippet}

{#snippet small()}
    <button type="button" class="small" class:disabled={table.currentPage === 1} onclick={() => table.setPage(1)}>
        <svg width="100%" height="100%" viewBox="0 0 24 24"><path fill="currentColor" d="M18.41 7.41L17 6l-6 6l6 6l1.41-1.41L13.83 12l4.58-4.59m-6 0L11 6l-6 6l6 6l1.41-1.41L7.83 12l4.58-4.59Z"></path></svg>
    </button>
    <button type="button" class:disabled={table.currentPage === 1} onclick={() => table.setPage('previous')}>
        <svg width="100%" height="100%" viewBox="0 0 24 24"><path fill="currentColor" d="M14.71 6.71a.996.996 0 0 0-1.41 0L8.71 11.3a.996.996 0 0 0 0 1.41l4.59 4.59a.996.996 0 1 0 1.41-1.41L10.83 12l3.88-3.88c.39-.39.38-1.03 0-1.41z"></path></svg>
    </button>
    <button class:disabled={table.currentPage === table.pageCount} onclick={() => table.setPage('next')}>
        <svg width="100%" height="100%" viewBox="0 0 24 24"><path fill="currentColor" d="M9.29 6.71a.996.996 0 0 0 0 1.41L13.17 12l-3.88 3.88a.996.996 0 1 0 1.41 1.41l4.59-4.59a.996.996 0 0 0 0-1.41L10.7 6.7c-.38-.38-1.02-.38-1.41.01z"></path></svg>
    </button>
    <button class="small" class:disabled={table.currentPage === table.pageCount} onclick={() => table.setPage('last')}>
        <svg width="100%" height="100%" viewBox="0 0 24 24"><path fill="currentColor" d="M5.59 7.41L7 6l6 6l-6 6l-1.41-1.41L10.17 12L5.59 7.41m6 0L13 6l6 6l-6 6l-1.41-1.41L16.17 12l-4.58-4.59Z"></path></svg>
    </button>
{/snippet}

{#snippet ellipsis()}
    <button type="button" class:disabled={table.currentPage === 1} onclick={() => table.setPage('previous')}>
        <svg width="100%" height="100%" viewBox="0 0 24 24"><path fill="currentColor" d="M14.71 6.71a.996.996 0 0 0-1.41 0L8.71 11.3a.996.996 0 0 0 0 1.41l4.59 4.59a.996.996 0 1 0 1.41-1.41L10.83 12l3.88-3.88c.39-.39.38-1.03 0-1.41z"></path></svg>
    </button>
    {#each table.pagesWithEllipsis as page}
        {#if page === null}
            <button type="button" class="ellipse">
                <svg width="100%" height="100%" viewBox="0 0 24 24"><path fill="currentColor" d="M4.5 12a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0Zm6 0a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0Zm6 0a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0Z"></path></svg>
            </button>
        {:else}
            <button type="button"
                class:active={table.currentPage === page}
                onclick={() => table.setPage(page)}
            >
                {page}
            </button>
        {/if}
    {/each}
    <button type="button" class:disabled={table.currentPage === table.pageCount} onclick={() => table.setPage('next')}>
        <svg width="100%" height="100%" viewBox="0 0 24 24"><path fill="currentColor" d="M9.29 6.71a.996.996 0 0 0 0 1.41L13.17 12l-3.88 3.88a.996.996 0 1 0 1.41 1.41l4.59-4.59a.996.996 0 0 0 0-1.41L10.7 6.7c-.38-.38-1.02-.38-1.41.01z"></path></svg>
    </button>
{/snippet}



<style>
    section {
        display:flex;
        user-select: none;
        margin: 16px;
    }
    button {
        display: flex;
        justify-content: center;
        align-items: center;
        background:inherit;
        height:26px;
        width:26px;
        color: var(--font-grey, #757575);
        cursor:pointer;
        font-size:13px;
        margin:2px;
        padding:0;
        line-height:26px;
        border:1px solid var(--grey, #e0e0e0);
        border-radius: 4px;
        outline:none;
    }
    button:active {
        transform: translateY(0.8px);
    }
    button.active:active, button.ellipse:active, button.disabled:active {
        transform: none;
    }
    svg {
        height: 18px;
    }
    button:not(.active):hover {
        background: var(--grey-lighten-3, #fafafa);
    }
    button.ellipse {
        padding: 5px;
        border: none;
    }
    button.ellipse:hover {
        background: inherit;
        cursor: default;
    }
    button.active {
        color: #eee;
        background: #424242;
        border: 1px solid var(--bg-darken, #fff);
        cursor: default;
    }
    button.disabled:hover {
        background: inherit;
        cursor: default;
    }
    button.disabled {
        color: var(--grey, #9e9e9e);
    }
</style>