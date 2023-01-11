<script>
    import RowCount from './RowCount.svelte'
    import Pagination from './Pagination.svelte'
    export let handler
    let element
    let clientWidth = 1000

    const triggerChange = handler.getTriggerChange()
    $: $triggerChange, scrollTop()

    const scrollTop = () => {
        if (element) element.scrollTop = 0
    }
</script>



<section bind:clientWidth={clientWidth}>

    <article bind:this={element}>
        <slot/>
    </article>

    <footer>
        <RowCount   {handler} small={clientWidth < 600}/>
        <Pagination {handler} small={clientWidth < 600}/>
    </footer>
</section>



<style>
    section {
        height:inherit;
    }

    footer {
        height:48px;
        padding:0 16px;
        display:flex;
        justify-content:space-between;
        align-items:center;
        border-top: 1px solid #e0e0e0;
    }

    article {
        position:relative;
        height:calc(100% - 56px);
        overflow:auto;
        scrollbar-width:thin;
    }

    article :global(table) {
        text-align:center;
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
    article :global(tbody tr:nth-child(even)){
        background:#fafafa;
    }
    article :global(tbody tr:hover) {
        background:#f5f5f5;
    }
    article :global(tbody tr td) {
        padding:4px;
    }
    article::-webkit-scrollbar {width: 6px;height: 6px;}
    article::-webkit-scrollbar-track {background: #f5f5f5;}
    article::-webkit-scrollbar-thumb {background: #c2c2c2;}
    article::-webkit-scrollbar-thumb:hover {background: #9e9e9e;}

</style>