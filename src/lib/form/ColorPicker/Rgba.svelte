
<script lang="ts">
    import type { ColorHandler } from '$lib/form'
    type Props = { handler: ColorHandler }
    let { handler }: Props = $props()

    let rgba = $state('rgba(0, 0, 0, 0)')
    const [r, g, b] = $derived(handler.rgb)
    $effect(() => {
        rgba = `rgba(${r}, ${g}, ${b}, ${handler.opacity.toPrecision(2)})`
    })
</script>


<section class="flex">
    <div class="label flex">
        <svg width="100%" height="100%" viewBox="0 0 24 24"><path fill="currentColor" d="M12 3a9 9 0 0 0 0 18c.83 0 1.5-.67 1.5-1.5c0-.39-.15-.74-.39-1.01c-.23-.26-.38-.61-.38-.99c0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5c0-4.42-4.03-8-9-8zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9S8 9.67 8 10.5S7.33 12 6.5 12zm3-4C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z"></path></svg>
    </div>
    <div class="color"><div style:background-color="{rgba}"></div></div>
    <span>{rgba}</span>
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