import AbstractDateHandler from './AbstractDateHandler.svelte'

export type Calendar = { year: number, month: number, number: number }

export default class DateHandler extends AbstractDateHandler
{
    constructor(dateString: string | null)
    {
        super(dateString)
    }

    public setDate(day: Calendar): void
    {
        this.date = new Date(day.year, day.month, day.number, 5, 0, 0)
    }

    public setMonth(month: number): void
    {
        this.navDate = new Date(this.navDate.setMonth(month))
    }

    public setYear(year: number): void
    {
        this.navDate = new Date(this.navDate.setFullYear(year))
    }
}