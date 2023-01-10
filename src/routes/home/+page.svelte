<script>
    import Home from './home.svx'
    import { color } from '$utils/theme'
</script>


<section>
    <aside>
        <i class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 512 512"><path fill="currentColor" d="M164.188 40.375c-168.48 35.59-220.94 167.97-17 187.47c-13.147 35.014-21.172 74.948-22.22 114.218c-35.694 33.01-59.593 66.343-59.593 66.343l47.72 47.72l-39.345 26.218h113.28c-73.368-73.383-21.278-104.5 65.626-104.5c88.096 0 134.175 35.905 65.594 104.5h114.5l-40.563-26.22l47.72-47.718s-22.25-31.027-55.844-62.844c-.65-40.39-8.807-81.663-22.344-117.718c203.953-19.496 151.482-151.878-17-187.47c-40.813 30.863 6.55 79.75 43.717 44.626c36.908 54.048 8.752 99.845-71.937 65.594c-.02-.022-.042-.04-.063-.063c-9.66 28.054-33.333 48.47-61.968 48.47c-28.637 0-52.332-20.416-62-48.47l-.064.064C111.736 184.826 83.596 139.042 120.5 85c37.168 35.125 84.5-13.763 43.688-44.625zm90.28 24.063c-25.736 0-48 25.088-48 57.937c0 32.85 22.264 57.938 48 57.938c25.738 0 47.97-25.086 47.97-57.938c0-32.852-22.232-57.938-47.97-57.938z"/></svg></i>
        <div>
            <h1><b>GROS</b> ui toolkit</h1>
            <p>Jeu de composants <code>Svelte</code> réutilisables</p>
            <div>
                <img src="https://img.shields.io/npm/dt/gros?color=%23{$color}" alt="npm downloads"/>
                <img src="https://img.shields.io/npm/v/gros?color=%23{$color}" alt="npm version"/>
            </div>
        </div>
    </aside>

    <Home/>


</section>
<style>
    section{margin-left:80px;}
    aside{display:flex;justify-content:start;margin-top:32px;color:var(--primary-lighten)}
    h1 {font-size:32px;line-height:32px; text-align: left; font-weight:400; margin: 0; }
    h1 b{font-family:Cursive, sans-serif;font-weight:2000;color:var(--secondary)}
    i.icon{width:96px;height:96px;color:var(--primary);margin-right:16px;}
    img {width: 88px;max-width: 400px;margin: 0 16px 0 0;background:var(--secondary)}
    p {margin:0;color:#676778;padding:0;line-height:16px;font-size:16px;margin:8px;}
    div img{width:96px;}
    /* h2{font-size:24px;color:#676778;font-weight:400;margin:24px 0 8px 0;} */
    /* 40b3ff     ff3e00    676778*/

    @media (max-width: 800px) { 
        section{margin:0;}
    }
</style>