<script lang="ts">let { children, option, tree, identifier, parent, onclick = () => { } } = $props();
const handleClick = () => {
    tree.setCurrent('file', identifier);
    tree.setCurrent('folder', parent);
    onclick();
};
const dragstart = (event) => {
    tree.drag({ type: 'file', identifier: identifier, origin: parent });
    const target = event.target;
    target.style.opacity = '0.5';
};
const dragend = (event) => {
    const target = event.target;
    target.style.opacity = '';
    tree.drop();
};
export {};
</script>


<section data-id="{identifier}" class="file">
    <article 
        class:active={tree.current.file === identifier}
        class="flex"
        draggable="true"
        ondragstart={(event) => dragstart(event)}
        ondragend={(event) => dragend(event)}
    >
        <button class="flex" onclick={handleClick}>
            {@render children()}
        </button>
        {#if option}{@render option()}{/if}
    </article>
</section>

<style>
    section{
        min-height:24px;
        margin-left:0px;
        border-radius:2px;
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