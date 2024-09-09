<script lang="ts">
    import { Dropdown } from '$lib/dropdown'
</script>

<Dropdown position="bottom-end">
    <aside class="btn z-depth-1">Drop me!</aside>
    {#snippet content()}
    <ul class="z-depth-1">
        <li>Option 1</li>
        <li>Option 2</li>
        <li>Option 3</li>
        <li>Option 4</li>
    </ul>
    {/snippet}
</Dropdown>

<style>
    aside {
        padding: 12px 24px;
        background: var(--primary);
        color: #eee;
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
        border: 1px solid var(--grey-lighten);
    }
    li {
        cursor: pointer;
        transition: all, 0.2s;
        padding: 4px 8px;
        border-radius: 2px;
    }
    li:hover {
        background: var(--grey-lighten);
    }
</style>
