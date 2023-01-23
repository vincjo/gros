<script>
    import { slide, fade } from 'svelte/transition'
    import pages from './Nav'
    import { getPath, url } from '$lib/page'
</script>

<section>
    <a href="{getPath('/home')}">
        <article>
            <aside transition:fade={{ duration:100 }}>
                <i class="icon"><svg width="100%" height="100%" viewBox="0 0 512 512"><path fill="currentColor" d="M164.188 40.375c-168.48 35.59-220.94 167.97-17 187.47c-13.147 35.014-21.172 74.948-22.22 114.218c-35.694 33.01-59.593 66.343-59.593 66.343l47.72 47.72l-39.345 26.218h113.28c-73.368-73.383-21.278-104.5 65.626-104.5c88.096 0 134.175 35.905 65.594 104.5h114.5l-40.563-26.22l47.72-47.718s-22.25-31.027-55.844-62.844c-.65-40.39-8.807-81.663-22.344-117.718c203.953-19.496 151.482-151.878-17-187.47c-40.813 30.863 6.55 79.75 43.717 44.626c36.908 54.048 8.752 99.845-71.937 65.594c-.02-.022-.042-.04-.063-.063c-9.66 28.054-33.333 48.47-61.968 48.47c-28.637 0-52.332-20.416-62-48.47l-.064.064C111.736 184.826 83.596 139.042 120.5 85c37.168 35.125 84.5-13.763 43.688-44.625zm90.28 24.063c-25.736 0-48 25.088-48 57.937c0 32.85 22.264 57.938 48 57.938c25.738 0 47.97-25.086 47.97-57.938c0-32.852-22.232-57.938-47.97-57.938z"/></svg></i>
                <div>
                    <h1><b>GROS</b><br>ui toolkit</h1>
                </div>
            </aside>
        </article>
    </a>


    <a href="{getPath('/home')}">
        <h2 class:active={$url === getPath('/home')}>
            <i class="material-icons"></i>
            home
        </h2>
    </a>
    {#each pages as page}
        <a href="{getPath(page.path)}">
            <h3 class:active={$url === getPath(page.path) || (getPath(page.path) !== '/' && $url.includes(getPath(page.path)))}>
                {page.name}
            </h3>
        </a>
        {#if page.pages && $url.includes(page.path)}
        <ul transition:slide={{ duration:200}}>
            {#each page.pages as subpage}
                <a href="{getPath(page.path + subpage.path)}">
                    <li class:active={$url === getPath(page.path + subpage.path)}>
                        {subpage.name}
                    </li>
                </a>
            {/each}
        </ul>
        {/if}
    {/each}
</section>


<style>
    section{width:200px;background:#fff;padding:24px 0 0 24px;font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;}

    article{height:88px;}
    aside{display:flex;justify-content:start;margin:0;height:48px;}
	aside h1 {font-size:16px;line-height:18px; text-align:left;font-weight:400; margin:8px 0 0 0;color:var(--primary-lighten); }
    h1 b{font-family:Gros, sans-serif;font-weight:2000;color:var(--secondary);font-size:22px;}
    i.icon{width:48px;height:48px;color:var(--primary);margin:0 8px;}

    h2{display:flex;justify-content:flex-start;align-items:center;color:#424242;font-weight:200;margin:0;font-size:18px;line-height:40px;transition:all,0.1s;margin-bottom:8px;}
    h2:hover{color:var(--secondary);}
    h2.active{color:var(--primary);font-weight:600;}

    h3{color:#424242;font-weight:200;margin:0;font-size:24px;line-height:40px;transition:all,0.1s;}
    h3:hover{color:var(--secondary);}
    h3.active{color:var(--primary);font-weight:600;}
    a{text-decoration:none;}
    ul{margin:0 0 0 0;padding:0 16px 0 0;}
    ul li{display:block;margin:0;background:#fff;transition:all,0.2s;padding:0 8px;font-size:16px;color:#757575;font-weight:400;line-height:24px;border-radius:2px;border:1px solid transparent;border-right:4px solid transparent;font-family:'Roboto';}
    ul li:hover{color:var(--secondary);background:#f5f5f5;}
    ul li.active{color:var(--secondary);font-weight:bold;background:#eee;border:1px solid #eee;border-right:4px solid var(--secondary)}
    /* ul li.active a {background:#fafafa;} */
    ul a{display:block;text-decoration:none;color:inherit;padding:0px 8px;}

    /* ul li{clip-path:polygon(4% 3%, 100% 0, 86% 86%, 0 100%);} */
    /* ul li:nth-child(even){clip-path:polygon(0 0, 87% 14%, 100% 100%, 3% 99%)} */
</style>