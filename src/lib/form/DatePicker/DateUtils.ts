
export type CalendarDay = { year: number; month: number; number: number }
export type RuleToken = { id: string; toString: (d: Date) => string }
export type FormatToken = string | RuleToken


export default class DateUtils
{
    public static isLeapYear(year: number): boolean
    {
        return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
    }

    public static getMonthLength(year: number, month: number): number
    {
        const feb = this.isLeapYear(year) ? 29 : 28
        const monthLengths = [31, feb, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

        return monthLengths[month]
    }

    public static toText(date: Date | null, formatTokens: FormatToken[]): string
    {
        let text = ''
        if (date) {
            for (const token of formatTokens) {
                if (typeof token === 'string') {
                    text += token
                } else {
                    text += token.toString(date)
                }
            }
        }
        return text
    }

    public static getMonthDays(year: number, month: number): CalendarDay[] 
    {
        const monthLength = this.getMonthLength(year, month)
        const days: CalendarDay[] = []
        for (let i = 0; i < monthLength; i++) {
            days.push({
                year: year,
                month: month,
                number: i + 1,
            })
        }
        return days
    }

    public static getCalendarDays(value: Date, weekStartsOn: number): CalendarDay[] 
    {
        const year = value.getFullYear()
        const month = value.getMonth()
        const firstWeekday = new Date(year, month, 1).getDay()

        let days: CalendarDay[] = []

        const daysBefore = (firstWeekday - weekStartsOn + 7) % 7
        if (daysBefore > 0) {
            let lastMonth = month - 1
            let lastMonthYear = year
            if (lastMonth === -1) {
                lastMonth = 11
                lastMonthYear = year - 1
            }
            days = this.getMonthDays(lastMonthYear, lastMonth).slice(-daysBefore)
        }

        days = days.concat(this.getMonthDays(year, month))

        let nextMonth = month + 1
        let nextMonthYear = year
        if (nextMonth === 12) {
            nextMonth = 0
            nextMonthYear = year + 1
        }
        const daysAfter = 42 - days.length
        days = days.concat(this.getMonthDays(nextMonthYear, nextMonth).slice(0, daysAfter))

        return days
    }
}