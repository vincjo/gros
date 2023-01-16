<script>
    import { DatePicker, DateInput, Input }  from '$lib/form'
    let email = 'lol@lol.lol' 
    let date = '2017-08-24'
</script>

<br><br><br><br>
<br><br><br><br>

<section>
    <Input required icon="mail" label="Email" bind:value={email}/>

    <DateInput icon="child_friendly" label="Date de naissance" bind:value={date}/>
</section>


<br><br><br><br>

<!-- <DatePicker/> -->


<style>
    section{width:520px;padding:24px;border:1px solid #e0e0e0;border-radius:8px;}
</style>