<script lang="ts">
    import { draggable } from '@neodrag/svelte'
    let {
        min     = 0,
        max     = 100,
        step    = 10,
        value   = 0
    }: { min?: number, max?: number, step?: number, value?: number } = $props()
    let element: HTMLElement

    let current = $state<number>(value)
    let position = $state({ x: value, y: 0 })

    const test = (offsetX: number, rootNode: HTMLElement) => {
        const calc = (offsetX * max) / element.getBoundingClientRect().width
        current = Number(calc.toFixed(step))
    }

    const set = (e: MouseEvent) => {
        position = { x: e.offsetX - 8, y: 0 }
    }
</script>

<button bind:this={element} onclick={(e) => set(e)}>
    <aside use:draggable={{
        axis: 'x',
        grid: [step, step],
        bounds: 'parent',
        position: position,
        onDrag: ({ offsetX, rootNode }) => test(offsetX, rootNode)
    }}>
        <div class="label">{current}</div>
    </aside>
</button>

<style>
    button {
        height: 8px;
        width: 100%;
        border-radius: 4px;
        background: #eee;
        cursor: default;
        transform: none;
    }
    aside {
        height: 16px;
        width: 16px;
        margin-top: -4px;
        border-radius: 50%;
        background: #212121;
        cursor: pointer;
        position: relative;
    }
    div.label {
        position: absolute;
        top: -24px;
        padding: 4px;
        border-radius: 4px;
        background: #212121;
        color: #eee;
        margin: 0 auto;
    }
</style>