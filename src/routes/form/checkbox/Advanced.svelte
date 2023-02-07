<script>
    import { Checkbox } from '$lib/form'
    let isVisible = true
    let hasElevation = false
    let hasCadastre = false
</script>

<section>
    <Checkbox bind:checked={isVisible} size={22} margin={[16,8]}>
        <aside slot="before" class:active={isVisible}>
            <i class="micon">{isVisible ? 'visibility' : 'visibility_off'}</i>
            <span>Visible</span>
        </aside>
    </Checkbox>
    <Checkbox bind:checked={hasElevation} size={22} margin={[16,8]}>
        <aside slot="before" class:active={hasElevation}>
            <i class="micon">landscape</i>
            <span>Elevation</span>
        </aside>
    </Checkbox>
    <Checkbox bind:checked={hasCadastre} size={22} margin={[16,8]}>
        <aside slot="before" class:active={hasCadastre}>
            <i class="micon">view_quilt</i>
            <span>Cadastre</span>
        </aside>
    </Checkbox>
</section>



<style>
    section{
        border: 1px solid #e0e0e0;
        border-radius:8px;
        padding: 40px 40px;
    }
    aside {
        display:flex; justify-content: flex-start; align-items: center;
        padding: 16px 8px;
        width: 176px;
    }
    aside span {
        color: #616161;
        font-size: 14px;
    }
    aside i {
        margin-right: 8px;
        color: #9e9e9e;
    }
    aside.active span {
        font-weight: bold;
    }
    aside.active span, 
    aside.active i {
        color: var(--primary);
    }
    section :global(button:not(.checkbox)) {
        border-bottom: 1px solid #e0e0e0;
        padding: 8px;
    }
</style>