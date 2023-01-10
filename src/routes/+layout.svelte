<script>
    import Nav from './Nav.svelte'
    import Github from './Github.svelte'
    import { theme } from '$utils/theme'
    import { ModalContainer } from '$lib/modal'
    import Theme from './Theme.svelte'
</script>

<svelte:head>
    <title>GROS</title>
    <link rel="stylesheet" href="theme-{$theme}.css">
</svelte:head>

<Github/>

<nav class="thin-scrollbar">
    <Nav/>
</nav>
<section>
    <article>
        <slot/>
    </article>
</section>
<Theme/>
<ModalContainer/>


<style>
    nav{position:absolute;top:0;bottom:0;left:0;width:200px;display:flex;justify-content:flex-end;border-right:1px solid #e0e0e0;overflow-y:auto;}
    section{position:absolute;top:0;bottom:0;right:0;left:200px;display:flex;justify-content:flex-start;overflow-y:auto;}
    article{padding:32px;width:920px;min-width:800px;background:#fff;}

    @media (max-width: 800px) { 
        section{position:unset;width:100%;padding:16px 24px;}
        article{padding:0;min-width:200px;}
        nav{display:none;}
    }
</style>