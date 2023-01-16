<script>
    import { DateInput }  from '$lib/form'
    let date = '2017-08-24'
</script>


<section>
    <DateInput big icon="child_friendly" label="Date de naissance" bind:value={date} format={{ 
        year: 'numeric',
        month: 'long',
        weekday: 'long',
        day: 'numeric'
    }}/>
</section>


<style>
    section{width:520px;padding:24px;border:1px solid #e0e0e0;border-radius:8px;}
</style>