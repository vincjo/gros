<script>
    import { DateTime } from '$lib/date'
    import { DateInput } from '$lib/form'
    const format = { year: 'numeric', day: 'numeric', month: 'long' }

    const date = new Date().toISOString()
    let y8_before = DateTime.minus(date, 8, 'year')
    let m4_before = DateTime.minus(date, 4, 'month')
    let w2_before = DateTime.minus(date, 2, 'week')
    let d6_before = DateTime.minus(date, 6, 'date')
    let d2_before = DateTime.minus(date, 2, 'date')
    let d1_before = DateTime.minus(date, 1, 'date')
</script>

<section>
    <h3>Passé</h3>
    <aside>
        <DateInput bind:value={y8_before} {format}/> 
        <span>{DateTime.relative(y8_before)}</span>
    </aside>
    <aside>
        <DateInput bind:value={m4_before} {format}/> 
        <span>{DateTime.relative(m4_before)}</span>
    </aside>
    <aside>
        <DateInput bind:value={w2_before} {format}/> 
        <span>{DateTime.relative(w2_before)}</span>
    </aside>
    <aside>
        <DateInput bind:value={d6_before} {format}/> 
        <span>{DateTime.relative(d6_before)}</span>
    </aside>
    <aside>
        <DateInput bind:value={d2_before} {format}/> 
        <span>{DateTime.relative(d2_before)}</span>
    </aside>
    <aside>
        <DateInput bind:value={d1_before} {format}/> 
        <span>{DateTime.relative(d1_before)}</span>
    </aside>
</section>


<style>
    section{
        width: 360px;
        border: 1px solid #e0e0e0;
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