import Context from './Context'
import type { Writable, Readable } from 'svelte/store'
import type { Calendar } from './Context'


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

    public setDay(day: number): void
    {
        this.context.setDay(day)
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