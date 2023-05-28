<script lang="ts">
    import type TreeHandler from './TreeHandler'

    export let handler: TreeHandler
    export let identifier: string | number
    export let parent: number | string
    export let onClick = () => {}
    const current = handler.getCurrent('file')

    const handleClick = () => {
        handler.setCurrent('file', identifier)
        handler.setCurrent('folder', parent)
        onClick()
    }

    const dragstart = (event: DragEvent) => {
        handler.drag({ type: 'file', identifier: identifier, origin: parent })
        const target = event.target as HTMLElement
        target.style.opacity = '0.5'
    }
    const dragend = (event: DragEvent) => {
        const target = event.target as HTMLElement
        target.style.opacity = ''
        handler.drop()
    }
</script>


<section data-id="{identifier}" class="file">
    <article 
        class:active={$current === identifier}
        class="flex"
        draggable="true"
        on:dragstart={(event) => dragstart(event)}
        on:dragend={(event) => dragend(event)}
    >
        <button class="flex" on:click={handleClick}>
            <slot/>
        </button>
        <slot name="option"/>
    </article>
</section>

<style>
    section{
        min-height:24px;
        margin-left:0px;
        border-radius:2px;
        border-bottom: 1px solid #fff;
    }
    article {
        transition: background, 0.2s;
        justify-content:space-between;
        position: relative;
        width: 100%;
    }
    button {
        width: 100%;
        background: transparent;
        padding:4px;
    }


    article.active {
        background:var(--primary-lighten-2);
    }
    article:not(.active):hover{
        background:var(--primary-lighten-1);
    }
</style>