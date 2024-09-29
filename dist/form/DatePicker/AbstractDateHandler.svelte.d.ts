import type { Calendar } from './DateHandler.svelte';
export default abstract class AbstractDateHandler {
    date: Date;
    navDate: Date;
    month: number;
    year: number;
    calendar: Calendar[];
    constructor(dateString: string | null);
    getMonth(): number;
    getYear(): number;
    getCalendar(): Calendar[];
    private getMonthLength;
    private isLeapYear;
    private getMonthDays;
}
