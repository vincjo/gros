
export type Format = {
    year    ?: 'numeric' | '2-digit'
    month   ?: 'numeric' | '2-digit' | 'narrow' | 'short' | 'long'
    day     ?: 'numeric' | '2-digit'
    weekday ?: 'narrow'  | 'short'   | 'long'
}
export type Unit = 'day' | 'month' | 'year' | 'week'

export class DateTime
{
    public static format(
        dateString: string, 
        format: Format = { year: 'numeric', month: 'numeric', day: 'numeric' }, 
        locale = 'fr-FR'
    ): string 
    {
        const date = new Date(dateString)
        return new Intl.DateTimeFormat(locale, format).format(date)
    }

    public static relative(dateString: string, locale = 'fr-FR'): string
    {
        let unit: Unit
        const rtf = new Intl.RelativeTimeFormat(locale, { numeric: 'auto' })
        let fromNow = (new Date(dateString).getTime() - new Date().getTime()) / (24 * 60 * 60 * 1000)

        if (fromNow < -365 || fromNow > 365) {
            fromNow = fromNow / 365
            unit = 'year'
        }
        else if (fromNow < -31 || fromNow > 31) {
            fromNow = fromNow / 31
            unit = 'month'
        }
        else if (fromNow < -7 || fromNow > 7) {
            fromNow = fromNow / 7
            unit = 'week'
        }
        else {
            fromNow = fromNow
            unit = 'day'
        }
        const duration = parseFloat(fromNow.toFixed(0))

        return rtf.format(duration, unit)
    }

    public static minus(dateString: string, value: number, unit: Unit = 'day'): string
    {
        const date = new Date(dateString)
        if (unit === 'year') {
            date.setFullYear(date.getFullYear() - value)
            return date.toISOString()
        }
        else if (unit === 'month') {
            date.setMonth(date.getMonth() - value)
            return date.toISOString()
        }
        else if (unit === 'week') {
            date.setDate(date.getDate() - (value * 7))
            return date.toISOString()
        }
        else {
            date.setDate(date.getDate() - value)
            return date.toISOString()
        }
    }

    public static plus(dateString: string, value: number, unit: Unit = 'day'): string
    {
        const date = new Date(dateString)
        if (unit === 'year') {
            date.setFullYear(date.getFullYear() + value)
            return date.toISOString()
        }
        else if (unit === 'month') {
            date.setMonth(date.getMonth() + value)
            return date.toISOString()
        }
        else if (unit === 'week') {
            date.setDate(date.getDate() + (value * 7))
            return date.toISOString()
        }
        else {
            date.setDate(date.getDate() + value)
            return date.toISOString()
        }
    }
}