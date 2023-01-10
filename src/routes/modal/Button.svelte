<script>
    import ExampleModal from './ExampleModal.svelte'
    import { modal } from '$lib/modal'
</script>



<button class="btn z-depth-1" on:click={() => modal.open(ExampleModal, {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@live.com'
})}>
    OPEN
</button>


<style>
    button{padding:12px 24px;background:var(--primary);color:#fff;font-size:16px;border-radius:4px;}

    button:hover{background:var(--primary-darken)}
    button:active{background:var(--primary)}
</style>