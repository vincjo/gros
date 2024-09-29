export default class SliderHandler {
    // dom references
    slider;
    // range slider props
    big = false;
    range;
    pushy = $state(false);
    min = $state(0);
    max = $state(100);
    step = $state(1);
    values = $state([(this.max + this.min) / 2]);
    vertical = $state(false);
    float = $state(false);
    reversed = $state(false);
    hoverable = $state(true);
    disabled = $state(false);
    // range pips / values props
    pips = $state(false);
    pipstep = $state(undefined);
    all = $state(undefined);
    first = $state(undefined);
    last = $state(undefined);
    rest = $state(undefined);
    // formatting props
    formatter = (v, i, p) => v;
    handleFormatter = this.formatter;
    // stylistic props
    precision = 2;
    springValues = { stiffness: 0.15, damping: 0.6 };
    // state management
    valueLength = $state(0);
    focus = $state(false);
    handleActivated = $state(false);
    handlePressed = $state(false);
    keyboardActive = $state(false);
    activeHandle = $state(this.values.length - 1);
    startValue = $state(undefined);
    previousValue = $state(undefined);
    springPositions;
    constructor({ values, min, max, step, pips, range, pushy }) {
        this.values = values;
        this.min = min;
        this.max = max;
        this.step = step;
        this.pips = pips;
        this.range = range;
        this.pushy = pushy;
    }
    index(el) {
        if (!el)
            return -1;
        var i = 0;
        while ((el = el.previousElementSibling)) {
            i++;
        }
        return i;
    }
    normalisedClient(e) {
        if (e.type.includes('touch')) {
            return e.touches[0];
        }
        else {
            return e;
        }
    }
    targetIsHandle(el) {
        const handles = this.slider.querySelectorAll('.handle');
        const isHandle = Array.prototype.includes.call(handles, el);
        const isChild = Array.prototype.some.call(handles, (e) => e.contains(el));
        return isHandle || isChild;
    }
    trimRange(values) {
        if (this.range === 'min' || this.range === 'max') {
            return values.slice(0, 1);
        }
        else if (this.range) {
            return values.slice(0, 2);
        }
        else {
            return values;
        }
    }
    getSliderDimensions() {
        return this.slider.getBoundingClientRect();
    }
    getClosestHandle(clientPos) {
        // first make sure we have the latest dimensions
        // of the slider, as it may have changed size
        const dims = this.getSliderDimensions();
        // calculate the interaction position, percent and value
        let handlePos = 0;
        let handlePercent = 0;
        let handleVal = 0;
        if (this.vertical) {
            handlePos = clientPos.clientY - dims.top;
            handlePercent = (handlePos / dims.height) * 100;
            handlePercent = this.reversed ? handlePercent : 100 - handlePercent;
        }
        else {
            handlePos = clientPos.clientX - dims.left;
            handlePercent = (handlePos / dims.width) * 100;
            handlePercent = this.reversed ? 100 - handlePercent : handlePercent;
        }
        handleVal = ((this.max - this.min) / 100) * handlePercent + this.min;
        let closest;
        if (this.range === true && this.values[0] === this.values[1]) {
            if (handleVal > this.values[1]) {
                return 1;
            }
            else {
                return 0;
            }
        }
        else {
            closest = this.values.indexOf([...this.values].sort((a, b) => Math.abs(handleVal - a) - Math.abs(handleVal - b))[0]);
        }
        return closest;
    }
    handleInteract(clientPos) {
        // first make sure we have the latest dimensions
        // of the slider, as it may have changed size
        const dims = this.getSliderDimensions();
        // calculate the interaction position, percent and value
        let handlePos = 0;
        let handlePercent = 0;
        let handleVal = 0;
        if (this.vertical) {
            handlePos = clientPos.clientY - dims.top;
            handlePercent = (handlePos / dims.height) * 100;
            handlePercent = this.reversed ? handlePercent : 100 - handlePercent;
        }
        else {
            handlePos = clientPos.clientX - dims.left;
            handlePercent = (handlePos / dims.width) * 100;
            handlePercent = this.reversed ? 100 - handlePercent : handlePercent;
        }
        handleVal = ((this.max - this.min) / 100) * handlePercent + this.min;
        this.moveHandle(this.activeHandle, handleVal);
    }
    moveHandle(index, value) {
        value = this.alignValueToStep(value);
        if (typeof index === 'undefined') {
            index = this.activeHandle;
        }
        if (this.range) {
            if (index === 0 && value > this.values[1]) {
                if (this.pushy) {
                    this.values[1] = value;
                }
                else {
                    value = this.values[1];
                }
            }
            else if (index === 1 && value < this.values[0]) {
                if (this.pushy) {
                    this.values[0] = value;
                }
                else {
                    value = this.values[0];
                }
            }
        }
        if (this.values[index] !== value) {
            this.values[index] = value;
        }
        if (this.previousValue !== value) {
            this.eChange();
            this.previousValue = value;
        }
        return value;
    }
    rangeStart(values) {
        if (this.range === 'min') {
            return 0;
        }
        else {
            return values[0];
        }
    }
    rangeEnd(values) {
        if (this.range === 'max') {
            return 0;
        }
        else if (this.range === 'min') {
            return 100 - values[0];
        }
        else {
            return 100 - values[1];
        }
    }
    sliderBlurHandle(e) {
        if (this.keyboardActive) {
            this.focus = false;
            this.handleActivated = false;
            this.handlePressed = false;
        }
    }
    sliderFocusHandle(e) {
        if (!this.disabled) {
            this.activeHandle = this.index(e.target);
            this.focus = true;
        }
    }
    sliderKeydown(e) {
        if (!this.disabled) {
            const handle = this.index(e.target);
            let jump = e.ctrlKey || e.metaKey || e.shiftKey ? this.step * 10 : this.step;
            let prevent = false;
            switch (e.key) {
                case 'PageDown':
                    jump *= 10;
                case 'ArrowRight':
                case 'ArrowUp':
                    this.moveHandle(handle, this.values[handle] + jump);
                    prevent = true;
                    break;
                case 'PageUp':
                    jump *= 10;
                case 'ArrowLeft':
                case 'ArrowDown':
                    this.moveHandle(handle, this.values[handle] - jump);
                    prevent = true;
                    break;
                case 'Home':
                    this.moveHandle(handle, this.min);
                    prevent = true;
                    break;
                case 'End':
                    this.moveHandle(handle, this.max);
                    prevent = true;
                    break;
            }
            if (prevent) {
                e.preventDefault();
                e.stopPropagation();
            }
        }
    }
    sliderInteractStart(e) {
        if (!this.disabled) {
            const el = e.target;
            const clientPos = this.normalisedClient(e);
            // set the closest handle as active
            this.focus = true;
            this.handleActivated = true;
            this.handlePressed = true;
            this.activeHandle = this.getClosestHandle(clientPos);
            this.startValue = this.previousValue = this.alignValueToStep(this.values[this.activeHandle]);
            this.eStart();
            if (e.type === 'touchstart' && !el.matches('.pipVal')) {
                this.handleInteract(clientPos);
            }
        }
    }
    sliderInteractEnd(e) {
        // fire the stop event for touch devices
        if (e.type === 'touchend') {
            this.eStop();
        }
        this.handlePressed = false;
    }
    bodyInteractStart(e) {
        this.keyboardActive = false;
        if (focus && e.target !== this.slider && !this.slider.contains(e.target)) {
            this.focus = false;
        }
    }
    bodyInteract(e) {
        if (!this.disabled) {
            if (this.handleActivated) {
                this.handleInteract(this.normalisedClient(e));
            }
        }
    }
    bodyMouseUp(e) {
        if (!this.disabled) {
            const el = e.target;
            if (this.handleActivated) {
                if (el === this.slider || this.slider.contains(el)) {
                    this.focus = true;
                    if (!this.targetIsHandle(el) && !el.matches('.pipVal')) {
                        this.handleInteract(this.normalisedClient(e));
                    }
                }
                this.eStop();
            }
        }
        this.handleActivated = false;
        this.handlePressed = false;
    }
    bodyTouchEnd(e) {
        this.handleActivated = false;
        this.handlePressed = false;
    }
    bodyKeyDown(e) {
        if (!this.disabled) {
            if (e.target === this.slider || this.slider.contains(e.target)) {
                this.keyboardActive = true;
            }
        }
    }
    eStart() {
        // !this.disabled && dispatch('start', {
        //     activeHandle: this.activeHandle,
        //     value: this.startValue,
        //     values: this.values.map((v) => this.alignValueToStep(v)),
        // })
    }
    eStop() {
        // !this.disabled && dispatch('stop', {
        //     activeHandle: this.activeHandle,
        //     startValue: this.startValue,
        //     value: this.values[this.activeHandle],
        //     values: this.values.map((v) => this.alignValueToStep(v)),
        // })
    }
    eChange() {
        // !this.disabled && dispatch('change', {
        //     activeHandle: this.activeHandle,
        //     startValue: this.startValue,
        //     previousValue: typeof this.previousValue === 'undefined' ? this.startValue : this.previousValue,
        //     value: this.values[this.activeHandle],
        //     values: this.values.map((v) => this.alignValueToStep(v)),
        // })
    }
    percentOf(val) {
        let perc = ((val - this.min) / (this.max - this.min)) * 100;
        if (isNaN(perc) || perc <= 0) {
            return 0;
        }
        else if (perc >= 100) {
            return 100;
        }
        else {
            return this.fixFloat(perc);
        }
    }
    fixFloat(v) {
        return parseFloat(v.toFixed(this.precision));
    }
    clampValue(val) {
        return val <= this.min ? this.min : val >= this.max ? this.max : val;
    }
    alignValueToStep(val) {
        if (val <= this.min) {
            return this.fixFloat(this.min);
        }
        else if (val >= this.max) {
            return this.fixFloat(this.max);
        }
        let remainder = (val - this.min) % this.step;
        let aligned = val - remainder;
        if (Math.abs(remainder) * 2 >= this.step) {
            aligned += remainder > 0 ? this.step : -this.step;
        }
        aligned = this.clampValue(aligned);
        return this.fixFloat(aligned);
    }
}
