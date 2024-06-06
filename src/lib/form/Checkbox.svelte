<script lang="ts">
    import type { Snippet } from 'svelte'
    import { scale } from 'svelte/transition'
    type Props = { checked: boolean, size: number, margin: number[], children?: Snippet, before?: Snippet }
    let { checked, size, margin, children, before }: Props = $props()
</script>

<button type="button" class="checkbox" onclick={() => (checked = !checked)}>
    {#if before}{@render before()}{/if}
    <span
        style:height={size + 'px'}
        style:width={size + 'px'}
        style:margin={margin.join('px ')}
    >
        {#if checked}
            <i
                class="micon"
                transition:scale={{ duration: 150 }}
                style:font-size={size * 0.9 + 'px'}
                style:line-height={size - 2 + 'px'}
            >
                check
            </i>
        {/if}
    </span>
    {#if children}{@render children()}{/if}
</button>

<style>
    button {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    button:active {
        transform: none;
    }
    span {
        border: 1px solid #d1d1d1;
        border-radius: 2px;
        text-align: center;
        background: #fff;
    }
    span i {
        font-size: 100%;
        line-height: 100%;
    }
</style>
