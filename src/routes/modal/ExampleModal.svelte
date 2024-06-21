<script>
    import { Modal } from '$lib/modal'

    let { close, props } = $props()

    const user = props 

    const save = () => {
        close()
        alert('You clicked on "save" button')
    }
</script>

<Modal icon="account_circle" title="User informations">
    <p>Some content</p>
    <b>User</b>
    <ul>
        <li>{user.id}</li>
        <li>{user.name}</li>
        <li>{user.email}</li>
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