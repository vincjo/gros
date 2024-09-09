<script>
    import { DateInput } from '$lib/form'
</script>

<section>
    <DateInput format={{ year: '2-digit', day: 'numeric', month: 'short' }} value="1999-02-23" />
    <DateInput format={{ year: 'numeric', day: '2-digit', month: 'long', weekday: 'long' }} value="2001-12-25"/>
    <DateInput format={{ year: 'numeric', day: 'numeric', month: 'numeric' }} value="2048-04-01" />
</section>

<style>
    section {
        display: flex;
        justify-content: space-between;
        width: 100%;
        padding: 24px;
        border: 1px solid var(--grey);
        border-radius: 8px;
    }
</style>
