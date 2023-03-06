import { type Readable, type Writable, writable, get } from 'svelte/store'

export type RGB = [r: number, g: number, b: number]
export type HSV = [h: number, s: number, v: number]
export type HSL = [h: number, s: number, l: number]
export type HEX = string

export default class ColorHandler
{
    public hex: Writable<string>
    public rgb: Writable<RGB>
    public hsv: Writable<HSV>
    public hsl: Writable<HSL>
    public opacity: Writable<number>

    constructor(hex = '#ff0000', opacity = 1) {
        this.hex = writable(hex)
        this.opacity = writable(opacity)
        this.rgb = writable( ColorHandler.HEX_to_RGB( get(this.hex) ) )
        this.hsv = writable( ColorHandler.RGB_to_HSV( get(this.rgb) ) )
        this.hsl = writable( ColorHandler.RGB_to_HSL( get(this.rgb) ) )
    }

    public setHEX(hex: HEX)
    {
        this.hex.set(hex)
        this.rgb.set( ColorHandler.HEX_to_RGB(hex) )
        const rgb = get(this.rgb)
        this.hsv.set( ColorHandler.RGB_to_HSV(rgb) )
        this.hsl.set( ColorHandler.RGB_to_HSL(rgb) )
    }

    public setRGB(rgb: RGB)
    {
        this.rgb.set(rgb)
        this.hex.set( ColorHandler.RGB_to_HEX(rgb) )
        this.hsv.set( ColorHandler.RGB_to_HSV(rgb) )
        this.hsl.set( ColorHandler.RGB_to_HSL(rgb) )
    }

    public setHSV(hsv: HSV)
    {
        this.hsv.set(hsv)
        const rgb = ColorHandler.HSV_to_RGB(hsv)
        this.rgb.set(rgb)
        this.hex.set( ColorHandler.RGB_to_HEX(rgb) )
        this.hsl.set( ColorHandler.RGB_to_HSL(rgb) )
    }

    public setOpacity(opacity: number)
    {
        this.opacity.set(opacity)
    }

    public getHEX(): Writable<HEX>
    {
        return this.hex
    }

    public getRGB(): Writable<RGB>
    {
        return this.rgb
    }

    public getHSV(): Writable<HSV>
    {
        return this.hsv
    }

    public getHSL(): Writable<HSL>
    {
        return this.hsl
    }

    public getOpacity(): Writable<number>
    {
        return this.opacity
    }

    public static HSV_to_RGB(hsv: HSV): RGB
    {
        let [h, s, v] = hsv
        s /= 100
        v /= 100
        const k = (n: number) => (n + h / 60) % 6
        const f = (n: number) => v * (1 - s * Math.max(0, Math.min(k(n), 4 - k(n), 1)))
        return [
            Math.ceil(255 * f(5)), 
            Math.ceil(255 * f(3)), 
            Math.ceil(255 * f(1))
        ]
    }

    public static HEX_to_RGB(hex: HEX): RGB
    {
        let parsed = hex.slice(hex.startsWith('#') ? 1 : 0)
        if (parsed.length === 3) {
            parsed = [...parsed].map(x => x + x).join('')
        }
        const value = parseInt(parsed, 16)
        const r = value >>> 16
        const g = (value & 0x00ff00) >>> 8
        const b = (value & 0x0000ff) >>> 0
        return [r, g, b]
    }

    public static RGB_to_HEX(rgb: RGB): HEX
    {
        const [r, g, b] = rgb
        const hex = (1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1)
        return '#' + hex
    }

    public static RGB_to_HSV(rgb: RGB): HSV
    {
        let [r, g, b] = rgb
        r /= 255
        g /= 255
        b /= 255
        const v = Math.max(r, g, b)
        const n = v - Math.min(r, g, b)
        const h = n === 0 ? 0 : n && v === r ? (g - b) / n : v === g ? 2 + (b - r) / n : 4 + (r - g) / n

        return [
            Math.ceil(60 * (h < 0 ? h + 6 : h)), 
            Math.ceil(v && (n / v) * 100), 
            Math.ceil(v * 100)
        ] as HSV
    }

    public static RGB_to_HSL(rgb: RGB): HSL
    {
        let [ r, g, b ] = rgb
        r /= 255
        g /= 255
        b /= 255
        const l = Math.max(r, g, b)
        const s = l - Math.min(r, g, b)
        const h = s
          ? l === r
            ? (g - b) / s
            : l === g
            ? 2 + (b - r) / s
            : 4 + (r - g) / s
          : 0
        return [
            Math.ceil(60 * h < 0 ? 60 * h + 360 : 60 * h),
            Math.ceil(100 * (s ? (l <= 0.5 ? s / (2 * l - s) : s / (2 - (2 * l - s))) : 0)),
            Math.ceil((100 * (2 * l - s)) / 2)
        ] as HSL
    }
}