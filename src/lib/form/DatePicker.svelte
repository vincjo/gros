<script lang="ts">
    import Header from './DatePicker/Header.svelte'
    import Calendar from './DatePicker/Calendar.svelte'
    import DateHandler from './DatePicker/DateHandler'

    export let value: string
    export let locale = {
        weekdays: 'dim._lun._mar._mer._jeu._ven._sam.'.split('_'),
        months: 'janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre'.split('_')
    }
    const handler = new DateHandler(value)
    const date = handler.getDate()

    $: value = $date.toISOString()
</script>

<section class="z-depth-1">
    <Header {handler} {locale}/>
    <Calendar {handler}/>
</section>


<style>
    section{
        width: 248px;
        padding:4px;
        border:1px solid #eee;
        border-radius:4px;
        background: #fff;
    }
</style>