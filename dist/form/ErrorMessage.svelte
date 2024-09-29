<script lang="ts">let { errors, field } = $props();
let message = $state(null);
$effect(() => {
    errors;
    getMessage();
});
const getMessage = () => {
    if (!errors || errors.length === 0) {
        message = null;
        return;
    }
    const error = errors.find(item => item.field === field);
    message = error?.message;
};
export {};
</script>


{#if message}
    <span>
        {message}
    </span>
{/if}

<style>
    span{
        color:#e57373;
        font-size:11px;
    }
</style>