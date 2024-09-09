<script lang="ts">
    import { DateTime, type Format } from '$lib/date'
    import { DateInput } from '$lib/form'
    const format: Format = { year: 'numeric', day: 'numeric', month: 'long' }

    const date = new Date().toISOString()
    let y8_after = DateTime(date).plus(8, 'year').toISOString()
    let m4_after = DateTime(date).plus(4, 'month').toISOString()
    let w2_after = DateTime(date).plus(2, 'week').toISOString()
    let d6_after = DateTime(date).plus(6, 'day').toISOString()
    let d2_after = DateTime(date).plus(2, 'day').toISOString()
    let d1_after = DateTime(date).plus(1, 'day').toISOString()
</script>

<section>
    <h3>Futur</h3>
    <aside>
        <DateInput bind:value={y8_after} {format}/> 
        <span>{DateTime(y8_after).relative()}</span>
    </aside>
    <aside>
        <DateInput bind:value={m4_after} {format}/> 
        <span>{DateTime(m4_after).relative()}</span>
    </aside>
    <aside>
        <DateInput bind:value={w2_after} {format}/> 
        <span>{DateTime(w2_after).relative()}</span>
    </aside>
    <aside>
        <DateInput bind:value={d6_after} {format}/> 
        <span>{DateTime(d6_after).relative()}</span>
    </aside>
    <aside>
        <DateInput bind:value={d2_after} {format}/> 
        <span>{DateTime(d2_after).relative()}</span>
    </aside>
    <aside>
        <DateInput bind:value={d1_after} {format}/> 
        <span>{DateTime(d1_after).relative()}</span>
    </aside>
</section>


<style>
    section{
        width: 360px;
        border: 1px solid var(--grey);
        border-radius:8px;
        padding: 16px 24px;
        margin: 16px 0 0 16px;
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