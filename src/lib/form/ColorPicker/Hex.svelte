
<script lang="ts">
    import type { ColorHandler } from '$lib/form'
    type Props = { handler: ColorHandler }
    let { handler }: Props = $props()

    let value = $state('')
    $effect(() => {
        value = handler.hex.replace('#', '')
    })
</script>


<section class="flex">
    <div class="label flex">
        <svg width="100%" height="100%" viewBox="0 0 256 256"><path fill="currentColor" d="M144 224h-1.4a8 8 0 0 1-6.5-9.3l8.5-46.6H96.9l-9 49.4a8 8 0 1 1-15.8-2.8l8.5-46.7H32a8 8 0 0 1 0-16h51.5l8.7-48H43.6a8 8 0 1 1 0-16h51.5l9-49.4a8 8 0 1 1 15.8 2.8L111.4 88h47.7l9-49.4a8 8 0 0 1 15.8 2.8L175.4 88H224a8 8 0 0 1 0 16h-51.5l-8.7 48h48.6a8 8 0 0 1 0 16h-51.5l-9 49.4a8 8 0 0 1-7.9 6.6Zm-44.2-72h47.7l8.7-48h-47.7Z"></path></svg>
    </div>
    <div class="color"><div style:background={handler.hex}></div></div>
    <input type="text" bind:value oninput={() => handler.setHEX('#' + value)}/> 
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
        color: var(--font-grey, #757575);
    }
    div.color {
        height: 32px;
        width: 32px;
        border-radius: 4px;
        border: 1px solid var(--grey, #e0e0e0);
        padding: 4px;
        margin-right: 12px;
    }
    div.color div {
        width: 100%;
        height: 100%;
        border-radius: 2px;
    }
    input[type=text] {
        padding: 0 4px;
        height: 28px;
        border-radius: 2px;
        width: 80px;
    }
</style>