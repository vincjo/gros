<script lang="ts">
    import Header from './DatePicker/Header.svelte'
    import Calendar from './DatePicker/Calendar.svelte'
    import DateHandler from './DatePicker/DateHandler.svelte'

    let { value = $bindable() }: { value: string } = $props()
    const locale = {
        weekdays: 'dim._lun._mar._mer._jeu._ven._sam.'.split('_'),
        months: 'janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre'.split('_')
    }
    const handler = new DateHandler(value)
</script>

<section class="z-depth-1">
    <Header {handler} {locale}/>
    <Calendar {handler} bind:value/>
</section>


<style>
    section{
        width: 240px;
        padding:4px;
        margin-top: 2px;
        border:1px solid var(--grey, #e0e0e0);
        border-radius:4px;
        background: var(--bg-darken, #fff);
    }
</style>