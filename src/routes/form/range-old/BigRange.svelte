<script>
    import { Range } from '$lib/form'
    let range = [25, 75]
</script>

<aside>
    <p>valeurs : de <b>{range[0]}</b> à <b>{range[1]}</b></p>
    <Range bind:value={range} min={0} max={100} suffix="%" pips big/>

    <span/>
</aside>


<style>
    aside{padding:24px;margin:24px;padding:0 24px;padding-bottom:16px;border:1px solid #e0e0e0;border-radius:8px;}
    p{display:block;margin:16px 0 32px 0;text-align:center;font-weight:normal;color:#9e9e9e;font-size:13px;}
    p b{color:var(--secondary);}

    aside span{display:block;margin-top:32px;text-align:center;color:#9e9e9e;font-style:italic;}
</style>