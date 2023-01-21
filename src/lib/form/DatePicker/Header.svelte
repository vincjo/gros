<script lang="ts">
    import { Dropdown } from '$lib/dropdown'
    import type DateHandler from './DateHandler'
    import type { locale } from '../'

    export let handler: DateHandler
    const navDate = handler.getNavDate()

    export let locale: locale

    const getYears = () => {
        const min = $navDate.getFullYear() - 5
        const max = $navDate.getFullYear() + 5
        let years = []
        for (let i = min; i <= max; i++) {
            years.push(i)
        }
        return years
    }
</script>


<header>

    <button on:click={() => handler.setMonth($navDate.getMonth() - 1)} class="nav ignore-click-outside">
        <i class="micon">chevron_left</i>
    </button>
    <div class="flex-around">
        <Dropdown>
            <button class="month">
                {locale.months[$navDate.getMonth()]}
                <i class="micon">arrow_drop_down</i>
            </button>
            <div slot="content" class="select month z-depth-2">
                {#each locale.months as month, i}
                    <button on:click={() => handler.setMonth(i)} class:active={$navDate.getMonth() === i}>
                        {month}
                    </button>
                {/each}
            </div>
        </Dropdown>
    
        <Dropdown>
            <button class="year">
                {$navDate.getFullYear()}
                <i class="micon">arrow_drop_down</i>
            </button>
            <div slot="content" class="select year z-depth-2">
                {#each getYears() as year}
                    <button on:click={() => handler.setYear(year)} class:active={$navDate.getFullYear() === year}>
                        {year}
                    </button>
                {/each}
            </div>
        </Dropdown>
    </div>


    <button on:click={() => handler.setMonth($navDate.getMonth() + 1)} class="nav">
        <i class="micon">chevron_right</i>
    </button>

</header>


<style>
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding:0 4px;
        height:40px;
        border-bottom: 1px solid #eee;
        background:#fafafa;
    }

    div.flex-around{
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    button {
        display:flex;
        justify-content: center;
        align-items: center;
    }
    button.nav{height:32px;width:32px !important;border-radius:50%;color:#757575;}
    button.nav:hover{background:#eee;}
    button.month, button.year{justify-content:space-between;height:32px;border:1px solid #e0e0e0;padding:0 4px 0 8px;height:24px;font-size:13px;background:#fff;margin-right:2px;}
    button.month i, button.year i{color:#757575;font-size:20px;margin-left:4px;}
    .month{width:96px;}
    .year{width:64px;}

    div.select{background:#fff;border:1px solid #e0e0e0;border-top:1px solid #eee;border-radius:0 0 4px 4px;padding:0 4px;}
    div.select button{justify-content:flex-start;font-size:12px;width:100%;height:20px;padding:0 8px;}
    div.select button:hover{background:#eee;}
    div.select button.active{background:#424242;color:#fff;}


</style>