<script>
    import { Tooltip } from '$lib/tooltip'
    import { Range } from '$lib/form'
</script>



<section>
    <button class="tooltip btn">
        <Tooltip top content="Tooltip top" gap={16}/>
        Gap = 16
        <i class="micon">keyboard_arrow_up</i>
    </button>

    <button class="tooltip btn">
        <Tooltip bottom content="Tooltip bottom" gap={32}/>
        Gap = 32
        <i class="micon">keyboard_arrow_down</i>
    </button>

    <button class="tooltip btn">
        <Tooltip left content="Tooltip left" gap={64}/>
        <i class="micon">keyboard_arrow_left</i>
        Gap = 64
    </button>

    <button class="tooltip btn">
        <Tooltip right content={'Tooltip right'} gap={0}/>
        Gap = 0
        <i class="micon">keyboard_arrow_right</i>
    </button>
</section>


<style>
    section{display:flex;padding:16px 24px;justify-content:space-around;}
    button{padding:8px 16px;font-size:14px;width:120px;margin:16px;background:var(--primary);color:#fff;}
    button i{font-size:18px;margin:4px;}
</style>