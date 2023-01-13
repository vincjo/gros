<script>
    import { Input } from '$lib/form'
    let form = {
        email: null,
        firstname: null,
        name: null,
        password: null,
        password_confirmed: null,
    }

    let errors = []

    const handleClick = () => {
        errors = [
            {field: 'email', message: 'Non valid email address'},
            {field: 'firstname', message: 'This firstname is not authorized'},
            {field: 'name', message: 'This name is not authorized'},
            {field: 'password', message: 'Not secured'},
            {field: 'password_confirmed', message: 'Passwords are different'},
        ]
    }

    const reset = () => {
        errors= []
        form = {
            email: null,
            firstname: null,
            name: null,
            password: null,
            password_confirmed: null,
        }
    }
</script>

<section>
    <Input required {errors} icon={'mail'} label={'Email'} field={'email'} bind:value={form.email}/>
    <Input          {errors} icon={'person'} label={'First name'} field={'firstname'} bind:value={form.firstname}/>
    <Input          {errors} icon={'person'} label={'Name'}  field={'name'}  bind:value={form.name}/>
    <Input required {errors} icon={'lock'} label={'Password'} field={'password'} bind:value={form.password} password/>
    <Input required {errors} icon={'lock'} label={'Confirm password'} field={'password_confirmed'} bind:value={form.password_confirmed} password />

    <button class="btn z-depth-1" type="submit" on:click|preventDefault={handleClick}>
        <i class="micon">save</i>
        Register
        <i class="micon">chevron_right</i>
    </button>

    <button class="reset" on:click={reset}>reset</button>
</section>


<style>
    section{border:1px solid #e0e0e0;border-radius:16px;padding:16px 24px;width:400px;}
    button.btn{height:48px;width:100%;background:var(--primary);font-size:16px;color:#fff;margin-top:16px;}
    button.btn:hover{background:var(--primary-darken)}
    button.btn i{margin:8px;}

    button.reset{margin-top:16px;color:var(--primary);font-weight:bold;font-size:14px;width:100%;text-align:center;padding:4px 0;}
    button.reset:hover{background:#fff;color:var(--primary-darken)}
</style>