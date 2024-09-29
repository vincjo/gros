export default class LoadingHandler {
    active: boolean;
    message: string;
    submessage: string;
    start(message?: string, submessage?: string): void;
    stop(): void;
}
