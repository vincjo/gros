import { writable, derived, type Writable, type Readable } from 'svelte/store'

export type Calendar = { year: number; month: number; number: number }

export default class DateStores
{
    public date         : Writable<Date>
    public dateString   : string
    public day          : Readable<number>
    public month        : Readable<number>
    public year         : Readable<number>
    public calendar     : Readable<Calendar[]>

    constructor(dateString: string | null)
    {
        this.date       = writable(dateString ? new Date(dateString) : new Date())
        this.dateString = dateString
        this.day        = this.getDay()
        this.month      = this.getMonth()
        this.year       = this.getYear()
        this.calendar   = this.getCalendar()
    }

    public getDay(): Readable<number>
    {
        return derived(
            this.date, ($date) => {
                return $date.getDate()
            }
        )
    }

    public getMonth(): Readable<number>
    {
        return derived(
            this.date, ($date) => {
                return $date.getMonth()
            }
        )
    }

    public getYear(): Readable<number>
    {
        return derived(
            this.date, ($date) => {
                return $date.getFullYear()
            }
        )
    }

    public setDay(day: number): void
    {
        const date = this.subscribe()
        date.setDate(day)
        this.date.set(date)
    }

    public setMonth(month: number): void
    {
        const date = this.subscribe()
        date.setMonth(month)
        this.date.set(date)
    }

    public setYear(year: number): void
    {
        const date = this.subscribe()
        date.setFullYear(year)
        this.date.set(date)
    }

    public getCalendar(): Readable<Calendar[]>
    {
        return derived(
            [this.year, this.month], ([$year, $month]) => {
                const firstWeekday = new Date($year, $month, 1).getDay()

                let days: Calendar[] = []
                let weekStartsOn = 1

                const daysBefore = (firstWeekday - weekStartsOn + 7) % 7
                if (daysBefore > 0) {
                    let lastMonth = $month - 1
                    let lastMonthYear = $year
                    if (lastMonth === -1) {
                        lastMonth = 11
                        lastMonthYear = $year - 1
                    }
                    days = this.getMonthDays(lastMonthYear, lastMonth).slice(-daysBefore)
                }

                days = days.concat(this.getMonthDays($year, $month))

                let nextMonth = $month + 1
                let nextMonthYear = $year
                if (nextMonth === 12) {
                    nextMonth = 0
                    nextMonthYear = $year + 1
                }
                const daysAfter = 42 - days.length
                days = days.concat(this.getMonthDays(nextMonthYear, nextMonth).slice(0, daysAfter))

                return days
            }
        )
    }


    private getMonthLength(year: number, month: number): number
    {
        const feb = this.isLeapYear(year) ? 29 : 28
        const monthLengths = [31, feb, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

        return monthLengths[month]
    }

    private isLeapYear(year: number): boolean
    {
        return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
    }

    private getMonthDays(year: number, month: number): Calendar[]
    {
        const monthLength = this.getMonthLength(year, month)
        const days: Calendar[] = []
        for (let i = 0; i < monthLength; i++) {
            days.push({
                year: year,
                month: month,
                number: i + 1,
            })
        }
        return days
    }

    private subscribe(): Date
    {
        let $date
        this.date.subscribe( store => $date = store )
        return $date
    }
}