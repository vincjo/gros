<script>
    import { ColorPicker } from '$lib/form'

    let value = $state('#cc1760')
</script>

<section class="flex">
    <ColorPicker bind:value opacity={0.4}/>
    <div>value: {value}</div>
</section>

<style>
    section {
        align-items: flex-start;
    }
    div {
        margin-left: 40px;
        font-family: JetBrains;
        font-size: 22px;
        color: var(--font);
    }
</style>