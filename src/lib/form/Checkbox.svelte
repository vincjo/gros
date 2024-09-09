<script lang="ts">
    import type { Snippet } from 'svelte'
    import { scale } from 'svelte/transition'
    type Props = { 
        checked     : boolean, 
        size       ?: number, 
        margin     ?: number[], 
        children   ?: Snippet,
        before     ?: Snippet
        onclick    ?: () => void
    }
    let { 
        checked     = $bindable(), 
        size        = 18, 
        margin      = [4, 4], 
        onclick     = () => {},
        children, 
        before 
    }: Props = $props()
</script>

<button type="button" class="checkbox" onclick={() => {(checked = !checked); onclick()}}>
    {#if before}{@render before()}{/if}
    <span
        style:height="{size + 'px'}"
        style:width="{size + 'px'}"
        style:margin="{margin.join('px ')}"
    >
        {#if checked}
            <svg width="100%" height="100%" viewBox="0 0 24 24" transition:scale={{ duration: 150 }}>
                <path fill="currentColor" d="m9.55 15.15l8.475-8.475q.3-.3.7-.3t.7.3t.3.713t-.3.712l-9.175 9.2q-.3.3-.7.3t-.7-.3L4.55 13q-.3-.3-.288-.712t.313-.713t.713-.3t.712.3z"/>
            </svg>
        {/if}
    </span>
    {#if children}{@render children()}{/if}
</button>

<style>
    button {
        display: flex;
        justify-content: center;
        align-items: center;
        color: var(--font, #424242);
    }
    button:active {
        transform: none;
    }
    span {
        border: 1px solid var(--grey-darken, #d1d1d1);
        border-radius: 2px;
        text-align: center;
        background: var(--bg-darken, #fff);
    }
</style>
