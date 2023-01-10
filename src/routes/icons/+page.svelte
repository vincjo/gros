<script>
    import { icons } from './icons.ts'
    import Icons from './icons.svx'
</script>

    <div class="svx">
        <Icons/>
    </div>
    <aside>
        {#each icons as icon}
            <div>
                <i class="material-icons">{icon}</i>
                <span>{icon}</span>
            </div>
        {/each}
    </aside>


<br><br><br><br>
<br><br><br><br>
<br><br><br><br>

<style>
    aside{display:flex;justify-content:space-between;flex-wrap: wrap;}
    div{margin:16px 8px;text-align:center;width:140px;transition:all,.2s;border-radius:4px;border:1px solid transparent;}
    div:hover{background:#f5f5f5;border:1px solid #eee;}
    i{display:block;font-size:48px;color:#424242;margin:16px 0;}
    span{color:var(--primary);font-size:12px;font-family:Arial, Helvetica, sans-serif;}
</style>