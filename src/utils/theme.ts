import { writable, derived } from 'svelte/store'

export const theme = writable('onb')

export const color = derived(theme, ($theme) => {
    if ($theme === 'resources') {
        return '00796b'
    }
    else if ($theme === 'imope') {
        return 'a67c00'
    }
    else if ($theme === 'onb') {
        return '006064'
    }
    return '000'
})