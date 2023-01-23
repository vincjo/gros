<script lang="ts">
    import { DateTime, type Format } from '$lib/date'
    const date = '2022-03-01'
    const format: Format = { year: 'numeric', month: 'long', day: 'numeric' }
</script>

<section>
    <div class="flex">
        <span>{DateTime.format(DateTime.plus(date, 2, 'year'), format)}</span>
        <code>DateTime.plus('2022-03-01', 2, 'year')</code>
    </div>
    <div class="flex">
        <span>{DateTime.format(DateTime.plus(date, 2, 'month'), format)}</span>
        <code>DateTime.plus('2022-03-01', 2, 'month')</code>
    </div>
    <div class="flex">
        <span>{DateTime.format(DateTime.plus(date, 2, 'week'), format)}</span>
        <code>DateTime.plus('2022-03-01', 2, 'week')</code>
    </div>
    <div class="flex">
        <span>{DateTime.format(DateTime.plus(date, 2, 'day'), format)}</span>
        <code>DateTime.plus('2022-03-01', 2, 'day')</code>
    </div>

</section>


<style>
    section{
        border: 1px solid #e0e0e0;
        border-radius:8px;
        padding: 16px 24px;
    }
    .flex{
        display:flex;justify-content: flex-start;align-items: center;
    }
    span {
        margin: 4px 0;
        color: var(--secondary);
        min-width: 158px;
    }
    code {
        padding: 4px 16px;
        color: var(--primary)
    }
</style>