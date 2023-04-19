<script>
    import Search from './Search.svelte'
    import RowCount from './RowCount.svelte'
    import Pagination from './Pagination.svelte'
    export let handler

    export let search = false
    export let rowCount = true
    export let pagination = true

    let element
    let clientWidth = 1000

    const height = (search ? 48 : 8) + (rowCount || pagination ? 48 : 8)
    const triggerChange = handler.getTriggerChange()
    $: $triggerChange, scrollTop()

    const scrollTop = () => {
        if (element) element.scrollTop = 0
    }
</script>



<section bind:clientWidth={clientWidth}>

    <header class:container={search}>
        {#if search}
            <Search {handler}/>
        {/if}
    </header>

    <article bind:this={element} class="thin-scrollbar" style="height:calc(100% - {height}px)">
        <slot/>
    </article>

    <footer class:container={rowCount || pagination}>
        {#if rowCount}
            <RowCount {handler} small={clientWidth < 600}/>
        {/if}
        {#if pagination}
            <Pagination {handler} small={clientWidth < 600}/>
        {/if}
    </footer>
</section>



<style>
    section {
        height:100%;
    }

    header, footer {
        min-height:8px;
        padding:0 16px;
        display:flex;
        justify-content:space-between;
        align-items:center;
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
        background:#f5f5f5;
    }
    article :global(tbody tr td) {
        padding:4px 20px 4px 20px;
    }
</style>