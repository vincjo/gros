<script>
    import { Dropdown } from '$lib/dropdown'
</script>

<Dropdown preventClosing>
    <button class="btn z-depth-1">
        Drop me!
    </button>
    <ul slot="content" class="z-depth-1">
        <li>No closure</li>
        <li class="close-dropdown"><b>Close</b></li>
        <li>No closure</li>
        <li class="close-dropdown"><b>Close</b></li>
    </ul>
</Dropdown>



<style>
    button{padding:12px 24px;background:var(--primary);color:#fff;font-size:16px;border-radius:4px;}

    button:hover{background:var(--primary-darken)}
    button:active{background:var(--primary)}

    ul{padding:4px;background:#fff;border-radius:4px;border:1px solid #eee;}
    li{cursor:pointer;transition:all,0.2s;padding:4px 8px;border-radius:2px;}
    li:hover{background:#eee;}
    li b{color:var(--secondary);}
</style>