<script lang="ts">
    import { Checkbox } from '$lib/form'
    let isVisible = true
    let hasElevation = false
    let hasCadastre = false
</script>

<section>
    <Checkbox bind:checked={isVisible} size={22} margin={[16,8]}>
        {#snippet before()}
        <aside class={{ active: isVisible }}>
            <i class="micon s24">{isVisible ? 'visibility' : 'visibility_off'}</i>
            <span>Visible</span>
        </aside>
        {/snippet}
    </Checkbox>
    <Checkbox bind:checked={hasElevation} size={22} margin={[16,8]}>
        {#snippet before()}
        <aside class={{ active: hasElevation }}>
            <i class="micon s24">landscape</i>
            <span>Elevation</span>
        </aside>
        {/snippet}
    </Checkbox>
    <Checkbox bind:checked={hasCadastre} size={22} margin={[16,8]}>
        {#snippet before()}
        <aside class={{ active: hasCadastre }}>
            <i class="micon s24">view_quilt</i>
            <span>Cadastre</span>
        </aside>
        {/snippet}
    </Checkbox>
</section>



<style>
    section{
        border: 1px solid var(--grey);
        border-radius:8px;
        padding: 40px 40px;
    }
    aside {
        display:flex; justify-content: flex-start; align-items: center;
        padding: 16px 8px;
        width: 176px;
    }
    aside span {
        color: var(--font-grey);
        font-size: 14px;
    }
    aside i {
        margin-right: 8px;
        color: var(--font-grey);
    }
    aside.active span {
        font-weight: bold;
    }
    aside.active span, 
    aside.active i {
        color: var(--primary);
    }
</style>