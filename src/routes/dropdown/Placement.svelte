<script>
    import { Dropdown } from '$lib/dropdown'
    import { Range } from '$lib/form'
    import { scale } from 'svelte/transition'
</script>

<Dropdown position="bottom-start">
    <aside class="flex">Click</aside>
    {#snippet content()}
    <ul transition:scale={{ duration: 160, baseScale: 0.5 }} class="z-depth-2">
        <li>
            <i class="micon">grid_on</i>
            Show attribute table
        </li>
        <li class="opacity open-dropdown">
            <i class="micon">opacity</i>
            <span>Opacity</span>
            <div class="open-dropdown">
                <Range min={0} max={100} value={[100]} suffix="%" />
            </div>
        </li>
        <li>
            <i class="micon">zoom_in</i>
            Zoom to layer extent
        </li>
        <li>
            <i class="micon">file_download</i>
            Export...
        </li>
    </ul>
    {/snippet}
</Dropdown>

<style>
    aside {
        background-color: transparent;
        background: var(--primary);
        height: 56px;
        border-radius: 8px;
        transition: all, 0.3s;
        color: #fff;
        font-size: 24px;
        padding: 0 16px;
        transition: all, 0.2s;
    }
    aside:hover {
        background: var(--primary-darken);
    }

    ul {
        min-width: 260px;
        margin: 0;
        overflow: hidden;
        border: 1px solid #eee;
        background: #fff;
        border-radius: 4px;
    }
    li i {
        font-size: 20px;
        color: #757575;
        margin: 0 12px 0 8px;
    }
    li {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        min-height: 36px;
        font-size: 13px;
        color: #424242;
        border-bottom: 1px solid #eee;
        cursor: pointer;
        transition: all, 0.2s;
    }
    li:hover {
        background: #f5f5f5;
    }
    li.opacity {
        background: #f5f5f5;
        cursor: default;
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }
    li.opacity span {
        width: 64px;
    }
    li.opacity div {
        width: 128px;
    }
    li:last-child {
        border-bottom: none;
    }
</style>
