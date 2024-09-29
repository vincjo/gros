<script lang="ts">let { selector = 'domain', children } = $props();
export {};
</script>

<div class="ignore-sortable-{selector}">
    {@render children()}
</div>
