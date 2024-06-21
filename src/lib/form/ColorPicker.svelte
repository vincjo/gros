<script lang="ts">
    import Gradient from './ColorPicker/Gradient.svelte'
    import Hue from './ColorPicker/Hue.svelte'
    import Opacity from './ColorPicker/Opacity.svelte'
    import Hex from './ColorPicker/Hex.svelte'
    import Rgba from './ColorPicker/Rgba.svelte'
    import Hsla from './ColorPicker/Hsla.svelte'
    import { preventDefault } from '$lib/event'
    import type { ColorHandler } from '$lib/form'
    type Props = { handler: ColorHandler }
    let { handler }: Props = $props()
</script>



<section ontouchstart={preventDefault}>
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