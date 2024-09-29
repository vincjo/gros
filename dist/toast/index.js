import { writable } from 'svelte/store';
export { default as Toast } from './Toast.svelte';
function create_store() {
    const { subscribe, update } = writable([]);
    return {
        subscribe,
        max: 3,
        dismiss_after: 5000,
        dismiss_button: true,
        show({ type, message, dismiss_after = this.dismiss_after, dismiss_button = this.dismiss_button }) {
            update((alerts) => [
                ...alerts.slice(-1 * (this.max - 1)),
                { type, message, dismiss_after, dismiss_button }
            ]);
        },
        info(message, dismiss_after) {
            this.show({ type: 'info', message, dismiss_after });
        },
        success(message, dismiss_after) {
            this.show({ type: 'success', message, dismiss_after });
        },
        failure(message, dismiss_after) {
            this.show({ type: 'failure', message, dismiss_after });
        },
        promise() { },
        dismiss(alert) {
            update((alerts) => alerts.filter((a) => a !== alert));
        },
        dismiss_all() {
            update(() => []);
        }
    };
}
export const toast = create_store();
