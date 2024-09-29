export default class ModalHandler {
    isActive = $state(false);
    component = $state(undefined);
    props = $state(undefined);
    open(component, props = undefined) {
        this.isActive = true;
        this.component = component;
        this.props = props;
    }
    close() {
        this.isActive = false;
        this.component = undefined;
        this.props = undefined;
    }
}
