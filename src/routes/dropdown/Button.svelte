<script>
    import { Dropdown } from '$lib/dropdown'
</script>


<Dropdown preventClickOutside>
    <button class="btn z-depth-1">
        Drop me!
    </button>
    <ul slot="content" class="z-depth-1">
        <li>Option 1</li>
        <li>Option 2</li>
        <li>Option 3</li>
        <li>Option 4</li>
    </ul>
</Dropdown>



<style>
    button{padding:12px 24px;background:var(--primary);color:#fff;font-size:16px;border-radius:4px;}

    button:hover{background:var(--primary-darken)}
    button:active{background:var(--primary)}

    ul{padding:4px;background:#fff;border-radius:4px;border:1px solid #eee;}
    li{cursor:pointer;transition:all,0.2s;padding:4px 8px;border-radius:2px;}
    li:hover{background:#eee;}
</style>