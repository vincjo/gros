<script>
    import { Range } from '$lib/form'
    let value = [14]
    let range = [25, 75]
</script>


<section>
    <aside>
        <p>valeur : <b>{value}</b></p>

        <Range bind:value={value} min={0} max={50} step={0.1} suffix="kg"/>

        <span>1 valeur</span>
    </aside>

    <aside>
        <p>plage : de <b>{range[0]}</b> à <b>{range[1]}</b></p>

        <Range bind:value={range} min={0} max={100} suffix="%"/>

        <span>Plage de valeurs</span>
    </aside>
</section>


<style>
    section{display:flex;justify-content: space-between;}
    aside{padding:24px;margin:24px 0;width:320px;padding:0 24px;margin:0 24px;padding-bottom:16px;border:1px solid #e0e0e0;border-radius:8px;}
    p{display:block;margin:16px 0 32px 0;text-align:center;font-weight:normal;color:#9e9e9e;font-size:13px;}
    p b{color:var(--secondary);}

    aside span{display:block;margin-top:24px;text-align:center;color:#9e9e9e;font-style:italic;}
</style>