<script lang="ts">
    import type { DataHandler, Row } from '@vincjo/datatables'

    type T = $$Generic<Row>

    export let handler: DataHandler<T>
    let value = ''
</script>

<section>
    <i>
        <svg width="100%" height="100%" viewBox="0 0 24 24"><path fill="currentColor" d="m18.9 20.3l-5.6-5.6q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5q0-2.725 1.888-4.612T9.5 3q2.725 0 4.612 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l5.625 5.625q.275.275.275.675t-.3.7q-.275.275-.7.275t-.7-.275ZM9.5 14q1.875 0 3.188-1.313T14 9.5q0-1.875-1.313-3.188T9.5 5Q7.625 5 6.312 6.313T5 9.5q0 1.875 1.313 3.188T9.5 14Z"></path></svg>
    </i>
    <input
        class="search"
        bind:value={value} 
        placeholder="Rechercher..."
        spellcheck="false"
        on:input={() => handler.search(value)}
    />
</section>


<style>
    section {
        position: relative;
        height: 24px;
        width: 200px;
    }
    i {
        position: absolute; top:4px; left: 4px;
        width: 16px;
        height: 16px;
        color: #757575;
        margin-left: 2px;
    }
    input{
        border: none;
        outline:none;
        padding:0 8px 0 26px;
        line-height:24px;
        margin:0;
        height:24px;
        background:transparent;
        width:176px;
        transition:border, 0.1s;
        border-bottom:1px solid #e0e0e0;
        /* border-radius:4px; */
        border-radius: 0;
    }
    input:focus {
        border-bottom:1px solid #616161;
    }
    input::placeholder {
        color:#9e9e9e;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        line-height:24px;
        font-weight: 200;
    }
</style>