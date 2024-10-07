import { redirect } from '@sveltejs/kit'
import { getPath } from '$lib/page'
 
export const load = () => {
    redirect(307, getPath('/home'));
}