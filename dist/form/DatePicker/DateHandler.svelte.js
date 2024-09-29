import AbstractDateHandler from './AbstractDateHandler.svelte';
export default class DateHandler extends AbstractDateHandler {
    constructor(dateString) {
        super(dateString);
    }
    setDate(day) {
        this.date = new Date(day.year, day.month, day.number, 5, 0, 0);
    }
    setMonth(month) {
        this.navDate = new Date(this.navDate.setMonth(month));
    }
    setYear(year) {
        this.navDate = new Date(this.navDate.setFullYear(year));
    }
}
