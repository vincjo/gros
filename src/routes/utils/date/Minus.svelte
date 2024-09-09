<script lang="ts">
    import { DateTime, type Format } from '$lib/date'
    const date = new Date()
    const format: Format = { year: 'numeric', month: 'long', day: 'numeric' }
</script>

<section>
    <div class="flex">
        <span>{DateTime(date).minus(2, 'year').format(format)}</span>
        <code>DateTime(date).minus(2, 'year').format()</code>
    </div>
    <div class="flex">
        <span>{DateTime(date).minus(2, 'month').format(format)}</span>
        <code>DateTime(date).minus(2, 'month').format()</code>
    </div>
    <div class="flex">
        <span>{DateTime(date).minus(2, 'week').format(format)}</span>
        <code>DateTime(date).minus(2, 'week').format()</code>
    </div>
    <div class="flex">
        <span>{DateTime(date).minus(2, 'day').format(format)}</span>
        <code>DateTime(date).minus(2, 'day').format()</code>
    </div>

</section>


<style>
    section{
        border: 1px solid var(--grey);
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