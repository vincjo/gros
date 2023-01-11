<script>
    import { DataHandler, Datatable, Th, ThFilter } from '$lib/datatable'
    import data from './data'
    const handler = new DataHandler(data, { rowsPerPage: 50 })
    const rows = handler.getRows()
</script>


<div class="example">
    <Datatable {handler}>
        <table>
            <thead>
                <tr>
                    <Th {handler} orderBy={'first_name'}>First Name</Th>
                    <Th {handler} orderBy={'last_name'}>Last Name</Th>
                    <Th {handler} orderBy={'email'}>Email</Th>
                </tr>
                <tr>
                    <ThFilter {handler} FilterBy={'first_name'}/>
                    <ThFilter {handler} FilterBy={'last_name'}/>
                    <ThFilter {handler} FilterBy={'email'}/>
                </tr>
            </thead>
            <tbody>
                {#each $rows as row}
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
    div.example{height:400px;border:1px solid #e0e0e0;border-radius:8px;padding:8px 0;}
</style>