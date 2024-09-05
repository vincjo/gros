
export default class Site
{
    public theme    = $state('dark')

    public setTheme = (theme: string) => {
        document.documentElement.dataset.theme = theme
        document.cookie = `siteTheme=${theme}; max-age=31536000; path="/"`
        this.theme = theme
        return theme
    }

    public getTheme = () => {
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