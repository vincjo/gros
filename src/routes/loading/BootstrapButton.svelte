<script lang="ts">
    import { Loading } from '$lib/loading'

    let active = false
    const launch = () => {
        active = true
        setTimeout(() => {
            active = false
        }, 3000)
    }
</script>

<button class="btn" onclick={launch}>
    <i class="micon">play_circle_outline</i>
    Run Bootstrap 3 seconds
</button>

{#if active}
    <Loading bootstrap />
{/if}

<style>
    button {
        height: 56px;
        padding: 0 40px;
        font-size: 18px;
        background: var(--primary);
        color: #fff;
    }
    button i {
        margin: 8px;
    }
    button:hover {
        background: var(--primary-darken);
    }
</style>
