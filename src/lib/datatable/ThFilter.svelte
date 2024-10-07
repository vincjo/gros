<script lang="ts">
    import type { TableHandler, Field, Check } from '$lib/datatable'

    type T = $$Generic<Row>
    type Props = {
        table  : TableHandler<T>,
        field  : Field<T>,
        check ?: Check
    }
    let { table, field, check = undefined }: Props = $props()

    const filter = table.createFilter(field, check)
</script>


<th>
    <input 
        type="text"
        placeholder="Filtrer"
        spellcheck="false"
        bind:value={filter.value}
        oninput={() => filter.set()}
    />
</th>


<style>
    th {
        border-bottom: 1px solid var(--grey, #e0e0e0);
    }
    input {
        width: 100%;
        height: 24px;
        border: none;
        text-align: left;
        padding:0 20px;
        background:inherit;
        outline: none;
        border-radius: 0;
        font-size: 14px;
        font-family:Arial, Helvetica, sans-serif;
    }
    input::placeholder {
        color: var(--grey, #e0e0e0);
        /* font-style: italic; */
        font-size: 13px;
    }
    input:focus{
        border: none;
    }
</style>