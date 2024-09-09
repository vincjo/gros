import { onMount } from 'svelte'

export default class Theme
{
    public value = $state('dark')

    public init()
    {
        onMount(() => this.set(this.get()))
    }

    public switch()
    {
        this.set(this.value === 'dark' ? 'light' : 'dark')
    }

    public set(theme: string)
    {
        document.documentElement.dataset.theme = theme
        document.cookie = `siteTheme=${theme}; max-age=31536000; path="/"`
        this.value = theme
        return theme
    }

    public get()
    {
        const regex = new RegExp(`(^| )siteTheme=([^;]+)`)
        const match = document.cookie.match(regex)
        if (match) {
            return match[2]
        }
        const userPrefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches
        if (userPrefersDarkMode) {
            return 'dark'
        }
        return 'light'
    }
}