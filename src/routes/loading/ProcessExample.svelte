<script>
    import { loading, Loading } from '$lib/loading'
    import { Input } from '$lib/form'

    let form = {
        message: 'Loading data',
        submessage: 'It may take a few seconds'
    }

    const launch = () => {
        loading.start(form.message, form.submessage)
        setTimeout(() => { 
            loading.stop()
        }, 3000)
    }
</script>

<section>
    <Input small={true} label={'Message'} bind:value={form.message}/>
    <Input small={true} label={'Submessage'} bind:value={form.submessage}/>
    
    <button class="btn" onclick={launch}>
        <i class="micon">play_circle_outline</i>
        Run Process 3 seconds
    </button>
</section>

<Loading process/>

<style>
    section{width:400px;}
    button{height:56px;padding:0 40px;font-size:18px;background:var(--primary);color:#fff;margin:16px 0;}
    button i{margin:8px;}
    button:hover{background:var(--primary-darken)}
</style>
