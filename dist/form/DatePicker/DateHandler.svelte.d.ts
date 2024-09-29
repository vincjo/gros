import AbstractDateHandler from './AbstractDateHandler.svelte';
export type Calendar = {
    year: number;
    month: number;
    number: number;
};
export default class DateHandler extends AbstractDateHandler {
    constructor(dateString: string | null);
    setDate(day: Calendar): void;
    setMonth(month: number): void;
    setYear(year: number): void;
}
