<script lang="ts">import { onMount } from 'svelte';
import Sortable from 'sortablejs';
let { onSort = async (order) => { console.log(order); }, type = 'file', scope, children } = $props();
onMount(() => {
    const element = document.querySelector(`.sortable-${type}-${scope}`);
    new Sortable(element, {
        preventOnFilter: false,
        handle: `.handle`,
        animation: 200,
        ghostClass: 'z-depth-2',
        filter: `.ignore-sortable`,
        direction: 'vertical',
        easing: "cubic-bezier(1, 0, 0, 1)",
        setData: (dataTransfer, element) => {
            dataTransfer.setData('Text', JSON.stringify({
                id: parseInt(element.dataset.id)
            }));
        },
        onEnd: async (e) => {
            const sorted = Array.from(e.to.querySelectorAll(`.sortable-${type}-${scope} .${type}`));
            const order = sorted.map((element, i) => {
                return {
                    id: isNaN(element.dataset.id) ? element.dataset.id : Number(element.dataset.id),
                    sort: i + 1
                };
            });
            await onSort(order);
        },
    });
});
</script>

<div class="sortable-{type}-{scope}">
    {@render children()}
</div>
