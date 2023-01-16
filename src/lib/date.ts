
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
}