import { writable } from 'svelte/store'

export { default as Loading } from './Loading.svelte'

const createLoading = () => {
	const { subscribe, set, update } = writable({ active: false, message: '', submessage: '' });
	return {
        subscribe, set, update,
        start: (message = '', submessage = '') => {
            loading.update(store => store = { active: true, message: message, submessage: submessage })
        },
		stop: () =>  {
            loading.update(store => store = { active: false, message: '', submessage: '' })
        },
	}
}
export const loading = createLoading()
