<script>
    import { Dropdown } from '$lib/dropdown'
</script>

<Dropdown preventClosing>
    <aside class="btn z-depth-1">Drop me!</aside>
    {#snippet content()}
    <ul class="z-depth-1">
        <li>No closure</li>
        <li class="close-dropdown"><b>Close</b></li>
        <li>No closure</li>
        <li class="close-dropdown"><b>Close</b></li>
    </ul>
    {/snippet}
</Dropdown>

<style>
    aside {
        padding: 12px 24px;
        background: var(--primary);
        color: #fff;
        font-size: 16px;
        border-radius: 4px;
        transition: all, 0.2s;
    }

    aside:hover {
        background: var(--primary-darken);
    }
    aside:active {
        background: var(--primary);
    }

    ul {
        padding: 4px;
        background: var(--bg-darken);
        border-radius: 4px;
        border: 1px solid var(--grey);
    }
    li {
        cursor: pointer;
        transition: all, 0.2s;
        padding: 4px 8px;
        border-radius: 2px;
    }
    li:hover {
        background: var(--grey);
    }
    li b {
        color: var(--secondary);
    }
</style>
