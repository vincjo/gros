<script lang="ts">
    import { DateTime, type Format } from '$lib/date'
    import { DateInput } from '$lib/form'
    const format: Format = { year: 'numeric', day: 'numeric', month: 'long' }

    const date = new Date().toISOString()
    let y8_before = DateTime(date).minus(8, 'year').toISOString()
    let m4_before = DateTime(date).minus(4, 'month').toISOString()
    let w2_before = DateTime(date).minus(2, 'week').toISOString()
    let d6_before = DateTime(date).minus(6, 'day').toISOString()
    let d2_before = DateTime(date).minus(2, 'day').toISOString()
    let d1_before = DateTime(date).minus(1, 'day').toISOString()
</script>

<section>
    <h3>Passé</h3>
    <aside>
        <DateInput bind:value={y8_before} {format}/> 
        <span>{DateTime(y8_before).relative()}</span>
    </aside>
    <aside>
        <DateInput bind:value={m4_before} {format}/> 
        <span>{DateTime(m4_before).relative()}</span>
    </aside>
    <aside>
        <DateInput bind:value={w2_before} {format}/> 
        <span>{DateTime(w2_before).relative()}</span>
    </aside>
    <aside>
        <DateInput bind:value={d6_before} {format}/> 
        <span>{DateTime(d6_before).relative()}</span>
    </aside>
    <aside>
        <DateInput bind:value={d2_before} {format}/> 
        <span>{DateTime(d2_before).relative()}</span>
    </aside>
    <aside>
        <DateInput bind:value={d1_before} {format}/> 
        <span>{DateTime(d1_before).relative()}</span>
    </aside>
</section>


<style>
    section{
        width: 360px;
        border: 1px solid var(--grey);
        border-radius:8px;
        padding: 16px 24px;
        margin: 16px 16px 0 0;
    }
    aside {
        display:flex;justify-content: space-between;align-items: center;
        margin: 4px 0;
        height: 40px;
    }
    span {
        color: var(--secondary)
    }
</style>