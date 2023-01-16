<script>
    import Header from './DatePicker/Header.svelte'
    import Body from './DatePicker/Body.svelte'
    import DateHandler from './DatePicker/DateHandler'

    export let value = null
    const handler = new DateHandler(value)
    const date = handler.getDate()
</script>

<h3>{$date.toISOString()}</h3>

<section class="z-depth-1">
    <Header {handler}/>
    <Body {handler}/>
</section>


<style>
    section{
        width: 248px;
        padding:4px;
        border:1px solid #eee;
        border-radius:4px;
    }
</style>