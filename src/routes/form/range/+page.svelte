<script>
    import { Range } from '$lib/form'
    let value = [0]
    let double = [25, 75]
    
</script>


<div class="svx">
    <h1>WORK IN PROGRESS</h1>
</div>

<section>
    <aside>
        <Range bind:values={value} min={0} max={100}/>

        <p>{value[0]}</p>
    </aside>

    <aside>
        <Range pips bind:values={double} min={0} max={100} suffix="%"/>

        <p>from {double[0]} to {double[1]}</p>
    </aside>

</section>



<style>
    section{margin:80px 0;}
    aside{padding:24px;margin:24px 0;}
    p{display:block;margin-top:16px;text-align:center;color:var(--secondary);font-family:Varela;font-weight:bold;}
</style>