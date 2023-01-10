<script>
    import { user } from '$modules/session'
    import Nav from './Nav.svelte'
</script>

<Nav/>

<section>
    <h1>Votre compte sera supprimé définitivement</h1>
    <button class="btn-large waves-effect z-depth-1" on:click={() => user.destroy()}>
        CONFIRMER LA SUPPRESSION
        <i class="material-icons left">delete_forever</i>
    </button>
</section>

<style>
    section{position:absolute;top:95px;left:0;bottom:0;right:0;overflow-y:auto;padding:10px 30px;}
    h1{font-size:16px;color:#e57373;font-weight:bold;text-align:center;}
    button{display:block;background: #fafafa;color:#e57373;margin:10px auto;text-align:left;width:100%;border:0;border-radius:3px;font-size:13px;height:60px;line-height:60px;}
    button i{line-height:60px;font-size:25px;}
	button:focus{background:#f5f5f5;}
    button:hover{background-color:#fff}
</style>