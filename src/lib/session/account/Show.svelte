<script>
    import { page } from '$modules/session'
    import { fade } from 'svelte/transition'
    import { getIntlRelativeTimeFormat } from '$utils/dates'
    export let user
</script>

<section in:fade={{ duration: 300 }}>
    <article>
        <i class="material-icons">person</i>
        <div>
            <h1>{user.firstname} {user.name}</h1>
            <span>{user.email}</span>
            <b>{user.roles.GLOBAL_ADMIN ? 'Administrateur' : ''}</b>
        </div>
    </article>
    <ul>
        <li>
            <div>Identifiant : </div>
            <span>{user.login}</span>
        </li>
        <li>
            <div>Email : </div>
            <span>{user.email}</span>
        </li>
        <li>
            <div>Organisme : </div>
            <span>{user.organization_name ?? 'non renseigné'}</span>
        </li>
        <li>
            <div>Fonction : </div>
            <span>{user.office ?? 'non renseignée'}</span>
        </li>
        <li>
            <div>Inscription : </div>
            <span>{getIntlRelativeTimeFormat(user.created_at)}</span>
        </li>
    </ul>
    <button class="z-depth-1 btn" on:click={() => $page = 'update'}>
        <i class="material-icons">edit</i>
        <span>MODIFIER MON COMPTE</span>
        <i class="material-icons">chevron_right</i>
    </button>
    <button class="z-depth-1 btn" on:click={() => $page =  'password'}>
        <i class="material-icons">lock</i>
        <span>MODIFIER MON MOT DE PASSE</span>
        <i class="material-icons">chevron_right</i>
    </button>
</section>

<style>
    section{padding:20px;}
    article{display:flex;flex-direction:row;align-items:top;}
    article i{margin:0 10px 0 0;width:80px;height:90px;color:var(--auth-color, #00796b);text-align:center;font-size:60px;line-height:90px;background:var(--primary-lighten-1, #e0f2f1);border-radius:4px;}
    article div{display:inline-block;}
    h1{font-size:17px;margin:0;padding:0;font-weight:400;}
    article span{display:block;color:#9e9e9e;font-size:14px;padding-top:5px;}
    article b{display:block;font-size:13px;padding-top:5px;font-weight:400;color:#757575;}
    ul{margin:16px 8px;}
    li{display:flex;justify-content:flex-start;align-items:center;min-height:35px;border-bottom:1px solid #eee;color:#718792;font-size:13px;}
    li div{min-width:80px;white-space:nowrap;}
    li span{color:#424242;word-wrap: break-word;}
    button{justify-content:flex-start;color:var(--primary, #00796b);margin:8px auto;width:100%;border-radius:4px;font-size:14px;min-height:40px;padding:0 16px;background:#fafafa;}
    button i{font-size:20px;margin:8px;}
	button:focus{background:#f5f5f5;}
    button:hover{background-color:#eee}
</style>