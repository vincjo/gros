<script>
    import { flip } from 'svelte/animate'
    import { fly, scale } from 'svelte/transition'
    import { toast } from './'

    export let position = 'start'

    function create_timer(cb, delay) {
        let start
        let timeout_id

        function pause() {
            clearTimeout(timeout_id)
            delay -= new Date() - start
        }

        function resume() {
            start = new Date()
            timeout_id = setTimeout(cb, delay)
        }

        function clear() {
            clearTimeout(timeout_id)
        }

        resume()

        return {
            resume,
            pause,
            clear
        }
    }

    function dismiss_after(node, alert) {
        if (!alert.dismiss_after) return

        function on_mouseenter(e) {
            mouse_over_elements.add(e.target)
            if (mouse_over_elements.size > 1) return
            timer.pause()
        }

        function on_mouseleave(e) {
            mouse_over_elements.delete(e.target)
            if (mouse_over_elements.size > 0) return
            timer.resume()
        }

        let mouse_over_elements = new Set()
        let timer

        node.addEventListener('mouseenter', on_mouseenter)
        node.addEventListener('mouseleave', on_mouseleave)

        timer = create_timer(() => toast.dismiss(alert), alert.dismiss_after)

        return {
            destroy() {
                timer.clear()
                node.removeEventListener('mouseenter', on_mouseenter)
                node.removeEventListener('mouseleave', on_mouseleave)
            }
        }
    }
</script>

<div class="toast --{position}">
    {#each $toast as alert (alert)}
        <div
            role="alert"
            class="alert --{alert.type}"
            use:dismiss_after={alert}
            animate:flip={{ duration: 200 }}
            in:fly={{ y: 15 * (position === 'start' ? -1 : 1), duration: 200 }}
            out:scale={{ duration: 200, start: 0.95 }}
        >
            {#if alert.type === 'success'}
                <svg viewBox="0 0 24 24" aria-hidden="true" class="icon">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
            {:else if alert.type === 'failure'}
                <svg viewBox="0 0 24 24" aria-hidden="true" class="icon">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
                </svg>
            {:else if alert.type === 'info'}
                <svg viewBox="0 0 24 24" aria-hidden="true" class="icon">
                    <line x1="9" y1="18" x2="15" y2="18" />
                    <line x1="10" y1="22" x2="14" y2="22" />
                    <path
                        d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14"
                    />
                </svg>
            {/if}

            <div class="message">{@html alert.message}</div>

            {#if alert.dismiss_button}
                <button
                    type="button"
                    aria-label="Dismiss"
                    class="dismiss-btn"
                    on:click={() => toast.dismiss(alert)}
                >
                    <svg aria-hidden="true" viewBox="0 0 24 24" class="icon">
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                </button>
            {/if}
        </div>
    {/each}
</div>

<style>
    * {
        box-sizing: border-box;
    }

    .toast {
        display: flex;
        padding: 0 1em;
        margin: 0;
        position: fixed;
        left: 0;
        width: 100%;
        pointer-events: none;
    }

    .toast.--start {
        inset-block-start: 0;
        flex-direction: column-reverse;
    }

    .toast.--end {
        inset-block-end: 0;
        flex-direction: column;
    }

    .alert {
        padding: 0.75rem;
        border-radius: 0.25rem;
        margin-block: 0.25rem;
        margin-inline: auto;
        font-family: sans-serif;
        font-weight: 500;
        line-height: 1.5;
        color: white;
        display: flex;
        align-items: center;
        pointer-events: auto;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

        transition: scale 100ms;
    }

    .alert:hover {
        scale: 1.02;
    }

    .alert.--info {
        background-color: #3a98b9;
    }

    .alert.--success {
        background-color: hsl(171, 71%, 40%);
    }

    .alert.--warning {
        background-color: #ff6e31;
    }

    .alert.--failure {
        background-color: hsl(333, 81%, 40%);
    }

    .icon {
        inline-size: 1em;
        block-size: 1em;
        font-size: 1.5rem;
        fill: none;
        stroke: currentColor;
        stroke-width: 0.125rem;
        stroke-linecap: round;
        stroke-linejoin: round;
    }

    .message {
        margin-inline: 0.75rem;
    }

    .dismiss-btn {
        padding: 0.25rem;
        border: none;
        margin: 0;
        appearance: none;
        display: grid;
        place-items: center;
        font: inherit;
        color: inherit;
        background: none;
        cursor: pointer;
        opacity: 0.8;
        border-radius: 50%;

        transition: opacity, 100ms;
    }

    .dismiss-btn > .icon {
        font-size: 1rem;
        stroke-width: 0.2rem;
    }

    .dismiss-btn:hover {
        opacity: 1;
        background-color: hsla(0, 0%, 0%, 0.1);
    }

    .dismiss-btn:active {
        background-color: hsla(0, 0%, 0%, 0.2);
    }
</style>
