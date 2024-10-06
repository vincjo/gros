
<script lang="ts">
    import { Dropdown } from '$lib/dropdown'
    import type { Locale, DateHandler } from '../'
    type Props = {
        handler: DateHandler,
        locale: Locale
    }
    let { handler, locale }: Props = $props()

    const getYears = () => {
        const min = handler.year - 5
        const max = handler.year + 5
        let years = []
        for (let i = min; i <= max; i++) {
            years.push(i)
        }
        return years
    }
</script>


<header>
    <!-- <button type="button" on:click={() => handler.setYear($navDate.getFullYear() - 1)} class="nav">
        <i class="icon" style:width="18px" style:height="18px"><svg width="100%" height="100%" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 6v12M18 6l-6 6l6 6"></path></svg></i>
    </button> -->

    <button type="button" aria-label="previous month" onclick={() => handler.setMonth(handler.month - 1)} class="nav">
        <i class="icon"><svg width="100%" height="100%" viewBox="0 0 24 24"><path fill="currentColor" d="M14.71 6.71a.996.996 0 0 0-1.41 0L8.71 11.3a.996.996 0 0 0 0 1.41l4.59 4.59a.996.996 0 1 0 1.41-1.41L10.83 12l3.88-3.88c.39-.39.38-1.03 0-1.41z"></path></svg></i>
    </button>
    <div class="flex-around">
        <Dropdown>
            <aside class="month flex">
                {locale.months[handler.month]}
                <i class="micon">arrow_drop_down</i>
            </aside>
            {#snippet content()}
            <div class="select month z-depth-2">
                {#each locale.months as month, i}
                    <button type="button" onclick={() => handler.setMonth(i)} class:active={handler.month === i}>
                        {month}
                    </button>
                {/each}
            </div>
            {/snippet}
        </Dropdown>

        <Dropdown>
            <aside class="year flex">
                {handler.year}
                <i class="micon">arrow_drop_down</i>
            </aside>
            {#snippet content()}
            <div class="year select z-depth-2">
                {#each getYears() as year}
                    <button type="button" onclick={() => handler.setYear(year)} class:active={handler.year === year}>
                        {year}
                    </button>
                {/each}
            </div>
            {/snippet}
        </Dropdown>
    </div>


    <button type="button" aria-label="next month" onclick={() => handler.setMonth(handler.month + 1)} class="nav">
        <i class="icon"><svg width="100%" height="100%" viewBox="0 0 24 24"><path fill="currentColor" d="M9.29 6.71a.996.996 0 0 0 0 1.41L13.17 12l-3.88 3.88a.996.996 0 1 0 1.41 1.41l4.59-4.59a.996.996 0 0 0 0-1.41L10.7 6.7c-.38-.38-1.02-.38-1.41.01z"></path></svg></i>
    </button>

    <!-- <button type="button" on:click={() => handler.setYear($navDate.getFullYear() + 1)} class="nav">
        <i class="icon" style:width="18px" style:height="18px"><svg width="100%" height="100%" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"   d="m6 6l6 6l-6 6M17 5v13"></path></svg></i>
    </button> -->
</header>


<style>
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding:0 4px;
        height:40px;
        border-radius: 4px 4px 0 0;
        border-bottom: 1px solid var(--grey-lighten, #eee);
        background:var(--grey-lighten-3, #fafafa);
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
    button.nav{
        height:24px;
        width:24px !important;
        border-radius:50%;
        color:var(--font-grey, #757575);
    }
    button.nav:hover{
        background: var(--grey-lighten, #eee);
    }
    aside.month, aside.year{
        justify-content:space-between;
        height:32px;
        border:1px solid var(--grey, #e0e0e0);
        color: var(--font, #424242);
        padding:0 4px 0 8px;
        height:24px;
        font-size:13px;
        background:var(--bg-darken, #fff);
        margin-right:2px;
        transition: all, 0.2s;
        border-radius: 4px;
    }
    aside.month i, aside.year i{
        color:var(--font-grey, #757575);
        font-size:20px;
        margin-left:4px;
    }
    .month{width:96px;}
    .year{width:64px;}

    div.select{
        background:var(--bg-darken, #fff);
        border:1px solid var(--grey, #e0e0e0);
        border-top:1px solid var(--grey-lighten, #eee);
        border-radius:4px;
        margin-top: 2px;
        padding:4px 4px;
    }
    div.select button{
        justify-content:flex-start;
        font-size:12px;
        color: var(--font, #424242);
        width:100%;
        height:20px;
        padding:0 8px;
    }
    div.select button:hover{
        background:var(--grey-lighten, #eee);
    }
    div.select button.active{
        background:#424242;
        color:#fff;
    }
    i.icon {
        width: 22px;
        height: 22px;
    }

</style>