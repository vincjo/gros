<script lang="ts">
    import { Autocomplete } from '$lib/dropdown'
    let value: string
    let visible = false
    let left = '40px';
    const show = () => {
        if (value && value.length > 0) {
            return visible = true
        }
        return visible = false
    }
</script>

<section>
    <button on:click={() => left  = left === '40px' ? '80px' : '40px'}>slide</button>
    <aside style:margin-left="{left}">
        <Autocomplete>
            <input
                type="text" spellcheck="false"
                bind:value
                on:input={() => show()}
            />
            <ul slot="content">
                {#if visible}
                    <li>Result 1</li>
                    <li>Result 2</li>
                    <li>Result 3</li>
                    <li>Result 4</li>
                {/if}
            </ul>
        </Autocomplete>
    </aside>
</section>

<style>
    section {
        margin: 80px auto;
        width: 88%;
        padding: 80px;
    }
    input {
        width: 200px;
    }
    ul {
        border: 1px solid red;
        width: 200px;
    }
</style>