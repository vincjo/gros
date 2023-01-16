<script>
    import Header from './DatePicker/Header.svelte'
    import Calendar from './DatePicker/Calendar.svelte'
    import DateHandler from './DatePicker/DateHandler'

    export let value = null
    const handler = new DateHandler(value)
    const date = handler.getDate()

    $: value = $date
</script>

<section class="z-depth-1">
    <Header {handler}/>
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