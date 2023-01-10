<script>
    import { user, manager, page }  from '$modules/session'
    import Show                     from './account/Show.svelte'
    import Update                   from './account/Update.svelte'
    import Password                 from './account/Password.svelte'
    import Delete                   from './account/Delete.svelte'
    import { fly }                  from 'svelte/transition'
    export let top
</script>

{#if $manager}
    <section transition:fly={ { x:384, duration: 200} } style:top={top} class="z-depth-2">
        <header>
            Mon compte
            <button on:click={() => manager.update(store => store = false)}>
                <i class="material-icons">close</i>
            </button>
        </header>
        {#if $page === 'show'}
            <Show user={$user}/>
        {:else if $page === 'update'}
            <Update user={$user}/>
        {:else if $page === 'password'}
            <Password user={$user}/>
        {:else}
            <Delete/>
        {/if}
    </section>
{/if}

<style>
    section{position:fixed;right:0;bottom:0;z-index:799;width:384px;background:#ffffff;border-left:1px solid #eee;}
    header{height:40px;background:#fafafa;line-height:40px;font-size:16px;font-weight:bold;padding-left:20px;color:#616161;}
    header button{float:right;height:40px;width:40px;justify-content:center;}
    header button i{color:#e57373;}
</style>