

export { default as Datatable }     from './Datatable.svelte'
export { default as Th }            from './Th.svelte'
export { default as ThSort }        from './ThSort.svelte'
export { default as ThFilter }      from './ThFilter.svelte'
export { default as Search }        from './Search.svelte'
export { default as Pagination }    from './Pagination.svelte'
export { default as RowCount }      from './RowCount.svelte'
export { TableHandler, check }       from '@vincjo/datatables'

import type { Field as ClientField, TableHandler as ClientTableHandler } from '@vincjo/datatables'
import type { TableHandler as ServerTableHandler } from '@vincjo/datatables/server'

export type TableHandlerLike<Row> = ClientTableHandler<Row> | ServerTableHandler<Row>
export type FieldLike<Row> = ClientField<Row>
export type Row = { [key: string]: any }