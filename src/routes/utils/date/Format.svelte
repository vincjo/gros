<script lang="ts">
    import { DateTime } from '$lib/date'
</script>

<section>
    <div class="flex">
        <span>{DateTime('2022-01-01').format()}</span>
        <i>Default format</i>
    </div>

    <div class="flex">
        <span>{DateTime('2022-01-01').format({ year: 'numeric', month: 'numeric', day: 'numeric'})}</span>
        <code>{`{ year: 'numeric', month: 'numeric', day: 'numeric'}`}</code>
    </div>

    <div class="flex">
        <span>{DateTime('2022-01-01').format({ year: '2-digit', month: 'numeric', weekday: 'short'})}</span>
        <code>{`{ year: '2-digit', month: 'numeric', weekday: 'short'}`}</code>
    </div>

    <div class="flex">
        <span>{DateTime('2022-01-01').format({ year: 'numeric', month: 'long', day: 'numeric'})}</span>
        <code>{`{ year: 'numeric', month: 'long', day: 'numeric'}`}</code>
    </div>

    <div class="flex">
        <span>{DateTime('2022-01-01').format({ month: 'long', day: '2-digit', weekday: 'long'})}</span>
        <code>{`{  month: 'long', day: '2-digit', weekday: 'long'}`}</code>
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