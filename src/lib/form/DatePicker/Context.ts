import { writable, derived, type Writable, type Readable } from 'svelte/store'

import type { Calendar } from './DateHandler'

export default class Context
{
    public date         : Writable<Date>
    public navDate      : Writable<Date>
    public day          : Readable<number>
    public month        : Readable<number>
    public year         : Readable<number>
    public calendar     : Readable<Calendar[]>

    constructor(dateString: string | null)
    {
        this.date       = writable(dateString ? new Date(dateString) : new Date())
        this.navDate    = writable(dateString ? new Date(dateString) : new Date())
        this.month      = this.getMonth()
        this.year       = this.getYear()
        this.calendar   = this.getCalendar()
    }

    public getMonth(): Readable<number>
    {
        return derived(
            this.navDate, ($date) => {
                return $date.getMonth()
            }
        )
    }

    public getYear(): Readable<number>
    {
        return derived(
            this.navDate, ($date) => {
                return $date.getFullYear()
            }
        )
    }

    public setMonth(month: number): void
    {
        const navDate = this.subscribe()
        navDate.setMonth(month)
        this.navDate.set(navDate)
    }

    public setYear(year: number): void
    {
        const navDate = this.subscribe()
        navDate.setFullYear(year)
        this.date.set(navDate)
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
        let $navDate: Date
        this.navDate.subscribe( store => $navDate = store )
        return $navDate
    }
}