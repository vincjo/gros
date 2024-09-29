export type Format = Intl.DateTimeFormatOptions;
export type Unit = 'day' | 'month' | 'year' | 'week';
export declare const DateTime: (date: string | Date) => Handler;
declare class Handler {
    date: Date;
    constructor(date: string | Date);
    format(format?: Format, locale?: string): string;
    relative(): string;
    minus(value: number, unit?: Unit): Handler;
    plus(value: number, unit?: Unit): Handler;
    toISOString(): string;
}
export {};
