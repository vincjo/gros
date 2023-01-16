<script lang="ts">
    import type DateHandler from './DateHandler'

    export let handler: DateHandler
    const calendar = handler.getCalendar()
    const date = handler.getDate()
    const navDate = handler.getNavDate()
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
                {#each $calendar.slice(weekIndex * 7, weekIndex * 7 + 7) as day}
                    <td>
                        <button
                            class="close-dropdown"
                            on:click={() => handler.setDate(day)}
                            class:selected={
                                day.year === $date.getFullYear() &&
                                day.month === $date.getMonth() &&
                                day.number === $date.getDate()
                            }
                            class:other-month={day.month !== $navDate.getMonth()}
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
    table{border-collapse:separate;}
    td, th{text-align:center;}
    thead tr{height:32px;font-size:12px;}
    td{padding:0;}
    button{width:28px;height:28px;margin:0 auto;border-radius:4px;font-size:12px;line-height:24px;margin:2px 0 0 0;}
    button.selected{background:#424242;color:#fff;}
    button.other-month{color:#bdbdbd;}
</style>