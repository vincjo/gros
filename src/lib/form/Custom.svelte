<script lang="ts">
    import ErrorMessage from './ErrorMessage.svelte'
    import ErrorAlert from './ErrorAlert.svelte'
    import type { Error } from './index'

    type Props = {
        big         ?: boolean,
        spellcheck  ?: boolean,
        label       ?: string,
        password    ?: boolean,
        number      ?: boolean,
        icon        ?: string,
        required    ?: boolean,
        errors      ?: Error[],
        field       ?: string | null,
        oninput     ?: (event: Event) => any,
        children     : import('svelte').Snippet
        align        : string
    }

    let {
        big         = false,
        label       = '',
        icon        = null,
        required    = false,
        errors      = [],
        field       = '',
        align       = 'center',
        children,
    }: Props = $props()

    const id = 'id' + (Math.random() + 1).toString(36).substring(7)
</script>


<section class={{ small: !big }} style:align-items={align}>
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

    {@render children()}

    {#if !big}
        <ErrorAlert {field} {errors}/>
    {/if}
</section>


<style>
    section{
        margin:16px 0;
        position:relative;
    }
    label{
        display:flex;
        align-items:center;
        justify-content:space-between;
        color:var(--primary);
        font-weight:normal;
        font-size:16px;
        color:var(--primary);
        margin:0;
        margin-bottom:4px;
    }
    label .flex{
        display:flex;
        align-items:center;
        justify-content:flex-start;
        white-space:nowrap;
    }
    label .error{text-align:right;
        margin-left:40px;
        line-height:12px;
    }
    label b{
        color:var(--ternary);
    }

    label i.micon{
        padding-right:8px;
        color:var(--primary);
        font-size:22px;
    }
    section.small{
        display:flex;
        justify-content:flex-start;
        margin:8px 0;
    }
    section.small label{
        font-size:12px;
        min-width:96px;
        white-space:normal;
        margin-right:8px;
    }
    section.small label .flex{
        white-space:normal;
    }
    section.small label .flex span{
        line-height:12px;
    }
    section.small i.micon{
        font-size:18px;
    }
</style>