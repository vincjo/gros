<script lang="ts">
    import type { DataHandler, OrderBy, Row } from '@vincjo/datatables'

    type T = $$Generic<Row>

    export let handler: DataHandler<T>
    export let orderBy: OrderBy<T>
    export let align: 'left' | 'right' | 'center' = 'left'

    const identifier = orderBy?.toString()
    const sorted = handler.getSorted()
</script>


<th
    on:click={() => handler.sort(orderBy)}
    class:sortable={orderBy}
    class:active={$sorted.identifier === identifier}
>
    <div class="flex" style:justify-content={align === 'left' ? 'flex-start' : align === 'right' ? 'flex-end' : 'center'}>
        <strong>
            <slot/>
        </strong>

        {#if $sorted.identifier !== identifier}
            <em>
                <svg width="100%" height="100%" viewBox="0 0 24 24"><path fill="currentColor" d="M5.825 13L7.7 14.9q.275.275.288.688T7.7 16.3q-.275.275-.7.275t-.7-.275l-3.6-3.6q-.3-.3-.3-.7t.3-.7l3.6-3.6q.275-.275.688-.275T7.7 7.7q.3.3.3.713t-.3.712L5.825 11H10q.425 0 .713.288T11 12q0 .425-.288.713T10 13H5.825Zm12.35 0H14q-.425 0-.713-.288T13 12q0-.425.288-.713T14 11l4.2-.025L16.3 9.1q-.275-.275-.275-.7t.275-.7q.275-.275.7-.275t.7.275l3.6 3.6q.3.3.3.7t-.3.7l-3.6 3.6q-.3.3-.7.288t-.7-.313q-.275-.3-.288-.7t.288-.7L18.175 13Z"></path></svg>
            </em>
        {:else}
            <span
                class:none={$sorted.identifier !== identifier}
                class:asc={$sorted.direction === 'asc'}
                class:desc={$sorted.direction === 'desc'}
            >
                <svg width="100%" height="100%" viewBox="0 0 24 24"><path fill="currentColor" d="M11 14.175V7q0-.425.288-.713T12 6q.425 0 .713.288T13 7v7.175l2.9-2.875q.275-.275.688-.288t.712.288q.275.275.275.7t-.275.7l-4.6 4.6q-.3.3-.7.3t-.7-.3l-4.6-4.6q-.275-.275-.288-.687T6.7 11.3q.275-.275.7-.275t.7.275l2.9 2.875Z"></path></svg>
            </span>
        {/if}
    </div>
</th>


<style>
    th {
        background:inherit;
        margin:0;
        white-space:nowrap;
        padding:8px 4px;
        font-size:13px;
        user-select: none;
        border-bottom:1px solid #e0e0e0;
    }
    th.sortable {
        cursor:pointer;
    }
    th strong {
        white-space: pre-wrap;
        font-size: 13px;
    }
    th.sortable div.flex{
        padding:0 0 0 16px;
        display:flex;
        /* justify-content: flex-start; */
        align-items: center;
        height:100%;
    }
    th.sortable span, em {
        margin-left:4px;
        margin-right: 16px;
        transition: transform, 0.2s;
        height: 14px;
        width: 14px;
        color: #616161;
    }
    em {
        transform: rotate(90deg);
        color: #bdbdbd;
    }
    span.asc {
        transform: rotate(-180deg);
    }
    /* th.sortable span:before,
    th.sortable span:after {
        border:4px solid transparent;
        content:'';
        display:block;
        height:0;
        width:0;
    }
    th.sortable span:before {
        border-bottom-color:#e0e0e0;
        margin-top:2px;
    }
    th.sortable span:after {
        border-top-color:#e0e0e0;
        margin-top:2px;
    } */
    /* th.active.sortable span.asc:before {
        border-bottom-color:#9e9e9e;
    }
    th.active.sortable span.desc:after {
        border-top-color:#9e9e9e;
    } */
    th:not(.sortable) span{
        visibility:hidden;
    }
</style>