
export type format = {
    year    ?: 'numeric' | '2-digit'
    month   ?: 'numeric' | '2-digit' | 'narrow' | 'short' | 'long'
    day     ?: 'numeric' | '2-digit'
    weekday ?: 'narrow'  | 'short'   | 'long'
}

export class DateTime
{
    public static format(dateString: string, format: format = { year: 'numeric', month: 'numeric', day: 'numeric' }, locale = 'fr-FR')
    {
        const date = new Date(dateString);
        return new Intl.DateTimeFormat(locale, format).format(date)
    }

    public static formatRelative(dateString: string, locale = 'fr-FR')
    {
        let format: string, time: number
        const rtf = new Intl.RelativeTimeFormat(locale, { numeric: 'auto' })
        let fromNow = (new Date(dateString).getTime() - new Date().getTime()) / (24 * 60 * 60 * 1000)

        if (fromNow < -31) {
            fromNow = fromNow / 31
            format = 'month'
        }
        else if (fromNow < -365) {
            fromNow = fromNow / 365
            format = 'year'
        }
        else {
            format = 'day'
        }

        return rtf.format(fromNow, format as any)
    }
}