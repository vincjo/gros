import ModalHandler from './ModalHandler.svelte';
export { default as Modal } from './Modal.svelte';
export { default as ModalContainer } from './ModalContainer.svelte';
export declare const modal: ModalHandler;
export interface ModalProps {
    close: () => void;
    props: typeof modal.props;
}
