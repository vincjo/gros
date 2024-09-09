<script lang="ts">
    import type { DateHandler } from '$lib/form'
    type Props = {
        handler: DateHandler,
        value: string
    }
    let { handler, value = $bindable() }: Props = $props()

    const handleClick = (day: { year: number, month: number, number: number }) => {
        handler.setDate(day)
        value = handler.date.toISOString()
    }
</script>

<table>
    <thead>
        <tr>
            <th>lun.</th>
            <th>mar.</th>
            <th>mer.</th>
            <th>jeu.</th>
            <th>ven.</th>
            <th>sam.</th>
            <th>dim.</th>
        </tr>
    </thead>

    <tbody>
        {#each Array(6) as _, weekIndex}
            <tr>
                {#each handler.calendar.slice(weekIndex * 7, weekIndex * 7 + 7) as day}
                    <td>
                        <button
                            type="button"
                            class="close-dropdown"
                            onclick={() => handleClick(day)}
                            class:selected={day.year === handler.date.getFullYear() &&
                                day.month === handler.date.getMonth() &&
                                day.number === handler.date.getDate()}
                            class:other-month={day.month !== handler.navDate.getMonth()}
                        >
                            {day.number}
                        </button>
                    </td>
                {/each}
            </tr>
        {/each}
    </tbody>
</table>

<style>
    table {
        border-collapse: separate;
    }
    td,
    th {
        text-align: center;
    }
    thead tr {
        height: 32px;
        font-size: 12px;
    }
    td {
        padding: 0;
    }
    button {
        width: 28px;
        height: 28px;
        border-radius: 4px;
        font-size: 12px;
        line-height: 24px;
        margin: 2px 0 0 0;
        color: var(--font, #424242);
    }
    button.selected {
        background: #424242;
        color: #fff;
    }
    button.other-month {
        color: var(--font-grey, #757575);
    }
    button:hover {
        background: #424242;
        color: #fff;
    }
</style>
