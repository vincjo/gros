import Context from './Context'
import type { Writable, Readable } from 'svelte/store'

export type Calendar = { year: number; month: number; number: number }

export default class DateHandler
{
    private context: Context

    constructor(dateString: string | null)
    {
        this.context = new Context(dateString)
    }

    public getDate(): Writable<Date>
    {
        return this.context.date
    }

    public setDate(day: Calendar): void
    {
        this.context.date.set(new Date(day.year, day.month, day.number, 5, 0, 0))
    }

    public getNavDate(): Writable<Date>
    {
        return this.context.navDate
    }

    public setMonth(month: number): void
    {
        this.context.setMonth(month)
    }

    public setYear(year: number): void
    {
        this.context.setYear(year)
    }

    public getCalendar(): Readable<Calendar[]>
    {
        return this.context.calendar
    }
}