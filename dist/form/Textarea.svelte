<script lang="ts">import ErrorMessage from './ErrorMessage.svelte';
import ErrorAlert from './ErrorAlert.svelte';
let { big = false, spellcheck = false, height = '72px', value = $bindable(), label = '', icon = null, required = false, errors = [], field = '', oninput = () => { return; }, } = $props();
const id = 'id' + (Math.random() + 1).toString(36).substring(7);
</script>

<section class:small={!big}>
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

    <textarea bind:value style:height class="thin-scrollbar" {spellcheck} {oninput}></textarea>

    {#if !big}
        <ErrorAlert {field} {errors} />
    {/if}
</section>

<style>
    section {
        margin-bottom: 16px;
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
    textarea {
        color: var(--font, #424242);
        resize: none;
        background: var(--bg-darken, #fff);
    }

    section.small {
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        margin-bottom: 8px;
    }
    section.small label {
        font-size: 12px;
        min-width: 96px;
        white-space: normal;
        margin-right: 8px;
        margin-top: 8px;
    }
    section.small label .flex {
        white-space: normal;
    }
    section.small label .flex span {
        line-height: 12px;
    }
    section.small i.micon {
        font-size: 16px;
    }
    section.small textarea {
        font-size: 14px;
        color: var(--font);
    }
</style>
