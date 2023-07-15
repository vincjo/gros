<script lang="ts">
    import { Dropdown } from '$lib/dropdown'
    import ErrorMessage from '../ErrorMessage.svelte'
    import ErrorAlert from '../ErrorAlert.svelte'
    import type { error } from '../'

    type Option = { value?: string, label?: string, icon?: string }

    export let big = false
    export let value: string|number|boolean = ''
    export let label = ''
    export let icon: string | null
    export let required = false
    export let errors: error[]
    export let field: string | null
    export let options: Option[]
    let selected = options.find( option => option.value === value )
    let id = 'id' + (Math.random() + 1).toString(36).substring(7)

    const select = (option: Option) => {
        selected = option
        value = option.value
    }
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

    <Dropdown isBlock>
        <button class="open flex" id="{id}">
            {#if selected}
                <span>{selected.label ?? selected.value}</span>
            {:else}
                <em>Sélectionnez un item</em>
            {/if}
            <i class="micon">arrow_drop_down</i>
        </button>
        <aside slot="content" class="z-depth-3 thin-scrollbar" >
            {#each options as option}
                <button class="flex" on:click={() => select(option)} class:active={option.value === selected?.value}>
                    <div class="flex">
                        {#if option.icon}
                            <i class="micon">{option.icon}</i>
                        {/if}
                        {@html option.label ?? option.value}
                    </div>
                    {#if option.value === selected?.value}
                        <i class="micon checked">check</i>
                    {/if}
                </button>
            {/each}
        </aside>
    </Dropdown>

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
    button.open { 
        color:#626262;
        border: 0.1rem solid #d1d1d1;
        justify-content: space-between;
        text-align: left;
        width: 100%;
        border-radius: 0.4rem;
        padding: 0.6rem 1rem 0.7rem;
        user-select: none;
    }
    button.open:active, button.open:focus {
        border: 1px solid var(--primary-lighten)
    }

    aside {
        background: #fff;
        border: 1px solid #e0e0e0;
        border-radius:4px;
        padding: 4px;
        position: relative;
        max-height: 200px;
        overflow-y: auto;
        user-select: none;
        margin: 2px 0;
    }
    aside button {
        width: 100%;
        padding: 8px 8px;
        text-align: left;
        justify-content: space-between;
    }
    aside button.active {
        background: #fafafa;
    }
    aside button:hover {
        background: var(--primary-lighten-1);
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
    section.small button.open{
        font-size:14px;
        color:#424242;
        height:32px;
    }
    em {
        color: #9e9e9e;
        font-size: 12px;
        font-style: normal;
    }

    i.checked {
        font-size: 16px;
        color: #424242;
    }
</style>