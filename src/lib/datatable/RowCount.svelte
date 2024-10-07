<script lang="ts">
    import type { TableHandler } from '$lib/datatable'

    type T = $$Generic<Row>
    let { table, selection = false }: { table: TableHandler<T>, selection?: boolean } = $props()

    const { start, end, total, selected } = $derived(table.rowCount)
</script>


<aside>
    {#if table.clientWidth < 640}
        {@render small()}
    {:else}
        {@render rowCount()}
    {/if}
</aside>

{#snippet small()}
    {#if total > 0}
        <b>{start}</b>-
        <b>{end}</b>/
        <b>{total}</b>
    {:else}
        {table.i18n.noRows}
    {/if}
{/snippet}


{#snippet rowCount()}
    {#if total > 0}
        Lignes <b>{start}</b> à <b>{end}</b> sur <b>{total}</b>
    {:else}
        Aucun résultat
    {/if}
{/snippet}

<style>
    aside{
        color:var(--font-grey, #757575);
        line-height:32px;
        font-size:13px;
        margin: 8px 16px;
    }
    aside :global(b) {
        color: var(--font-grey, #757575);
    }
</style>
