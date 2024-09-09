<script lang="ts">
    import { Modal, type ModalProps } from '$lib/modal'

    let { close, props }: ModalProps = $props()

    const save = () => {
        close()
        alert('You clicked on "save" button')
    }
</script>

<Modal icon="account_circle" title="User informations">
    <p>Some content</p>
    <b>User</b>
    <ul>
        <li>{props.id}</li>
        <li>{props.name}</li>
        <li>{props.email}</li>
    </ul>
    {#snippet footer()}
        <button onclick={save}>Save</button>
        <button onclick={close}>Cancel</button>
    {/snippet}
</Modal>

<style>
    p{display:block;padding:16px 24px;width:400px;}
    b{display:block;padding: 0 24px;}
    ul{margin-left:24px;list-style-type:disc;padding:8px 24px;}
</style>