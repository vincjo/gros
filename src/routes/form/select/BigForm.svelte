<script>
    import { Select, Input } from '$lib/form'
    let form = {
        name: null,
        fruit: null,
        pet: 'cat',
        incomes: null,
        isSleeping: true
    }

    let errors = []

    const handleClick = () => {
        errors = [
            { field: 'name', message: 'This name is not authorized' },
            { field: 'fruit', message: 'Not selected' },
            { field: 'pet', message: 'Not selected' },
            { field: 'incomes', message: 'Not selected' },
            { field: 'isSleeping', message: 'Not selected' }
        ]
    }

    const reset = () => {
        errors = []
        form = {
            fruit: null,
            name: null,
            pet: 'cat',
            incomes: null,
            isSleeping: true
        }
    }

    const fruits = [
        { value: 'banane', label: 'Banane' },
        { value: 'strawberry', label: 'Strawberry' }
    ]
    const pets = [
        { value: 'cat', label: 'Cat' },
        { value: 'dog', label: 'Dog' },
        { value: 'snake', label: 'Snake' },
        { value: 'fish', label: 'Fish' },
        { value: 'mouse', label: 'Mouse' },
        { value: 'tiger', label: 'Tiger' },
        { value: 'butterfly', label: 'Butterfly' },
        { value: 'horse', label: 'Horse' }
    ]
    const incomes = [
        { value: 25, label: '25K€' },
        { value: 30, label: '30K€' },
        { value: 35, label: '35K€' },
        { value: 40, label: '40K€' },
        { value: 45, label: '45K€' },
        { value: 50, label: '50K€' },
        { value: 55, label: '55K€' },
        { value: 60, label: '60K€' },
        { value: 70, label: '70K€' },
        { value: 80, label: '80K€' },
        { value: 90, label: '90K€' },
        { value: 100, label: '100K€' },
        { value: 200, label: '200K€' },
        { value: 500, label: '500K€' }
    ]
    const isSleeping = [
        { value: true, label: 'ZzzZz...' },
        { value: false, label: 'No' }
    ]
</script>

<section>
    <Input big {errors} icon="person" label="Name" field="name" bind:value={form.name} />
    <Select big {errors} field="fruit" label="Fruit" icon="restaurant" options={fruits} />
    <Select
        big
        {errors}
        multiple
        field="pet"
        label="Pets"
        required
        icon="pets"
        options={pets}
        bind:value={form.pet}
    />
    <Select
        big
        {errors}
        field="incomes"
        label="Incomes"
        icon="euro_symbol"
        options={incomes}
        bind:value={form.incomes}
    />
    <Select
        big
        {errors}
        field="isSleeping"
        label="Sleeping?"
        icon="hotel"
        options={isSleeping}
        bind:value={form.isSleeping}
    />

    <button class="btn z-depth-1" type="submit" on:click|preventDefault={handleClick}>
        <i class="micon">save</i>
        Register
        <i class="micon">chevron_right</i>
    </button>

    <button class="reset" on:click={reset}>reset</button>
</section>

<style>
    section {
        border: 1px solid var(--grey);
        border-radius: 16px;
        padding: 16px 24px;
        width: 400px;
    }
    button.btn {
        height: 48px;
        width: 100%;
        background: var(--primary);
        font-size: 16px;
        color: #fff;
        margin-top: 16px;
    }
    button.btn:hover {
        background: var(--primary-darken);
    }
    button.btn i {
        margin: 8px;
    }

    button.reset {
        margin-top: 16px;
        color: var(--primary);
        font-weight: bold;
        font-size: 14px;
        width: 100%;
        text-align: center;
        padding: 4px 0;
    }
    button.reset:hover {
        color: var(--primary-darken);
    }
</style>
