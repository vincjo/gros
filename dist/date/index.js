export const DateTime = (date) => new Handler(date);
class Handler {
    date;
    constructor(date) {
        this.date = (typeof date === 'string') ? new Date(date) : date;
    }
    format(format, locale = 'fr-FR') {
        const param = format ?? { year: 'numeric', month: 'short', day: 'numeric' };
        return new Intl.DateTimeFormat(locale, param).format(this.date);
    }
    relative() {
        let unit;
        const rtf = new Intl.RelativeTimeFormat('fr', { numeric: 'auto' });
        let fromNow = (this.date.getTime() - new Date().getTime()) / (24 * 60 * 60 * 1000);
        if (fromNow < -365 || fromNow > 365) {
            fromNow = fromNow / 365;
            unit = 'year';
        }
        else if (fromNow < -31 || fromNow > 31) {
            fromNow = fromNow / 31;
            unit = 'month';
        }
        else if (fromNow < -7 || fromNow > 7) {
            fromNow = fromNow / 7;
            unit = 'week';
        }
        else {
            fromNow = fromNow;
            unit = 'day';
        }
        const duration = parseFloat(fromNow.toFixed(0));
        return rtf.format(duration, unit);
    }
    minus(value, unit = 'day') {
        if (unit === 'year') {
            this.date.setFullYear(this.date.getFullYear() - value);
        }
        else if (unit === 'month') {
            this.date.setMonth(this.date.getMonth() - value);
        }
        else if (unit === 'week') {
            this.date.setDate(this.date.getDate() - (value * 7));
        }
        else {
            this.date.setDate(this.date.getDate() - value);
        }
        return this;
    }
    plus(value, unit = 'day') {
        if (unit === 'year') {
            this.date.setFullYear(this.date.getFullYear() + value);
        }
        else if (unit === 'month') {
            this.date.setMonth(this.date.getMonth() + value);
        }
        else if (unit === 'week') {
            this.date.setDate(this.date.getDate() + (value * 7));
        }
        else {
            this.date.setDate(this.date.getDate() + value);
        }
        return this;
    }
    toISOString() {
        return this.date.toISOString();
    }
}
