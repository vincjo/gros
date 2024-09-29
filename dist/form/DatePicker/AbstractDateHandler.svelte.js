export default class AbstractDateHandler {
    date = $state(new Date());
    navDate = $state(new Date());
    month = $derived(this.getMonth());
    year = $derived(this.getYear());
    calendar = $derived(this.getCalendar());
    constructor(dateString) {
        this.date = dateString ? new Date(dateString) : new Date();
        this.navDate = dateString ? new Date(dateString) : new Date();
    }
    getMonth() {
        return this.navDate.getMonth();
    }
    getYear() {
        return this.navDate.getFullYear();
    }
    getCalendar() {
        const firstWeekday = new Date(this.year, this.month, 1).getDay();
        let days = [];
        let weekStartsOn = 1;
        const daysBefore = (firstWeekday - weekStartsOn + 7) % 7;
        if (daysBefore > 0) {
            let lastMonth = this.month - 1;
            let lastMonthYear = this.year;
            if (lastMonth === -1) {
                lastMonth = 11;
                lastMonthYear = this.year - 1;
            }
            days = this.getMonthDays(lastMonthYear, lastMonth).slice(-daysBefore);
        }
        days = days.concat(this.getMonthDays(this.year, this.month));
        const nextMonth = (this.month + 1 === 12) ? 0 : this.month + 1;
        const nextMonthYear = (this.month + 1 === 12) ? this.year + 1 : this.year;
        const daysAfter = 42 - days.length;
        days = days.concat(this.getMonthDays(nextMonthYear, nextMonth).slice(0, daysAfter));
        return days;
    }
    getMonthLength(year, month) {
        const feb = this.isLeapYear(year) ? 29 : 28;
        const monthLengths = [31, feb, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        return monthLengths[month];
    }
    isLeapYear(year) {
        return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    }
    getMonthDays(year, month) {
        const monthLength = this.getMonthLength(year, month);
        const days = [];
        for (const i of [...Array(monthLength).keys()]) {
            days.push({
                year: year,
                month: month,
                number: i + 1,
            });
        }
        return days;
    }
}
