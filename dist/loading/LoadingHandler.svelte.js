export default class LoadingHandler {
    active = $state(false);
    message = $state('');
    submessage = $state('');
    start(message = '', submessage = '') {
        this.active = true;
        this.message = message;
        this.submessage = submessage;
    }
    stop() {
        this.active = false;
        this.message = '';
        this.submessage = '';
    }
}
