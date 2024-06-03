<svelte:options runes={true}/>
<script lang="ts">
    import type { ColorHandler } from '$lib/form'
    type Props = { handler: ColorHandler }
    let { handler }: Props = $props()

    let hsla = $state('hsla(0, 0, 0, 0)')
    const [h, s, l] = $derived(handler.hsl)
    $effect(() => {
        hsla = `hsla(${h}, ${s}%, ${l}%, ${handler.opacity.toFixed(2)})`
    })
</script>


<section class="flex">
    <div class="label flex">
        <svg width="100%" height="100%" viewBox="0 0 512 512"><path fill="currentColor" d="M256 185a167.85 167.85 0 0 1 134.9-18.28C382.36 99.83 325.12 48 256 48S129.64 99.83 121.1 166.67A167.85 167.85 0 0 1 256 185Zm80 146.73a167.51 167.51 0 0 1-52.37 118.08A135 135 0 0 0 344 464c75 0 136-61 136-136a136 136 0 0 0-59.06-112.08A168.53 168.53 0 0 1 336 331.73Zm-52.42-125.54a167.87 167.87 0 0 1 49.36 89.89a136.14 136.14 0 0 0 58.06-95.7a135.87 135.87 0 0 0-107.43 5.81ZM176.05 331.73a168.53 168.53 0 0 1-85-115.81A136 136 0 0 0 32 328c0 75 61 136 136 136a135 135 0 0 0 60.42-14.19a167.51 167.51 0 0 1-52.37-118.08Zm3.01-35.65a167.87 167.87 0 0 1 49.36-89.89A135.87 135.87 0 0 0 121 200.38a136.14 136.14 0 0 0 58.06 95.7Zm123.84 49.25a168.22 168.22 0 0 1-93.8 0A135.9 135.9 0 0 0 256 431.6a135.9 135.9 0 0 0 46.9-86.27ZM209 311.62a136 136 0 0 0 94 0a135.93 135.93 0 0 0-47-87.22a135.93 135.93 0 0 0-47 87.22Z"></path></svg>
    </div>
    <div class="color"><div style:background-color="{hsla}"></div></div>
    <span>{hsla}</span>
</section>




<style>
    section {
        margin-top: 4px;
		width: 284px;
    }
    div.label {
        min-width: 32px;
        margin-right: 12px;
        justify-content: center;
    }
    div.label svg {
        width: 20px;
        color: #616161;
    }
    div.color {
        height: 32px;
        width: 32px;
        border-radius: 4px;
        border: 1px solid #e0e0e0;
        padding: 4px;
        margin-right: 12px;
        
		background-image: linear-gradient(45deg, #eee 25%, transparent 25%, transparent 75%, #eee 75%),
			linear-gradient(45deg, #eee 25%, transparent 25%, transparent 75%, #eee 75%);
		background-size: var(--pattern-size-2x, 12px) var(--pattern-size-2x, 12px);
		background-position: 0 0, var(--pattern-size, 6px) var(--pattern-size, 6px);
    }
    
    div.color div {
        width: 100%;
        height: 100%;
        border-radius: 2px;
    }
</style>