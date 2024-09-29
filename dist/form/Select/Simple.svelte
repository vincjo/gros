
<script lang="ts">import { Dropdown } from '../../dropdown';
import ErrorMessage from '../ErrorMessage.svelte';
import ErrorAlert from '../ErrorAlert.svelte';
let { big = false, value = $bindable(), label = '', icon = null, required = false, errors = [], field = '', options = [], } = $props();
let selected = $state(options.find(option => option.value === value));
const id = 'id' + (Math.random() + 1).toString(36).substring(7);
const set = (option) => {
    selected = option;
    value = option.value;
};
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
        <div class="open flex" id="{id}">
            {#if selected}
                <span>{selected.label ?? selected.value}</span>
            {:else}
                <em>Sélection...</em>
            {/if}
            <i class="micon">arrow_drop_down</i>
        </div>
        {#snippet content()}
        <aside class="z-depth-3 thin-scrollbar" >
            {#each options as option}
                <button type="button" class="flex" onclick={() => set(option)} class:active={option.value === selected?.value}>
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
        {/snippet}
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
    div.open { 
        color:var(--font, #424242);
        border: 1px solid var(--grey-darken, #d1d1d1);
        background: var(--bg-darken, #fff);
        justify-content: space-between;
        text-align: left;
        width: 100%;
        border-radius: 4px;
        padding: 6px 4px 6px 10px;
        user-select: none;
    }
    div.open:active, div.open:focus {
        border: 1px solid var(--primary-lighten)
    }

    aside {
        background: var(--bg-darken, #fff);
        border: 1px solid var(--grey, #e0e0e0);
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
        color: var(--font);
        justify-content: space-between;
    }
    aside button.active {
        background: var(--grey-lighten-3, #fafafa);
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
    section.small div.open{
        font-size:14px;
        color:var(--font, #424242);
        height:32px;
    }
    section:not(.small) div.open{
        height:38px;
    }
    em {
        color: var(--grey-darken, #d1d1d1);
        font-size: 12px;
        font-style: normal;
    }

    i.checked {
        font-size: 16px;
        color: var(--font, #424242);
    }
</style>