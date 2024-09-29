<script lang="ts">export let handler;
export let filterBy = null;
export let align = 'left';
let value = '';
handler.on('clearFilters', () => value = '');
</script>


<th>
    <input 
        style:text-align={align}
        type="text"
        placeholder="Filtrer"
        spellcheck="false"
        bind:value
        on:input={() => handler.filter(value, filterBy)}
    />
</th>


<style>
    th {
        border-bottom: 1px solid #e0e0e0;
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
        color: #bdbdbd;
        /* font-style: italic; */
        font-size: 13px;
    }
    input:focus{
        border: none;
    }
</style>