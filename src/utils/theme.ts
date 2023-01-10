import { writable, derived } from 'svelte/store'

export const theme = writable('resources')

export const color = derived(theme, ($theme) => {
    if ($theme === 'resources') {
        return '00796b'
    }
    else if ($theme === 'imope') {
        return 'bf9b30'
    }
    else if ($theme === 'onb') {
        return '006064'
    }
    return '000'
})