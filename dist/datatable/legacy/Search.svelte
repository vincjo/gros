<script lang="ts">export let handler;
let value = '';
handler.on('clearSearch', () => value = '');
</script>

<section>
    <i>
        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
    </i>
    <input
        class="search"
        bind:value={value} 
        placeholder="Rechercher"
        spellcheck="false"
        on:input={() => handler.search(value)}
    />
</section>


<style>
    section {
        position: relative;
        width: 200px;
    }
    i {
        position: absolute; top:6px; left: 4px;
        width: 16px;
        height: 16px;
        color: #757575;
        margin-left: 2px;
    }
    input{
        outline:none;
        padding:0 8px 0 26px;
        line-height:24px;
        margin:0;
        height:28px;
        background:transparent;
        width: 100%;
        transition:border, 0.1s;
        border:1px solid #e0e0e0;
        /* border-radius:4px; */
        border-radius: 6px;
    }
    input:focus {
        border:1px solid #e0e0e0;
    }
    input::placeholder {
        color:#9e9e9e;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        line-height:24px;
        font-weight: 200;
    }
</style>