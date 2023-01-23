import { redirect } from '@sveltejs/kit'
import { getPath } from '$lib/page'

export const load = () => {
    throw redirect(307, getPath('/form/input'))
}