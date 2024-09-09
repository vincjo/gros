<script>
    import { Dropdown } from '$lib/dropdown'
    import { theme } from '$utils/theme'
</script>


<Dropdown>
    <aside class="flex">
        Thème
        <i class="micon" style:margin-left="8px">arrow_drop_down</i>
    </aside>
    {#snippet content()}
        <nav>
            <button class:active={$theme === 'onb'} onclick={() => ($theme = 'onb')} class="btn">
                Cyan-pink
            </button>
            <button class:active={$theme === 'resources'} onclick={() => ($theme = 'resources')} class="btn">
                Teal-blue
            </button>
            <button class:active={$theme === 'imope'} onclick={() => ($theme = 'imope')} class="btn">
                Gold-red
            </button>
        </nav>
    {/snippet}
</Dropdown>

<style>
    aside {
        border-radius: 4px;
        font-size: 16px;
        padding: 0 8px;
        width: fit-content;
        height: 32px;
    }
    aside:hover {
        background: var(--grey);
    }
    nav {
        border: 1px solid var(--grey-darken);
        background: var(--bg-darken);
        margin-top: 4px;
        padding: 2px 4px;
        border-radius: 8px;
    }
    button {
        height: 32px;
        padding: 0 8px;
        width: 100%;
        margin: 2px 0;
        color: var(--primary);
        justify-content: flex-start;
        font-weight: bold;
        background: transparent;
    }
    button:hover {
        background: var(--primary-lighten-1);
    }
    button.active {
        background: var(--primary-lighten-3);
    }
</style>
