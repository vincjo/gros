<script lang="ts">
    import type { Snippet }     from 'svelte'
    import { theme }            from '$lib/theme'
    import { base }             from '$app/paths'
    import { afterNavigate }    from '$app/navigation'
    import Nav                  from './Nav.svelte'
    import { theme as color }   from '$utils/theme'
    import { ModalContainer }   from '$lib/modal'
    import Header               from './Header.svelte'

    let { children }: { children: Snippet } = $props()
    let element: HTMLElement
    afterNavigate(() => {
        if (element) element.scrollTop = 0
    })
    theme.init()
</script>

<svelte:head>
    <title>GROS ui</title>
    <link rel="stylesheet" href="{base}/gros-theme-{$color}.css" />
</svelte:head>

 <Header/>
<main>
    <nav class="thin-scrollbar">
        <Nav />
    </nav>
    <section bind:this={element} class="thin-scrollbar">
        <article>
            {@render children()}
        </article>
    </section>
</main>
<ModalContainer />


<style>
    main {
        position: absolute; 
        top: 56px;
        left: 0;
        bottom: 0;
        right: 0;
    }
    nav {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        width: 24vw;
        display: flex;
        justify-content: flex-end;
        border-right: 1px solid var(--grey);
        overflow-y: auto;
    }
    section {
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        width: 76vw;
        display: flex;
        justify-content: flex-start;
        overflow-y: auto;
    }
    article {
        padding: 0 80px;
        width: 880px;
        min-width: 760px;
        background: var(--bg);
    }

    @media (max-width: 800px) {
        section {
            position: unset;
            width: 100%;
            padding: 16px 24px;
        }
        article {
            padding: 0;
            min-width: 200px;
        }
        nav {
            display: none;
        }
    }
</style>
