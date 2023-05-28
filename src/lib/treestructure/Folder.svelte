<script lang="ts">
    import { slide } from 'svelte/transition'
    import type TreeHandler from './TreeHandler'
    import Droppable from './Droppable.svelte'
    export let handler: TreeHandler
    export let identifier: string | number
    export let level: number
    export let parent: number | string

    export let onDrop = async (data: Object, event: DragEvent) => { console.log(data, event) }

    const active = handler.getActive('folder')
    const current = handler.getCurrent('folder')

    $: isActive = $active.includes(identifier) 

    const dragstart = (event: DragEvent) => {
        const target = event.target as HTMLElement
        handler.drag({ type: 'folder', identifier: identifier, origin: parent })
        target.style.opacity = '0.5'
    }
    const dragend = (event: DragEvent) => {
        const target = event.target as HTMLElement
        target.style.opacity = ''
        handler.drop()
    }
</script>


<section data-id={identifier} class="folder-{level} unselectable folder">
    <article class="flex" class:active={isActive}>
        <Droppable {handler} {identifier} {onDrop}/>
        <div class="drop"
            draggable="true"
            on:dragstart={(event) => dragstart(event)}
            on:dragend={(event) => dragend(event)}
        >
            <button class="flex" on:click={() => handler.setActive('folder', identifier)}>
                <div class="flex">
                    <i class="micon rotate">keyboard_arrow_right</i>
                    <i class="micon">{isActive ? 'folder_open' : 'folder'}</i>
                </div>
                <slot/>
            </button>
        </div>

        <slot name="option"/>
    </article>

    {#if isActive}
        <aside transition:slide|local={{ duration: 200 }} class:current={$current === identifier}>
            <slot name="nested"/>
        </aside>
    {/if}
</section>





<style>
    article {
        width: 100%;
        border-radius:2px;
        border-bottom: 1px solid #fff;
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
        background: #f5f5f5;
    }
    i.micon{
        font-size:18px;
        color:#757575;
    }
    i:not(.rotate) {
        font-size: 16px;
        margin-left: 4px;
        color:#fbc02d;
    }
    aside {
        border-left: 1px solid #e0e0e0;
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