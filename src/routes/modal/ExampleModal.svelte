<script>
    import { Modal } from '$lib/modal'
    export let close
    export let props

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
        <button on:click={save}>Save</button>
        <button on:click={close}>Cancel</button>
    {/snippet}
</Modal>

<style>
    p{display:block;padding:16px 24px;width:400px;}
    b{display:block;padding: 0 24px;}
    ul{margin-left:24px;list-style-type:disc;padding:8px 24px;}
</style>