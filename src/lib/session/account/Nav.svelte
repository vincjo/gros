<script>
    import { page } from '$modules/session'
</script>

    <button on:click={() => $page = 'show'}>
        <i class="material-icons">chevron_left</i>
        RETOUR
    </button>

<style>
    button{position:absolute;top:40px;left:0;right:0;background: #fff;color:var(--primary, #00796b);padding:0 8px;font-size:16px;height:32px;justify-content:flex-start;}
    button i{font-size:30px;padding-right:16px;}
    button:hover{background-color:#eee}
</style>