<script>
    import { Tooltip } from '$lib/tooltip'
</script>

<section>
    <button class="tooltip btn">
        <Tooltip top content="Tooltip top"/>
        Top
        <i class="micon">keyboard_arrow_up</i>
    </button>

    <button class="tooltip btn">
        <Tooltip bottom content="Tooltip bottom"/>
        Bottom
        <i class="micon">keyboard_arrow_down</i>
    </button>

    <button class="tooltip btn">
        <Tooltip left content="Tooltip left"/>
        <i class="micon">keyboard_arrow_left</i>
        Left
    </button>

    <button class="tooltip btn">
        <Tooltip right content={'Tooltip right'}/>
        Right
        <i class="micon">keyboard_arrow_right</i>
    </button>
</section>


<style>
    section{display:flex;padding:16px 24px;justify-content:space-around;}
    button{padding:8px 16px;font-size:14px;width:120px;margin:16px;background:var(--primary);color:#fff;}
    button i{font-size:18px;margin:4px;}
</style>