import { redirect } from '@sveltejs/kit'
import { path }  from '$lib/page'

export const load = () => {
    redirect(307, path.get('/utils/action'));
}