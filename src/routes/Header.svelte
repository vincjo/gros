<script lang="ts">
    import Color        from './Header_Color.svelte'
    import Github       from './Header_Github.svelte'
    import Theme        from './Header_Theme.svelte'
    import Logo         from '$utils/Logo.svelte'
    import { path }     from '$lib/page'
</script>

<header class="flex">
    <a class="flex logo" href="{path.get('/')}">
        <Logo size="40px"/>
        <b class="desktop">GROS</b>
    </a>
    <aside class="flex">
        <Color/>
        <Theme/>
        <Github/>
    </aside>
</header>

<style>
    header {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        border-bottom: 1px solid var(--grey);
        height: 56px;
        background: var(--bg);
        justify-content: space-between;
    }
    a {
        margin-left: calc(24vw - 176px);
    }
    a b {
        font-family: Gros, sans-serif;
        font-weight: 2000;
        color: var(--secondary);
        font-size: 32px;
        margin-left: 8px;
    }
    aside {
        margin-right: 32px;
    }
</style>