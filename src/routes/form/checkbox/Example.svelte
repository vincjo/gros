<script lang="ts">
    import { Checkbox } from '$lib/form'
    let checked = $state(false)
</script>

<section>
    <Checkbox bind:checked size={20} margin={[0,8,0,0]}>
        J'approuve les conditions générales d'utilisation
    </Checkbox>
</section>



<style>
    section{
        border: 1px solid var(--grey);
        border-radius:8px;
        padding: 40px 40px;
    }
</style>