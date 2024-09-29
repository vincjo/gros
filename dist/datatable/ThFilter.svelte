<script lang="ts">let { table, field, check = undefined } = $props();
// "field as any" for compatibility between client and server
const filter = table.createFilter(field, check);
export {};
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