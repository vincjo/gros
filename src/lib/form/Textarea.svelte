<script>
    import ErrorMessage from './ErrorMessage.svelte'
    import ErrorAlert from './ErrorAlert.svelte'
    export let small = true
    export let spellcheck = false
    export let height = '72px'
    export let value = ''
    export let label = ''
    export let icon
    export let mandatory = false
    export let errors
    export let field

    let id = 'id' + (Math.random() + 1).toString(36).substring(7)
</script>


<section class:small={small}>
    <label for="{id}">
        <div class="flex">
            {#if icon}
                <i class="material-icons">{icon}</i>
            {/if}
            <span>
                {label}
                {#if mandatory}
                    <b>*</b>
                {/if}
            </span>

        </div>
        {#if !small}
        <div class="error">
            <ErrorMessage {field} {errors}/>
        </div>
        {/if}

    </label>

    <textarea bind:value style:height={height} class="thin-scrollbar" spellcheck={spellcheck}></textarea>

    {#if small}
        <ErrorAlert {field} {errors}/>
    {/if}
</section>


<style>
    section{margin-bottom:16px;position:relative;}
    label{display:flex;align-items:center;justify-content:space-between;color:var(--primary);font-weight:normal;font-size:16px;color:var(--primary);margin:0;margin-bottom:4px;}
    label .flex{display:flex;align-items:center;justify-content:flex-start;white-space:nowrap;}
    label .error{text-align:right;margin-left:40px;line-height:12px;}
    label b{color:var(--ternary);}

    label i.material-icons{padding-right:8px;color:var(--primary);font-size:22px;}
    textarea{ color:#626262;resize:none;}

    section.small{display:flex;justify-content:flex-start;align-items:center;margin-bottom:8px;}
    section.small label{font-size:12px;min-width:96px;white-space:normal;margin-right:8px;}
    section.small label .flex{white-space:normal;}
    section.small label .flex span{line-height:12px;}
    section.small i.material-icons{font-size:16px;}
    section.small textarea{font-size:14px;color:#424242;}
</style>