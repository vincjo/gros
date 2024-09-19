<script lang="ts">
    import { slide } from 'svelte/transition'
    import { getPath, createURL } from '$lib/page'
    const url = createURL()

    const pages = [
        {
            name: 'datatable',
            path: '/datatable',
        },
        {
            name: 'dropdown',
            path: '/dropdown',
        },
        {
            name: 'form',
            path: '/form',
            pages: [
                { name: 'Input', path: '/input' },
                { name: 'Textarea', path: '/textarea' },
                { name: 'Checkbox', path: '/checkbox' },
                { name: 'Select', path: '/select' },
                { name: 'Range', path: '/range' },
                { name: 'DateInput', path: '/date-input' },
                { name: 'ColorPicker', path: '/color-picker' },
            ],
        },
        {
            name: 'icons',
            path: '/icons',
        },
        {
            name: 'loading',
            path: '/loading',
        },
        {
            name: 'modal',
            path: '/modal',
        },
        {
            name: 'tree',
            path: '/tree',
        },
        {
            name: 'tooltip',
            path: '/tooltip',
        },
        {
            name: 'utils',
            path: '/utils',
            pages: [
                { name: 'action', path: '/action' },
                { name: 'css', path: '/css' },
                { name: 'date', path: '/date' },
                { name: 'event modifier', path: '/event-modifier' },
                { name: 'function', path: '/function' },
                { name: 'page', path: '/page' },
                { name: 'theme', path: '/theme' },
                { name: 'transition', path: '/transition' },
            ],
        },
    ]
</script>

<section>
    <a href={getPath('/home')}>
        <h2 class:active={$url === getPath('/home')}>
            <i class="micon"></i>
            home
        </h2>
    </a>
    {#each pages as page}
        <a href={getPath(page.path)}>
            <h3 class:active={$url.startsWith(getPath(page.path))}>
                {page.name}
            </h3>
        </a>
        {#if page.pages && $url.includes(page.path)}
            <ul transition:slide|global={{ duration: 200 }}>
                {#each page.pages as subpage}
                    <a href={getPath(page.path + subpage.path)}>
                        <li class:active={$url === getPath(page.path + subpage.path)}>
                            {subpage.name}
                        </li>
                    </a>
                {/each}
            </ul>
        {/if}
    {/each}
    <div style:height="64px"></div>
</section>

<style>
    section {
        width: 200px;
        background: var(--bg);
        padding: 24px 0 40px 24px;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Oxygen, Ubuntu, Cantarell,
            Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    }
    h2 {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        color: var(--font);
        font-weight: 200;
        margin: 0;
        font-size: 18px;
        line-height: 40px;
        transition: all, 0.1s;
        margin-bottom: 8px;
    }
    h2:hover {
        color: var(--secondary);
    }
    h2.active {
        color: var(--primary);
        font-weight: 600;
    }

    h3 {
        color: var(--font);
        font-weight: 200;
        margin: 0;
        font-size: 24px;
        line-height: 40px;
        transition: all, 0.1s;
    }
    h3:hover {
        color: var(--secondary);
    }
    h3.active {
        color: var(--primary);
        font-weight: 600;
    }
    a {
        text-decoration: none;
    }
    ul {
        margin: 0 0 0 0;
        padding: 0 16px 0 0;
    }
    ul li {
        display: block;
        margin: 0;
        background: var(--bg);
        transition: all, 0.2s;
        padding: 0 8px;
        font-size: 16px;
        color: var(--font-grey);
        font-weight: 400;
        line-height: 24px;
        border-radius: 2px;
        border: 1px solid transparent;
        border-right: 4px solid transparent;
        font-family: 'Roboto';
    }
    ul li:hover {
        color: var(--secondary);
        background: var(--bg);
    }
    ul li.active {
        color: var(--secondary);
        font-weight: bold;
        background: var(--grey-lighten);
        border: 1px solid var(--grey-lighten);
        border-right: 4px solid var(--secondary);
    }
    /* ul li.active a {background:#fafafa;} */
    ul a {
        display: block;
        text-decoration: none;
        color: inherit;
        padding: 0px 8px;
    }

    /* ul li{clip-path:polygon(4% 3%, 100% 0, 86% 86%, 0 100%);} */
    /* ul li:nth-child(even){clip-path:polygon(0 0, 87% 14%, 100% 100%, 3% 99%)} */
</style>
