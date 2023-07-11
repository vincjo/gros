<script lang="ts">
    import type { DataHandler, OrderBy, Row } from '@vincjo/datatables'

    type T = $$Generic<Row>

    export let handler: DataHandler<T>
    export let orderBy: OrderBy<T>
    export let align: 'left' | 'right' | 'center' = 'left'

    const identifier = orderBy?.toString()
    const sorted = handler.getSort()
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
                <svg width="100%" height="100%" viewBox="0 0 15 15" fill="currentColor"><path d="M7.1813 1.68179C7.35704 1.50605 7.64196 1.50605 7.8177 1.68179L10.3177 4.18179C10.4934 4.35753 10.4934 4.64245 10.3177 4.81819C10.142 4.99392 9.85704 4.99392 9.6813 4.81819L7.9495 3.08638L7.9495 11.9136L9.6813 10.1818C9.85704 10.0061 10.142 10.0061 10.3177 10.1818C10.4934 10.3575 10.4934 10.6424 10.3177 10.8182L7.8177 13.3182C7.73331 13.4026 7.61885 13.45 7.4995 13.45C7.38015 13.45 7.26569 13.4026 7.1813 13.3182L4.6813 10.8182C4.50557 10.6424 4.50557 10.3575 4.6813 10.1818C4.85704 10.0061 5.14196 10.0061 5.3177 10.1818L7.0495 11.9136L7.0495 3.08638L5.3177 4.81819C5.14196 4.99392 4.85704 4.99392 4.6813 4.81819C4.50557 4.64245 4.50557 4.35753 4.6813 4.18179L7.1813 1.68179Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
            </em>
        {:else}
            <span
                class:none={$sorted.identifier !== identifier}
                class:asc={$sorted.direction === 'asc'}
                class:desc={$sorted.direction === 'desc'}
            >
                <svg width="100%" height="100%" viewBox="0 0 15 15" fill="currentColor"><path d="M7.5 2C7.77614 2 8 2.22386 8 2.5L8 11.2929L11.1464 8.14645C11.3417 7.95118 11.6583 7.95118 11.8536 8.14645C12.0488 8.34171 12.0488 8.65829 11.8536 8.85355L7.85355 12.8536C7.75979 12.9473 7.63261 13 7.5 13C7.36739 13 7.24021 12.9473 7.14645 12.8536L3.14645 8.85355C2.95118 8.65829 2.95118 8.34171 3.14645 8.14645C3.34171 7.95118 3.65829 7.95118 3.85355 8.14645L7 11.2929L7 2.5C7 2.22386 7.22386 2 7.5 2Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
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
        align-items: center;
        height:100%;
    }
    th.sortable span, em {
        margin-left:4px;
        margin-right: 16px;
        transition: transform, 0.2s;
        height: 12px;
        width: 12px;
        color: #616161;
    }
    em {
        color: #bdbdbd;
        height: 14px;
        width: 14px;
    }
    span.asc {
        transform: rotate(-180deg);
    }
    th:not(.sortable) span{
        visibility:hidden;
    }
</style>