
<script lang="ts">
    import { modal } from '$lib/modal'
    import type { Snippet } from 'svelte'

    type Props = { 
        icon ?: string,
        title ?: string,
        children: Snippet,
        footer: Snippet
    }
    let { icon = 'chevron_right', title = '', children, footer }: Props = $props()
</script>

<header class="handle modal">
    <aside>
        <i class="micon">{@html icon}</i>
        <span>{@html title}</span>
    </aside>
    <button type="button" onclick={() => modal.close()}>
        <i class="micon">clear</i>
    </button>
</header>

<section>
    {@render children()}
</section>

<footer>
    {@render footer()}
</footer>


<style>
    header{
        display:flex;
        justify-content:space-between;
        align-items:center;
        background: var(--grey-lighten-2, #f5f5f5);
        cursor:move;
        border-radius:4px 4px 0 0;
        user-select: none;
    }
    header button{
        cursor:pointer;
        border-radius:4px;
        border:none;
        background:transparent;
        transition:all,0.2s;
        color:#e57373;
        height:32px;
        width:32px;
        padding:0;
    }
    header button:hover{
        color:#d32f2f
    }
    header button i{
        margin:0;
        line-height:32px;
    }
    header aside{
        color: var(--font-grey, #757575);
        font-weight:normal;
        font-size:16px;
    }
    header aside i{
        margin:0 4px;
        color: var(--font-grey, #757575);
    }

    aside{
        font-size:16px;
        margin:0;
        margin-right:8px;
        display:flex;
        justify-content:flex-start;
        align-items:center
    }
    footer{
        height:56px;
        display:flex;
        justify-content:flex-end;
        align-items:center;
        padding:0;
        border-top: 1px solid var(--grey-lighten, #eee);
        background:var(--grey-lighten-2, #f5f5f5);
        border-radius:0 0 4px 4px;
        user-select: none;
    }

    footer :global(button){
        border:1px solid var(--grey-darken, #d1d1d1);
        outline:none;
        width:auto;
        height:34px;
        background:var(--bg, #fff);
        transition: background 0.5s, border 0.5s;
        cursor:pointer;
        margin-right:12px;
        padding:0 16px;
        color: var(--font, #212121);
        border-radius:2px;
        font-size:14px;
    }
    footer :global(button):hover{
        border:1px solid var(--primary);
        background:var(--grey-lighten-3, #fafafa);
    }
    footer :global(button):active{
        background:var(--grey, #e0e0e0);
    }
</style>