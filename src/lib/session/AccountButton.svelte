<script>
    import { user, manager }    from '$modules/session'
    import { Dropdown } from '$modules/dropdown'
    export let height
</script>

<Dropdown>
    <button class="account" style:height={height} on:click={() => manager.set(false)}>
        <span>
            <b>{$user.firstname}</b>&nbsp;<b>{$user.name}</b>
        </span>
        <i class="material-icons">arrow_drop_down</i>
    </button>

    <ul style:margin-top={height} slot="content" class="z-depth-1">
        <button on:click={() => manager.set(true)}>
            <li>
                <i class="material-icons">person</i>
                <span>Mon compte</span>
            </li>
        </button>
        {#if $user.roles.GLOBAL_ADMIN}
            <a href="/resources.api/swagger/" rel="external">
                <li>
                    <i class="material-icons">code</i>
                    <span>API doc</span>
                </li>
            </a>
        {/if}
        <button on:click={() => user.logout()}>
            <li>
                <i class="material-icons">exit_to_app</i>
                <span>Déconnexion</span>
            </li>
        </button>
    </ul>
</Dropdown>


<style>
    button.account{display:flex;justify-content:space-between;align-items:center;font-weight:bold;color:#424242;padding:0 16px;min-width:168px;max-width:240px;font-size:13px;background:#fafafa;}
    button.account span{display:flex;line-height:16px;flex-wrap:wrap;}
    button.account span b{display:block;max-width:200px;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;}
    button.account:hover{background:#f5f5f5;}
    button.account i{font-size:20px;padding:0;margin:0;}
    button.account:active{background-color:#eeeeee;}


    ul{font-family:'Roboto';background:#fff;padding:2px;}
    li, ul button{
        display:flex;justify-content:flex-start;align-items:center;width:100%;height:100%;
    }
    li{min-height:32px;cursor:pointer;transition:all,.02s;font-size:14px;}
    li:hover{background:#eee;}
    ul i{font-size:20px;padding:0 8px;color:#616161;}

</style>