
<script lang="ts">import { Dropdown } from '../../dropdown';
import { preventDefault } from '../../event-modifier';
import ErrorMessage from '../ErrorMessage.svelte';
import ErrorAlert from '../ErrorAlert.svelte';
let { big = false, values = [], label = '', icon = null, required = false, errors = [], field = '', options = [], } = $props();
let selected = $state(options.filter(option => values.includes(option.value)));
const id = 'id' + (Math.random() + 1).toString(36).substring(7);
const set = (option) => {
    if ((selected).includes(option)) {
        selected = selected.filter(item => item !== option);
    }
    else {
        selected = [...selected, option];
    }
    values = selected.map(option => option.value);
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
            <article class="flex">
                {#if selected.length > 0}
                    {#each selected as option}
                        <!-- svelte-ignore a11y_click_events_have_key_events -->
                        <!-- svelte-ignore a11y_no_static_element_interactions -->
                        <div onclick={() => preventDefault(set(option))} class="flex prevent-opening button">
                            {option.label ?? option.value}
                            <i class="micon prevent-opening" style:font-size="14px" style:margin-left="2px">close</i>
                        </div>
                    {/each}
                {:else}
                    <em>Sélectionnez des items</em>
                {/if}
            </article>
            <i class="micon dd">arrow_drop_down</i>
        </div>
        {#snippet content()}
        <aside class="z-depth-3 thin-scrollbar" >
            {#each options as option}
                <button type="button" class="flex" onclick={() => set(option)} class:active={selected.includes(option)}>
                    <div class="flex">
                        {#if option.icon}
                            <i class="micon">{option.icon}</i>
                        {/if}
                        {@html option.label ?? option.value}
                    </div>
                    {#if selected.includes(option)}
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
        color:var(--font-grey, #757575);
        border: 1px solid var(--grey-darken, #d1d1d1);
        background: var(--bg-darken, #fff);
        justify-content: space-between;
        text-align: left;
        width: 100%;
        border-radius: 4px;
        padding: 0 0 4px 0;
        user-select: none;
    }
    div.open i.dd {
        padding: 4px 4px 0 0;
        color:var(--font, #424242);
    }
    div.open:active, div.open:focus {
        border: 1px solid var(--primary-lighten)
    }

    aside {
        background: var(--bg, #fff);
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
        background: var(--primary-lighten-1);
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
        min-height:32px;
    }
    section:not(.small) div.open {
        min-height:38px;
    }
    em {
        color: #9e9e9e;
        font-size: 12px;
        font-style: normal;
        padding: 4px 0 0 8px;
    }

    i.checked {
        font-size: 16px;
        color: var(--font, #424242);
    }
    article {
        flex-wrap: wrap;
    }
    article .button {
        font-size: 12px;
        background: var(--grey-lighten-2, #f5f5f5); 
        padding: 2px 4px;
        border: 1px solid var(--grey, #e0e0e0);
        margin: 4px 0 0 4px;
        border-radius: 2px;
    }
    article .button i {
        height: 16px;
        width: 16px;
        font-size: 16px;
        line-height: 16px;
        margin-left: 4px;
        color: var(--grey-darken, #9e9e9e);
    }
    article .button:hover i {
        color: var(--grey-lighten);
    }
</style>