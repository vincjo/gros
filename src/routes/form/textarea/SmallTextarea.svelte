<script>
    import { Textarea } from '$lib/form'
    let value = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco'

    let errors = []

    const handleClick = () => {
        errors = [
            {field: 'textarea', message: 'Gibberish is not authorized'},
        ]
    }

    const reset = () => {
        errors= []
        value = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco'
    }
</script>

<section>
    <Textarea {errors} icon={'message'} label={'Comment'} field={'textarea'} bind:value/>

    <button class="btn z-depth-1" type="submit" on:click|preventDefault={handleClick}>
        Send
        <i class="micon">send</i>
    </button>

    <button class="reset" on:click={reset}>reset</button>
</section>


<style>
    section{border:1px solid #e0e0e0;border-radius:16px;padding:16px 24px;width: 344px;}
    button.btn{height:48px;width:100%;background:var(--primary);font-size:16px;color:#fff;margin-top:16px;}
    button.btn:hover{background:var(--primary-darken)}
    button.btn i{margin:8px;}

    button.reset{margin-top:16px;color:var(--primary);font-weight:bold;font-size:14px;width:100%;text-align:center;padding:4px 0;}
    button.reset:hover{background:#fff;color:var(--primary-darken)}
</style>