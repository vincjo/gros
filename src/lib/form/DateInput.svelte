<script lang="ts">
    import ErrorMessage from './ErrorMessage.svelte'
    import ErrorAlert from './ErrorAlert.svelte'
    import { Dropdown } from '$lib/dropdown'
    import { DateTime, type Format } from '$lib/date'
    import type { error } from './'
    import DatePicker from './DatePicker.svelte'
    export let big = false
    export let value = ''
    export let label: string | undefined = ''
    export let icon: string | undefined = undefined
    export let required = false
    export let errors: error[] = []
    export let field: string = ''
    export let format: Format = { year: 'numeric', month: 'short', day: '2-digit' }

    let id = 'id' + (Math.random() + 1).toString(36).substring(7)

    let date = value
    $: date = DateTime.format(value, format)

</script>


<section class:small={!big}>
    {#if label}
        <label for="{id}">
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
                    <ErrorMessage {field} {errors}/>
                </div>
            {/if}
        </label>
    {/if}

    <Dropdown position="bottom-start" preventClosing fixedWidth>
        <button type="button" class:big={big}>
            {date}
            <i class="micon">arrow_drop_down</i>
        </button>
        <svelte:fragment slot="content">
            <DatePicker bind:value/>
        </svelte:fragment>
    </Dropdown>


    {#if !big}
        <ErrorAlert {field} {errors}/>
    {/if}
</section>


<style>
    section{margin:16px 0;position:relative;}
    label{display:flex;align-items:center;justify-content:space-between;color:var(--primary);font-weight:normal;font-size:16px;color:var(--primary);margin:0;margin-bottom:4px;}
    label .flex{display:flex;align-items:center;justify-content:flex-start;white-space:nowrap;}
    label .error{text-align:right;margin-left:40px;line-height:12px;}
    label b{color:var(--ternary);}

    label i.micon{padding-right:8px;color:var(--primary);font-size:22px;}
    button{display:flex;justify-content:flex-start;align-items:center;color:#626262;border:1px solid #d1d1d1;border-radius:.4rem;padding:.6rem 1rem .7rem;font-size:14px;}
    button.big{width:100%;justify-content:space-between;}
    section:not(.small) :global(button.dropdown-trigger) {width:100%;}
    button i{margin-left:8px;}
    button:focus{border-color: var(--primary-lighten);}

    section.small{display:flex;justify-content:flex-start;align-items:center;margin:8px 0;}
    section.small label{font-size:12px;width:96px;white-space:normal;margin-right:8px;}
    section.small label .flex{white-space:normal;}
    section.small label .flex span{line-height:12px;}
    section.small i.micon{font-size:18px;}
    section.small button{font-size:14px;color:#424242;height:32px;width:auto;}
</style>