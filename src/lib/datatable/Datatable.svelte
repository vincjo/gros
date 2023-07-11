<script lang="ts">
    import type { DataHandler, Row } from '@vincjo/datatables'
    import Search from './Search.svelte'
    import RowCount from './RowCount.svelte'
    import Pagination from './Pagination.svelte'

    type T = $$Generic<Row>

    export let handler: DataHandler<T>

    export let search       = true
    export let rowCount     = true
    export let pagination   = true

    let element: HTMLElement
    let clientWidth = 1000

    const height = (search ? 48 : 8) + (rowCount || pagination ? 48 : 8)

    handler.on('change', () => {
        if (element) element.scrollTop = 0
    })
</script>

<section bind:clientWidth>
    <header class:container={search}>
        {#if search}
            <Search {handler} />
        {/if}
    </header>

    <article bind:this={element} style="height:calc(100% - {height}px)"  class="thin-scrollbar">
        <slot />
    </article>

    <footer class:container={rowCount || pagination}>
        {#if rowCount}
            <RowCount {handler} small={clientWidth < 600} />
        {:else}
            <div/>
        {/if}
        {#if pagination}
            <Pagination {handler} small={clientWidth < 600} />
        {/if}
    </footer>
</section>



<style>
    section {
        height: 100%;
    }

    header, footer {
        min-height: 8px;
        padding: 0 16px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    header.container {
        height: 48px;
    }
    footer{ 
        border-top: 1px solid #e0e0e0;
    }
    footer.container {
        height: 48px;
    }

    article {
        position:relative;
        /* height:calc(100% - 56px); */
        overflow:auto;
        scrollbar-width:thin;
    }

    article :global(table) {
        text-align: left;
        border-collapse:separate;
        border-spacing:0;
        width:100%;
    }

    article :global(thead) {
        position:sticky;
        inset-block-start:0;
        background:#fff;
    }
    article :global(tbody tr) {
        transition:background, 0.2s;
    }
    article :global(tbody tr:hover) {
        background:#fafafa;
    }
    article :global(tbody tr td) {
        padding:4px 20px 4px 20px;
    }
</style>