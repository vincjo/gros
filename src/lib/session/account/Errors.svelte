<script>
    export let errors = []
    let list = []
    if (errors.length > 0) {
        list = errors.map(error => {
            return error.rule
        })
    }

</script>

<ul>
    {#if list.includes('required')}
        <li>les champs marqués d'un astérisque sont obligatoires</li>
    {/if}
    {#if list.includes('unique-login')}
        <li>L'identifiant est déjà enregistré pour un autre utilisateur</li>
    {/if}
    {#if list.includes('unique-email')}
        <li>L'adresse email est déjà enregistrée pour un autre utilisateur</li>
    {/if}
    {#if list.includes('email')}
        <li>L'adresse email n'est pas valide</li>
    {/if}
    {#if list.includes('password-verified')}
        <li>Ancien mot de passe erroné</li>
    {/if}
    {#if list.includes('password-confirmed')}
        <li>Les nouveaux mots de passe ne sont pas identiques</li>
    {/if}
</ul>

<style>
    ul{margin:0;}
</style>