<script>
    import { icons } from './icons.ts'
    import { DataHandler } from '$lib/datatable'
    const handler = new DataHandler(icons)
    const micons = handler.getRows()
    let value
</script>


<article>
    <i class="micon">search</i>
    <input type="text" bind:value on:input={() => handler.search(value)} spellcheck="false"/>
</article>

<aside>
    {#each $micons as micon}
        <div>
            <i class="micon">{micon.name}</i>
            <span>{micon.name}</span>
        </div>
    {/each}
</aside>


<style>
    article{padding:0;display:flex;justify-content:flex-start;align-items:center;border:1px solid #e0e0e0;border-radius:8px;margin:32px auto;max-width:640px;}
    article i{color:var(--secondary-lighten);margin:4px 8px;}
    input{border: none;font-size: 16px; color:var(--secondary-lighten)}

    aside{display:flex;justify-content:flex-start;flex-wrap: wrap;margin:0 auto;max-width:688px;}
    div{margin:16px 8px;text-align:center;width:140px;transition:all,.2s;border-radius:4px;border:1px solid transparent;}
    div:hover{background:#f5f5f5;border:1px solid #eee;}
    div i{display:block;font-size:48px;color:#424242;margin:16px 0;}
    span{color:var(--primary);font-size:12px;font-family:Arial, Helvetica, sans-serif;}
</style>