export type RGB = [r: number, g: number, b: number];
export type HSV = [h: number, s: number, v: number];
export type HSL = [h: number, s: number, l: number];
export type HEX = string;
export default class ColorHandler {
    hex: string;
    rgb: RGB;
    hsv: HSV;
    hsl: HSL;
    opacity: number;
    onchange: (handler: ColorHandler) => void;
    constructor(hex?: string, opacity?: number, onchange?: (handler: ColorHandler) => void);
    setHEX(hex: HEX): void;
    setRGB(rgb: RGB): void;
    setHSV(hsv: HSV): void;
}
