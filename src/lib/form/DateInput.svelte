<script lang="ts">
    import ErrorMessage     from './ErrorMessage.svelte'
    import ErrorAlert       from './ErrorAlert.svelte'
    import DatePicker       from './DatePicker.svelte'
    import { Dropdown }     from '$lib/dropdown'
    import type { Error }   from './'
    import { DateTime, type Format } from '$lib/date'

    type Props = {
        big?: boolean
        value?: string
        label?: string
        icon?: string
        required?: boolean
        errors?: Error[]
        field?: string
        format?: Format
    }

    let {
        big = false,
        value = $bindable(),
        label = '',
        icon = null,
        required = false,
        errors = [],
        field = '',
        format = { year: 'numeric', month: 'short', day: '2-digit' }
    }: Props = $props()

    const id = 'id' + (Math.random() + 1).toString(36).substring(7)

    let date = $derived(DateTime(value).format(format))
</script>

<section class:small={!big}>
    {#if label}
        <label for={id}>
            <div class="flex">
                {#if icon}
                    <i class="micon">{icon}</i>
                {/if}
                <span>
                    {label}
                    {#if required}
                        <b>*</b>
                    {/if}
                </span>
            </div>
            {#if big}
                <div class="error">
                    <ErrorMessage {field} {errors} />
                </div>
            {/if}
        </label>
    {/if}

    <Dropdown position="bottom-start" preventClosing fixedWidth>
        <aside class:big>
            {date}
            <i class="micon">arrow_drop_down</i>
        </aside>
        {#snippet content()}
            <DatePicker bind:value/>
        {/snippet}
    </Dropdown>

    {#if !big}
        <ErrorAlert {field} {errors} />
    {/if}
</section>

<style>
    section {
        margin: 16px 0;
        position: relative;
    }
    label {
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: var(--primary);
        font-weight: normal;
        font-size: 16px;
        color: var(--primary);
        margin: 0;
        margin-bottom: 4px;
    }
    label .flex {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        white-space: nowrap;
    }
    label .error {
        text-align: right;
        margin-left: 40px;
        line-height: 12px;
    }
    label b {
        color: var(--ternary);
    }

    label i.micon {
        padding-right: 8px;
        color: var(--primary);
        font-size: 22px;
    }
    aside {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        color: var(--font, #424242);
        border: 1px solid var(--grey-darken, #d1d1d1);
        background: var(--bg-darken, #fff);
        border-radius: 4px;
        padding: 6px 10px;
        font-size: 14px;
        height: 32px;
    }
    aside.big {
        width: 100%;
        justify-content: space-between;
        height: 38px;
    }
    section:not(.small) :global(button.dropdown-trigger) {
        width: 100%;
    }
    aside i {
        margin-left: 8px;
    }
    aside:focus {
        border-color: var(--primary-lighten);
    }
    section.small {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin: 8px 0;
    }
    section.small label {
        font-size: 12px;
        width: 96px;
        white-space: normal;
        margin-right: 8px;
    }
    section.small label .flex {
        white-space: normal;
    }
    section.small label .flex span {
        line-height: 12px;
    }
    section.small i.micon {
        font-size: 18px;
    }
    section.small aside {
        font-size: 14px;
        height: 32px;
        width: auto;
    }
</style>
