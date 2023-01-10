<script>
    import { clickOutside, fadeSlide } from '$lib/dropdown' 
    let active = false
    let element
    let parent

    const open = () => {
        active = !active
        if (element) parent = element.getBoundingClientRect()
    }
</script>


<button on:click={open} bind:this={element} use:clickOutside on:clickOutside={() => active = false}>
    <slot></slot>
</button>

{#if active}
    <aside 
        transition:fadeSlide={{ duration:80 }} 
        style:min-width={parent.width + 'px'}
    >
        <slot name="content"/>
    </aside>
{/if}


<style>
    aside{position:fixed;z-index:9999;}
    button{margin:0;padding:0;background:transparent;}
</style>
