<script lang="ts">
    import Gradient             from './ColorPicker/Gradient.svelte'
    import Hue                  from './ColorPicker/Hue.svelte'
    import Opacity              from './ColorPicker/Opacity.svelte'
    import Hex                  from './ColorPicker/Hex.svelte'
    import Rgba                 from './ColorPicker/Rgba.svelte'
    import Hsla                 from './ColorPicker/Hsla.svelte'
    import { preventDefault }   from '$lib/event-modifier'
    import { ColorHandler }     from '$lib/form'
    type Props = {
        value: string, 
        opacity?: number,
        onchange: (handler: ColorHandler) => void
    }
    let { value = $bindable(), opacity = 1, onchange = () => {} }: Props = $props()

    const handler = new ColorHandler(value, opacity, (handler: ColorHandler) => {
        value = handler.hex 
        onchange(handler)
    })
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
        border: 1px solid var(--grey, #e0e0e0);
        background-color:var(--bg-darken, #fff);
        border-radius: 4px;
        padding: 12px;
        display: inline-block;
        padding: 12px;
    }
</style>