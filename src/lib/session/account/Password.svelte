<script>
    import { page, account }    from '$modules/session'
    import { Input }            from '$modules/form'
    import { slide, fade }      from 'svelte/transition'
    import Nav                  from './Nav.svelte'
    import Errors               from './Errors.svelte'
    export let user = {}
    let form = {login: user.login, email: user.email, password_verify: '', password: '', password_confirm: ''}
    let errors = []
    async function save() {
        const result = await account.password(form)
        form.password_verify = ''
        form.password = ''
        form.password_confirm = ''
        if (result !== null) {
            errors = result.errors
        }
        else {
           $page = 'show'
        }
    }
</script>

<Nav/>

<section in:fade={{ duration: 300 }}>
    {#if errors && errors.length > 0}
        <button class="message" in:slide on:click={() => errors = false}>
            <Errors errors={errors}/>
        </button>
    {/if}
    <form>
        <Input label={'Mot de passe actuel'} mandatory={true} bind:value={form.password_verify} type={'password'}/>
        <Input label={'Nouveau mot de passe'} mandatory={true} bind:value={form.password} type={'password'}/>
        <Input label={'Confirmer le nouveau mot de passe'} mandatory={true} bind:value={form.password_confirm} type={'password'}/>

        <button class="z-depth-1 btn" type="submit" on:click|preventDefault={save}>
            <i class="material-icons">save</i>
            ENREGISTRER
            <i class="material-icons">chevron_right</i>
        </button>
    </form>
</section>

<style>
    section{position:absolute;top:95px;left:0;bottom:0;right:0;overflow-y:auto;padding:10px 30px;}

    button[type=submit]{justify-content:center;background:#f5f5f5;color:var(--primary);margin:16px 0;width:100%;font-size:18px;height:56px;}
    button i{font-size:22px;margin:8px;}
	button:focus{background:#f5f5f5;}
    button:hover{background-color:#eee}
    button.message{color:#e57373;border:1px solid #ffcdd2;font-size:12px;background:#ffebee;margin:0 auto 20px auto;width:100%;text-align:center;padding:5px;border-radius:4px;letter-spacing:0;}
</style>