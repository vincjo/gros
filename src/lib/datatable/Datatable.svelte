<script lang="ts">
    import type { Snippet } from 'svelte'
    import { type TableHandler, Search, RowCount, Pagination } from '$lib/datatable'
    type T = $$Generic<Row>
    type Props = {
        table: TableHandler<T>,
        basic?: boolean,
        headless?: boolean,
        header?: Snippet,
        footer?: Snippet,
        children: Snippet
    }
    let { table, basic = false, headless = false, header = undefined, footer = undefined, children }: Props = $props()

    table.on('change', () => table.element ? table.element.scrollTop = 0 : '')
</script>

<section bind:clientWidth={table.clientWidth} class={{ 'svelte-simple-datatable': !headless }}>

    <header>
        {#if header}
            {@render header()}
        {:else if basic === true}
            <Search {table}/>
        {/if}
    </header>

    <article bind:this={table.element} class="thin-scrollbar">
        {@render children()}
    </article>

    <footer class={{ divider: basic }}>
        {#if footer}
            {@render footer()}
        {:else if basic === true}
            <RowCount {table}/>
            <Pagination {table}/>
        {/if}
    </footer>

</section>

<style>
    section {
        height: 100%;
        display: flex;
        flex-direction: column;
        background: inherit;
        border-radius: inherit;
    }
    header, footer {
        padding: 0;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 100%;
    }
    article {
        position: relative;
        height: 100%;
        overflow: auto;
        background: inherit;
    }
    article :global(.hidden) {
        display: none;
    }
    article::-webkit-scrollbar {
        width: 6px;
        height: 6px;
    }

    /* optional global style */
    .svelte-simple-datatable :global(table) {
        border-collapse: separate;
        border-spacing: 0;
        width: 100%;
        background: inherit;
    }
    .svelte-simple-datatable :global(table thead) {
        position: sticky;
        inset-block-start: 0;
        background: inherit;
        z-index: 1;
    }
    .svelte-simple-datatable :global(thead tr) {
        background: inherit;
    }
    .svelte-simple-datatable :global(thead tr th) {
        background: inherit;
    }
    .svelte-simple-datatable :global(thead tr:first-child th) {
        padding: 8px 20px;
        background: inherit;
    }
    .svelte-simple-datatable :global(tbody) {
        background: inherit;
    }
    .svelte-simple-datatable :global(tbody tr) {
        transition: background, 0.2s;
        background: inherit;
    }
    .svelte-simple-datatable :global(tbody tr:hover) {
        background: var(--grey-lighten-3, #fafafa);
    }
    .svelte-simple-datatable :global(tbody td) {
        padding: 4px 20px;
        border-right: 1px solid var(--grey-lighten, #eee);
        border-bottom: 1px solid var(--grey-lighten, #eee);
        background: inherit;
    }
    .svelte-simple-datatable :global(tbody td:last-child) {
        border-right: none;
    }
    .svelte-simple-datatable :global(u.highlight) {
        text-decoration: none;
        background: rgba(251, 192, 45, 0.6);
        border-radius: 2px;
    }
    .svelte-simple-datatable :global(footer.divider) {
        border-top: 1px solid var(--grey, #e0e0e0);
    }
</style>