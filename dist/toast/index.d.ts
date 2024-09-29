export { default as Toast } from './Toast.svelte';
export declare const toast: {
    subscribe: (this: void, run: import("svelte/store").Subscriber<any[]>, invalidate?: () => void) => import("svelte/store").Unsubscriber;
    max: number;
    dismiss_after: number;
    dismiss_button: boolean;
    show({ type, message, dismiss_after, dismiss_button }: {
        type: any;
        message: any;
        dismiss_after?: any;
        dismiss_button?: any;
    }): void;
    info(message: any, dismiss_after: any): void;
    success(message: any, dismiss_after: any): void;
    failure(message: any, dismiss_after: any): void;
    promise(): void;
    dismiss(alert: any): void;
    dismiss_all(): void;
};
