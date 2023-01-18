<script lang="ts">
    import ErrorMessage from './ErrorMessage.svelte'
    import ErrorAlert from './ErrorAlert.svelte'
    import type { error } from './'
    export let big = false
    export let spellcheck = false
    export let value = ''
    export let label = ''
    export let password = false
    export let number = false
    export let icon: string | null
    export let required = false
    export let errors: error[]
    export let field: string | null

    let id = 'id' + (Math.random() + 1).toString(36).substring(7)
</script>


<section class:small={!big}>
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

    {#if password}
        <input type="password" id="{id}" spellcheck="false" bind:value={value}/>
    {:else if number}
        <input type="number" id="{id}" spellcheck="false" bind:value={value}/>
    {:else}
        <input type="text" id="{id}" bind:value={value} spellcheck={spellcheck}/>
    {/if}

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
    input{ 
        color:#626262;
    }

    section.small{
        display:flex;
        justify-content:flex-start;
        align-items:center;
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
    section.small input{
        font-size:14px;
        color:#424242;
        height:32px;
    }
</style>