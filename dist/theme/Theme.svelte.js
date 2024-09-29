import { onMount } from 'svelte';
export default class Theme {
    value = $state('dark');
    init() {
        onMount(() => this.set(this.get()));
    }
    switch() {
        this.set(this.value === 'dark' ? 'light' : 'dark');
    }
    set(theme) {
        document.documentElement.dataset.theme = theme;
        document.cookie = `siteTheme=${theme};max-age=31536000;path=/`;
        this.value = theme;
        return theme;
    }
    get() {
        const regex = new RegExp(`(^| )siteTheme=([^;]+)`);
        const match = document.cookie.match(regex);
        if (match) {
            return match[2];
        }
        const userPrefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
        if (userPrefersDarkMode) {
            return 'dark';
        }
        return 'light';
    }
}
