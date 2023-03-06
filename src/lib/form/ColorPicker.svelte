<script lang="ts">
    import type ColorHandler from './ColorPicker/ColorHandler'
    import Gradient from './ColorPicker/Gradient.svelte'
    import Hue from './ColorPicker/Hue.svelte'
    import Opacity from './ColorPicker/Opacity.svelte'
    import Hex from './ColorPicker/Hex.svelte'
    import Rgba from './ColorPicker/Rgba.svelte'
    import Hsla from './ColorPicker/Hsla.svelte'

    export let handler: ColorHandler
</script>



<section on:touchstart|preventDefault>
    <aside class="flex">
        <Hue {handler}/>
        <Gradient {handler}/>
    </aside>
    <Opacity {handler}/>
    <Hex {handler}/>
    <Rgba {handler}/>
    <Hsla {handler}/>
</section>
  
<style>
    section {
        border: 1px solid #e0e0e0;
        background-color:#fff;
        border-radius: 4px;
        padding: 12px;
        display: inline-block;
        padding: 12px;
    }
</style>