<script lang="ts">
    import { scale } from 'svelte/transition'
    export let checked = false
    export let size = 18
    export let margin = [0]
</script>


<button type="button" on:click>
    <button type="button" class="checkbox" on:click={() => checked = !checked}>
        <slot name="before"/>
        <span 
            style:height={size + 'px'} 
            style:width={size + 'px'}
            style:margin={margin.join('px ')}
        >
            {#if checked}
                <i 
                    class="micon" 
                    transition:scale|local={{ duration:150 }}
                    style:font-size="{(size * 0.9) + 'px'}"
                    style:line-height="{(size - 2) + 'px'}"
                >check</i>
            {/if}
        </span>
        <slot/>
    </button>

</button>

<style>
    button {
        display:flex; justify-content: center; align-items: center;
    }
    button:active{
        transform:none;
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