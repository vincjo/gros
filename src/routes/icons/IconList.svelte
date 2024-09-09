<script>
    import { icons } from './icons.ts'
    import { TableHandler } from '$lib/datatable'
    const table = new TableHandler(icons, { highlight: true })
    const search = table.createSearch()
</script>

<article>
    <i class="micon">search</i>
    <input type="text" bind:value={search.value} on:input={() => search.set()} spellcheck="false" />
</article>

<aside>
    {#each table.rows as micon}
        <div>
            <i class="micon">{@html micon.name}</i>
            <span>{@html micon.name}</span>
        </div>
    {/each}
</aside>

<style>
    article {
        padding: 0;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        border: 1px solid var(--grey);
        border-radius: 8px;
        margin: 32px auto;
        max-width: 640px;
        background: var(--bg-darken);
    }
    article i {
        color: var(--secondary-lighten);
        margin: 4px 8px;
    }
    input {
        border: none;
        font-size: 16px;
        color: var(--secondary-lighten);
        border-radius: inherit;
    }

    aside {
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        margin: 0 auto;
        max-width: 688px;
    }
    aside :global(u) {
        text-decoration: none;
        background: #ffd54f;
    }
    div {
        margin: 16px 8px;
        text-align: center;
        width: 140px;
        transition: all, 0.2s;
        border-radius: 4px;
        border: 1px solid transparent;
    }
    div:hover {
        background: var(--grey-lighten-2);
        border: 1px solid var(--grey-lighten);
    }
    div i {
        display: block;
        font-size: 48px;
        color: var(--font);
        margin: 16px 0;
    }
    span {
        color: var(--primary);
        font-size: 11px;
    }

</style>
