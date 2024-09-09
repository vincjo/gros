<script lang="ts">
    import { TableHandler, Datatable, ThSort, ThFilter } from '$lib/datatable'
    import data from './data'
    const table = new TableHandler(data, { rowsPerPage: 20 })
</script>


<div class="example">
    <Datatable {table} basic>
        <table>
            <thead>
                <tr>
                    <ThSort {table} field="first_name">First Name</ThSort>
                    <ThSort {table} field="last_name">Last Name</ThSort>
                    <ThSort {table} field="email">Email</ThSort>
                </tr>
                <tr>
                    <ThFilter {table} field="first_name"/>
                    <ThFilter {table} field="last_name"/>
                    <ThFilter {table} field="email"/>
                </tr>
            </thead>
            <tbody>
                {#each table.rows as row}
                    <tr>
                        <td>{row.first_name}</td>
                        <td>{row.last_name}</td>
                        <td>{row.email}</td>
                    </tr>
                {/each}
            </tbody>
        </table>
    </Datatable>
</div>


<style>
    div.example{
        height:408px;
        border:1px solid var(--grey);
        border-radius:8px;
        background: var(--bg-darken);
    }

</style>