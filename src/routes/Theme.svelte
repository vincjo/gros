<script>
    import { theme } from '$utils/theme'
</script>


<nav>
    <h3>Thème</h3>
    <button class:active={$theme === 'onb'      } on:click={() => $theme = 'onb'      } class="btn">
        <i class="micon">{$theme === 'onb' ? 'radio_button_checked' : 'radio_button_unchecked'}</i>
        Cyan-pink
    </button>
    <button class:active={$theme === 'resources'} on:click={() => $theme = 'resources'} class="btn">
        <i class="micon">{$theme === 'resources' ? 'radio_button_checked' : 'radio_button_unchecked'}</i>
        Teal-blue
    </button>
    <button class:active={$theme === 'imope'    } on:click={() => $theme = 'imope'    } class="btn">
        <i class="micon">{$theme === 'imope' ? 'radio_button_checked' : 'radio_button_unchecked'}</i>
        Gold-red
    </button>
</nav>

<style>
    h3{color:var(--secondary);text-transform:uppercase;text-align:center;margin:8px 0;}
    nav{position:fixed;top:64px;right:40px;z-index:99;width:160px;padding:8px 8px 16px 8px;border:1px solid #e0e0e0;border-radius:16px;background:rgba(255,255,255,0.8)}
    button{height:32px;padding:0 8px;width:100%;margin:2px 0;color:var(--primary);justify-content:flex-start;font-weight:bold;background:transparent}
    button:hover{background:#eee;background:rgba(230,230,230,0.8)}
    button.active{background:rgba(240,240,240,0.8);}
    button i{margin-right:8px;}

    @media (max-width: 980px) { 
        nav{display:none;}
    }
</style>