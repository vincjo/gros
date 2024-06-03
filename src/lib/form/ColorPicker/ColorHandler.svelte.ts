export type RGB = [r: number, g: number, b: number]
export type HSV = [h: number, s: number, v: number]
export type HSL = [h: number, s: number, l: number]
export type HEX = string

export default class ColorHandler
{
    public hex      = $state<HEX>()
    public rgb      = $state<RGB>()
    public hsv      = $state<HSV>()
    public hsl      = $state<HSL>()
    public opacity  = $state(1)

    constructor(hex = '#ff0000', opacity = 1) {
        this.hex = hex
        this.rgb = HEX_to_RGB(this.hex)
        this.hsv = RGB_to_HSV(this.rgb)
        this.hsl = RGB_to_HSL(this.rgb)
        this.opacity = opacity
    }

    public setHEX(hex: HEX)
    {
        this.hex = hex
        this.rgb = HEX_to_RGB(this.hex)
        this.hsv = RGB_to_HSV(this.rgb)
        this.hsl = RGB_to_HSL(this.rgb)
    }

    public setRGB(rgb: RGB)
    {
        this.rgb = rgb
        this.hex = RGB_to_HEX(this.rgb)
        this.hsv = RGB_to_HSV(this.rgb)
        this.hsl = RGB_to_HSL(this.rgb)
    }

    public setHSV(hsv: HSV)
    {
        this.hsv = hsv
        this.rgb = HSV_to_RGB(this.hsv)
        this.hex = RGB_to_HEX(this.rgb)
        this.hsl = RGB_to_HSL(this.rgb)
    }
}


const HSV_to_RGB = (hsv: HSV): RGB => {
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

const HEX_to_RGB = (hex: HEX): RGB => {
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

const RGB_to_HEX = (rgb: RGB): HEX =>
{
    const [r, g, b] = rgb
    const hex = (1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1)
    return '#' + hex
}

const RGB_to_HSV = (rgb: RGB): HSV => {
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

const RGB_to_HSL = (rgb: RGB): HSL => {
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