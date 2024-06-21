

export default class RangeHandler
{
    public element: HTMLElement = undefined
    public range: 'min' | 'max' | boolean
    public min = 0
    public max = 100
    public step = 1
    public values = [(this.max + this.min) / 2]
    public disabled = false
    public vertical = false
    public reversed = false
    public pushy = false

    // state management
    public valueLength = 0
    public focus = $state(false)
    public handleActivated = $state(false)
    public handlePressed = $state(false)
    public keyboardActive = $state(false)
    public activeHandle = this.values.length - 1
    public startValue: number
    public previousValue: number

    constructor(element: HTMLElement)
    {
        this.element = element
    }

   public index(element: Element) 
   {
       if (!element) return -1
           let i = 0
       while ((element = element.previousElementSibling)) {
           i++
       }
       return i
   }

    public sliderFocusHandle(event: Event) {
        if (!this.disabled) {
            this.activeHandle = this.index(event.target as Element)
            this.focus = true
        }
    }

    public sliderKeydown(event: KeyboardEvent) 
    {
        if ( !this.disabled ) {
            const handle = this.index(event.target as Element)
            let jump = event.ctrlKey || event.metaKey || event.shiftKey ? this.step * 10 : this.step
            let prevent = false

            switch (event.key) {
                case "PageDown":
                    jump *= 10
                case "ArrowRight":
                case "ArrowUp":
                    this.moveHandle(handle, this.values[handle] + jump)
                    prevent = true
                    break
                case "PageUp":
                    jump *= 10
                case "ArrowLeft":
                case "ArrowDown":
                    this.moveHandle(handle, this.values[handle] - jump)
                    prevent = true
                    break
                case "Home":
                    this.moveHandle(handle, this.min)
                    prevent = true
                    break
                case "End":
                    this.moveHandle(handle, this.max)
                    prevent = true
                    break
            }
            if (prevent) {
                event.preventDefault()
                event.stopPropagation()
            }
        }
    }

    public normalisedClient(event: TouchEvent) {
        if (event.type.includes("touch")) {
            return event.touches[0]
        } else {
            return event
        }
    }

    public targetIsHandle(element: HTMLElement) {
        const handles = this.element.querySelectorAll(".handle")
        const isHandle = Array.prototype.includes.call(handles, element)
        const isChild = Array.prototype.some.call(handles, (node: Node) => node.contains(element))
        return isHandle || isChild
    }

    public trimRange(values: number[]) {
        if (this.range === 'min' || this.range === 'max') {
            return values.slice(0, 1)
        } else if (this.range) {
            return values.slice(0, 2)
        } else {
            return values
        }
    }

    public getSliderDimensions() 
    {
        return this.element.getBoundingClientRect()
    }

    public getClosestHandle(clientPos: MouseEvent) {
        const dims = this.getSliderDimensions()
        let handlePos = 0
        let handlePercent = 0
        let handleVal = 0
        if (this.vertical) {
            handlePos = clientPos.clientY - dims.top
            handlePercent = (handlePos / dims.height) * 100
            handlePercent = this.reversed ? handlePercent : 100 - handlePercent
        } else {
            handlePos = clientPos.clientX - dims.left
            handlePercent = (handlePos / dims.width) * 100
            handlePercent = this.reversed ? 100 - handlePercent : handlePercent
        }
        handleVal = ((this.max - this.min) / 100) * handlePercent + this.min

        let closest: number

        if (this.range === true && this.values[0] === this.values[1]) {
            if (handleVal > this.values[1]) {
                return 1
            } else {
                return 0
            }
        } else {
            closest = this.values.indexOf(
                [...this.values].sort((a, b) => Math.abs(handleVal - a) - Math.abs(handleVal - b))[0]
            )
        }
        return closest
    }

    public handleInteract(clientPos: MouseEvent) {
        const dims = this.getSliderDimensions()
        let handlePos = 0
        let handlePercent = 0
        let handleVal = 0
        if (this.vertical) {
            handlePos = clientPos.clientY - dims.top
            handlePercent = (handlePos / dims.height) * 100
            handlePercent = this.reversed ? handlePercent : 100 - handlePercent
        } else {
            handlePos = clientPos.clientX - dims.left
            handlePercent = (handlePos / dims.width) * 100
            handlePercent = this.reversed ? 100 - handlePercent : handlePercent
        }
        handleVal = ((this.max - this.min) / 100) * handlePercent + this.min
        this.moveHandle(this.activeHandle, handleVal)
    }

    /**
     * move a handle to a specific value, respecting the clamp/align rules
     * @param {number} index the index of the handle we want to move
     * @param {number} value the value to move the handle to
     * @return {number} the value that was moved to (after alignment/clamping)
     **/
    public moveHandle(index: number, value: number) {
        value = this.alignValueToStep(value)
        if ( typeof index === 'undefined' ) {
            index = this.activeHandle
        }
        if (this.range) {
            // restrict the handles of a range-slider from
            // going past one-another unless "pushy" is true
            if (index === 0 && value > this.values[1]) {
                if (this.pushy) {
                    this.values[1] = value
                } else {
                    value = this.values[1]
                }
            } else if (index === 1 && value < this.values[0]) {
                if (this.pushy) {
                    this.values[0] = value
                } else {
                    value = this.values[0]
                }
            }
        }

        // if the value has changed, update it
        if (this.values[index] !== value) {
            this.values[index] = value
        }

        // fire the change event when the handle moves,
        // and store the previous value for the next time
        if (this.previousValue !== value) {
            eChange()
            this.previousValue = value
        }
        return value
    }

    public rangeStart(values: number[]) 
    {
        if (this.range === "min") {
            return 0
        } else {
            return values[0]
        }
    }

    public rangeEnd(values: number[]) {
        if (this.range === "max") {
            return 0
        } else if (this.range === "min") {
            return 100 - values[0]
        } else {
            return 100 - values[1]
        }
    }

    public sliderBlurHandle() {
        if (this.keyboardActive) {
            this.focus = false
            this.handleActivated = false
            this.handlePressed = false
        }
    }

    public sliderInteractStart(event: Event) {
        if ( !this.disabled ) {
            const el = event.target
            const clientPos = this.normalisedClient(event as TouchEvent)
            // set the closest handle as active
            this.focus = true
            this.handleActivated = true
            this.handlePressed = true
            this.activeHandle = this.getClosestHandle(clientPos)

            // fire the start event
            startValue = previousValue = alignValueToStep(values[activeHandle])
            eStart()

            // for touch devices we want the handle to instantly
            // move to the position touched for more responsive feeling
            if (e.type === "touchstart" && !el.matches(".pipVal")) {
                handleInteract(clientPos)
            }
        }
    }

    /**
     * function to run when the user stops touching
     * down on the slider element anywhere
     * @param {event} e the event from browser
     **/
    function sliderInteractEnd(e) {
        // fire the stop event for touch devices
        if (e.type === "touchend") {
            eStop()
        }
        handlePressed = false
    }

    /**
     * unfocus the slider if the user clicked off of
     * it, somewhere else on the screen
     * @param {event} e the event from browser
     **/
    function bodyInteractStart(e) {
        keyboardActive = false
        if (focus && e.target !== slider && !slider.contains(e.target)) {
            focus = false
        }
    }

    /**
     * send the clientX through to handle the interaction
     * whenever the user moves acros screen while active
     * @param {event} e the event from browser
     **/
    function bodyInteract(e) {
        if ( !disabled ) {
            if (handleActivated) {
                handleInteract(normalisedClient(e))
            }
        }
    }

    /**
     * if user triggers mouseup on the body while
     * a handle is active (without moving) then we
     * trigger an interact event there
     * @param {event} e the event from browser
     **/
    function bodyMouseUp(e) {
        if ( !disabled ) {
            const el = e.target
            // this only works if a handle is active, which can
            // only happen if there was sliderInteractStart triggered
            // on the slider, already
            if (handleActivated) {
                if (el === slider || slider.contains(el)) {
                    focus = true
                    // don't trigger interact if the target is a handle (no need) or
                    // if the target is a label (we want to move to that value from rangePips)
                    if (!targetIsHandle(el) && !el.matches(".pipVal")) {
                        handleInteract(normalisedClient(e))
                    }
                }
                // fire the stop event for mouse device
                // when the body is triggered with an active handle
                eStop()
            }
        }
        handleActivated = false
        handlePressed = false
    }

    /**
     * if user triggers touchend on the body then we
     * defocus the slider completely
     * @param {event} e the event from browser
     **/
    function bodyTouchEnd(e) {
        handleActivated = false
        handlePressed = false
    }

    function bodyKeyDown(e) {
        if ( !disabled ) {
            if (e.target === slider || slider.contains(e.target)) {
                keyboardActive = true
            }
        }
    }

    function eStart() {
        !disabled && dispatch("start", {
            activeHandle,
            value: startValue,
            values: values.map((v) => alignValueToStep(v)),
        })
    }

    function eStop() {
        !disabled && dispatch("stop", {
            activeHandle,
            startValue: startValue,
            value: values[activeHandle],
            values: values.map((v) => alignValueToStep(v)),
        })
    }

    function eChange() {
        !disabled && dispatch("change", {
            activeHandle,
            startValue: startValue,
            previousValue: typeof previousValue === "undefined" ? startValue : previousValue,
            value: values[activeHandle],
            values: values.map((v) => alignValueToStep(v)),
        })
    }
}