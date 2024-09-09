<script lang="ts">
    import type { Snippet } from 'svelte'
    let { selector = 'domain', children }: { 
        domain?: string, 
        selector?: string, 
        children: Snippet 
    } = $props()
</script>

<div class="ignore-sortable-{selector}">
    {@render children()}
</div>
