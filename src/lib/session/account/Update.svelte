<script>
    import { page, account } from '$modules/session'
    import { Input } from '$modules/form'
    import { slide, fade } from 'svelte/transition'
    import Nav from './Nav.svelte'
    import Errors from './Errors.svelte'
    export let user
    let errors = null
    const save = async () => {
        const result = await account.edit(user)
        if (result !== null) {
            errors = result.errors
        }
        else {
           $page = 'show'
        }
    }
</script>

<Nav/>

<section in:fade={{ duration: 300 }} class="thin-scrollbar">
    {#if errors}
        <button class="message" transition:slide on:click={() => errors = false}>
            <Errors errors={errors}/>
        </button>
    {/if}
    <form>
        <Input small={true} label={'Identifiant'} mandatory={true} bind:value={user.login}/>
        <Input small={true} label={'Email'} mandatory={true} bind:value={user.email}/>
        <Input small={true} label={'Nom'} mandatory={true} bind:value={user.name}/>
        <Input small={true} label={'Prénom'} mandatory={true} bind:value={user.firstname}/>
        <Input small={true} label={'Organisme'} bind:value={user.organization_name}/>
        <Input small={true} label={'Fonction'} bind:value={user.office}/>

        <button class="z-depth-1 btn" type="submit" on:click|preventDefault={save}>
            <i class="material-icons">save</i>
            ENREGISTRER
            <i class="material-icons">chevron_right</i>
        </button>
    </form>




</section>

<style>
    section{position:absolute;top:72px;left:0;bottom:0;right:0;overflow-y:auto;padding:8px 32px;}
    button[type=submit]{justify-content:center;background:#f5f5f5;color:var(--primary);margin:16px 0;width:100%;font-size:18px;height:56px;}
    button i{font-size:22px;margin:8px;}
	button:focus{background:#f5f5f5;}
    button:hover{background-color:#eee}
    button.message{color:#e57373;border:1px solid #ffcdd2;font-size:12px;background:#ffebee;margin:0 auto 20px auto;width:100%;text-align:center;padding:5px;border-radius:4px;letter-spacing:0;}
</style>