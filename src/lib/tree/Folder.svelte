<script lang="ts">
    import { slide } from 'svelte/transition'
    import type { Snippet } from 'svelte'
    import type TreeHandler from './TreeHandler.svelte'
    import Droppable from './Droppable.svelte'

    type Props = {
        children: Snippet,
        option?: Snippet,
        nested?: Snippet,
        tree: TreeHandler,
        identifier: string | number,
        level?: number,
        parent?: number | string,
        onDrop?: (data: Object, event: DragEvent) => Promise<void>
    }
    let { 
        children,
        option,
        nested,
        tree, 
        identifier, 
        level = 0, 
        parent = 0,
        onDrop = async (data: Object, event: DragEvent) => { console.log(data, event) }
    }: Props = $props()

    const isActive = $derived(tree.active.folder.includes(identifier))

    const dragstart = (event: DragEvent) => {
        const target = event.target as HTMLElement
        tree.drag({ type: 'folder', identifier: identifier, origin: parent })
        target.style.opacity = '0.5'
    }
    const dragend = (event: DragEvent) => {
        const target = event.target as HTMLElement
        target.style.opacity = ''
        tree.drop()
    }
</script>


<section data-id={identifier} class="folder-{level} unselectable folder">
    <article class="flex" class:active={isActive}>
        <Droppable {tree} {identifier} {onDrop}/>
        <!-- svelte-ignore a11y_no_static_element_interactions -->
        <div class="drop"
            draggable="true"
            ondragstart={(event) => dragstart(event)}
            ondragend={(event) => dragend(event)}
        >
            <button class="flex" onclick={() => tree.setActive('folder', identifier)}>
                <div class="flex">
                    <i class="micon rotate">keyboard_arrow_right</i>
                    <i class="micon">{isActive ? 'folder_open' : 'folder'}</i>
                </div>
                {@render children()}
            </button>
        </div>
        {#if option}{@render option()}{/if}
    </article>

    {#if isActive}
        <aside transition:slide={{ duration: 200 }} class:current={tree.current.folder === identifier}>
            {#if nested}{@render nested()}{/if}
        </aside>
    {/if}
</section>





<style>
    article {
        width: 100%;
        border-radius:2px;
        transition: background, 0.2s;
        position: relative;
    }
    div.drop {
        position: relative;
        width: 100%;
    }
    button {
        padding: 4px 0;
        width: 100%;
        background: transparent;
    }
    i.rotate {
        transition: rotate, 0.2s;
    }
    article.active i.rotate {
        transform: rotate(90deg);
    }
    article.active {
        background:transparent;
    }
    article:not(.current):hover{
        background: var(--grey-lighten-2, #f5f5f5);
    }
    i.micon{
        font-size:18px;
        color:var(--font-grey, #757575);
    }
    i:not(.rotate) {
        font-size: 16px;
        margin-left: 4px;
        color:#fbc02d;
    }
    aside {
        border-left: 1px solid var(--grey, #e0e0e0);
        margin-left: 10px;
        padding-left: 8px;
        transition: border, 0.2s;
    }
    aside.current {
        border-left: 1px solid var(--primary-lighten);
    }


    section :global(button.option) {
        height:22px;
        width:22px;
        border:none;
        background: transparent;
        border-radius:50%;
        background-position: center;
        transition: background 0.2s;
        padding: 0;
        margin-right: 4px;
    }
    section :global(button.option:active) {
        background: var(--primary-lighten-1) radial-gradient(circle, transparent 1%, var(--primary-lighten-1) 1%) center/15000%;
        background-size: 100%;
        transition: background 0s;
    }
    section :global(button.option:hover) {
        background-color: var(--primary-lighten-3);
    }
    section :global(button.option i) {
        color: #9e9e9e;
        font-size: 16px;
    }
    section :global(button.option:hover i) {
        color: var(--primary);
    }
    section :global(button.handle) {
        cursor:move;
    }
</style>