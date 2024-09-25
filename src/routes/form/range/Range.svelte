<script lang="ts">
    import { Range } from '$lib/form'
    let value = 14
</script>

<section>
    <aside>
        <p>valeur : <b>{value}</b></p>

        <Range bind:value min={0} max={50} precision={1} suffix="kg"/>
    </aside>
</section>

<style>
    section {
        display: flex;
        justify-content: space-between;
    }
    aside {
        padding: 24px;
        margin: 24px 0;
        width: 420px;
        padding: 0 24px;
        margin: 0 24px;
        padding-bottom: 16px;
        border: 1px solid var(--grey);
        border-radius: 8px;
    }
    p {
        display: block;
        margin: 16px 0 32px 0;
        text-align: center;
        font-weight: normal;
        color: #9e9e9e;
        font-size: 13px;
    }
    p b {
        color: var(--secondary);
    }
</style>
