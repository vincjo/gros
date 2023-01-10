<script>
    import { modal, fadeScale, isActive } from '$lib/modal'
    import { fade } from 'svelte/transition'
    import { cubicInOut } from 'svelte/easing'
    import interact from 'interactjs'
    import { onMount } from 'svelte'


    onMount( () => {
        interact('.draggable-modal').draggable({
            allowFrom: 'header',
            onmove: (event) => {
                const target = event.target
                const x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
                const y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy
                target.style.webkitTransform = 'translate(' + x + 'px, ' + y + 'px)'
                target.style.transform = 'translate(' + x + 'px, ' + y + 'px)'
                target.setAttribute('data-x', x)
                target.setAttribute('data-y', y)
            }
        })
    })

    const close = () => {
        modal.close()
    }
</script>


<!-- svelte-ignore a11y-click-events-have-key-events -->

{#if $isActive}
    <section transition:fade={{ duration:150 }} on:click|self={close}>

        <article class="draggable-modal" transition:fadeScale={{ duration:150, easing:cubicInOut, baseScale:0.5 }}>
           <svelte:component this={$modal.component} props={$modal.props} {close}/>
        </article>

    </section>
{/if}


<style>
    section{display:flex;align-items:center;justify-content:center;position:fixed;top:0;left:0;bottom:0;right:0;background:rgba(0,0,0,0.4);z-index:9999;}

    article{max-height:80vh;background:#fff;margin:auto auto;border-radius:4px;
        -webkit-box-shadow: 0 24px 38px 3px rgba(0,0,0, 0.14), 0 9px 46px 8px rgba(0,0,0, 0.12), 0 11px 15px -7px rgba(0,0,0, 0.2);box-shadow: 0 24px 38px 3px rgba(0,0,0, 0.14), 0 9px 46px 8px rgba(0,0,0, 0.12), 0 11px 15px -7px rgba(0,0,0, 0.2);
    }
</style>