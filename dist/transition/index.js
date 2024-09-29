export const fadescale = (node, { delay = 0, duration = 200, easing = (x) => x, baseScale = 0 }) => {
    const o = +getComputedStyle(node).opacity;
    const m = getComputedStyle(node).transform.match(/scale\(([0-9.]+)\)/);
    const s = m ? m[1] : 1;
    const is = 1 - baseScale;
    return {
        delay,
        duration,
        css: (t) => {
            const eased = easing(t);
            return `opacity: ${eased * o}; transform: scale(${(eased * s * is) + baseScale})`;
        }
    };
};
export const flipboard = (node, params) => {
    const randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
    const text = node.textContent.trim();
    let lastTime = 0;
    return {
        duration: params.duration ?? 3000,
        ...params,
        tick: (t) => {
            if (t === 1) {
                node.textContent = text;
                return;
            }
            const time = Date.now();
            if (time - lastTime < 32)
                return;
            lastTime = time;
            let str = '';
            for (let i = 0; i < text.length; i++) {
                const progress = i / text.length;
                if (text[i] === ' ' || progress < t * 0.9) {
                    str += text[i];
                }
                else if (progress < t * 1.5) {
                    str += randomChars[Math.floor(Math.random() * randomChars.length)];
                }
                else if (progress < t * 2) {
                    str += '-';
                }
                else {
                    str += ' ';
                }
            }
            node.textContent = str;
        }
    };
};
