<script lang="ts">
    import type { DataHandler, Row } from '@vincjo/datatables'

    type T = $$Generic<Row>

    export let handler: DataHandler<T>
    const i18n = { 
        noRows: 'Aucun résultat', 
        rowCount: 'Lignes {start} à {end} sur {total}' 
    }
    export let small = false

    const rowCount = handler.getRowCount()
</script>


{#if small}
    {#if $rowCount.total > 0}
        <aside>
            <b>{$rowCount.start}</b>-
            <b>{$rowCount.end}</b>/
            <b>{$rowCount.total}</b>
        </aside>
    {:else}
        {i18n.noRows}
    {/if}
{:else}
    <aside>
        {#if $rowCount.total > 0}
            {@html i18n.rowCount
                .replace('{start}', `<b>${$rowCount.start}</b>`)
                .replace('{end}', `<b>${$rowCount.end}</b>`)
                .replace('{total}', `<b>${$rowCount.total}</b>`)
            }
        {:else}
            {i18n.noRows}
        {/if}
    </aside>
{/if}




<style>
    aside{
        color:#757575;
        line-height:32px;
        font-size:13px;
    }
    aside :global(b) {
        color: #616161;
    }
</style>
