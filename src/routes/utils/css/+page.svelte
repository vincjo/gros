<script>
    import ThinScrollbar from './ThinScrollbar.svelte'
    import ZDepth from './ZDepth.svelte'
    import Flex from './Flex.svelte'
</script>

<div class="svx">
    <h1>CSS</h1>
</div>



<div class="svx"><h2>.thin-scrollbar</h2></div>

<ThinScrollbar/>

<br><br>


<div class="svx"><h2>.alt-font</h2></div>


<div class="flex">
    <h1 class="alt-font" style="margin-right: 24px">Avec</h1>
    <h1>Sans</h1>
</div>


<br><br>

<div class="svx"><h2>.z-depth-x</h2></div>

<ZDepth/>

<br><br>

<div class="svx"><h2>.btn</h2></div>

<div class="flex">
    <button class="btn" style="margin-right: 40px;color:var(--primary)">
        <i class="micon" style="font-size:20px;margin:2px 8px;">beach_access</i>
        Bouton avec
    </button>
    
    <button style="color:var(--primary);">
        <i class="micon" style="font-size:20px;margin:2px 8px;">beach_access</i>
        Bouton sans
    </button>
</div>


<br><br>

<div class="svx"><h2>.flex</h2></div>

<Flex/>


<br><br><br><br>
<br><br><br><br>
<br><br><br><br>
<br><br><br><br>

