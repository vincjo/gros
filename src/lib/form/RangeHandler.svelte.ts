
export default class RangeHandler
{
    public min = $state(0)
    public max = $state(100)
    public initialValue = $state(0)
    public value = $state(0)


    // Node Bindings
    public element: HTMLElement
    public container: HTMLElement
    public thumb: HTMLElement
    public progressBar: HTMLElement

    // Internal State
    public elementX = $state(null)
    public currentThumb = $state(null)
    public holding = $derived(Boolean(this.currentThumb))
    public thumbHover = $state(false)
    public keydownAcceleration = $state(0)
    public accelerationTimer = $state(null)

    public mouseEventShield: HTMLDivElement

    public onchange: () => void

    constructor(value: number = 0, min: number = 0, max: number = 100, onchange = () => {})
    {
        this.value = value
        this.initialValue = value
        this.min = min
        this.max = max
        this.onchange = onchange
    }


    public setup(element: HTMLElement, container: HTMLElement, thumb: HTMLElement, progressBar: HTMLElement)
    {
        this.element = element
        this.container = container
        this.thumb = thumb
        this.progressBar = progressBar
        this.elementX = this.element.getBoundingClientRect().left
        // Mouse shield used onMouseDown to prevent any mouse events penetrating other elements,
        // ie. hover events on other elements while dragging. Especially for Safari
        this.mouseEventShield = document.createElement('div')
        this.mouseEventShield.setAttribute('class', 'mouse-over-shield')
        this.mouseEventShield.addEventListener('mouseover', (e) => {
            e.preventDefault()
            e.stopPropagation()
        })
    }

    public resizeWindow()
    {
        this.elementX = this.element.getBoundingClientRect().left
    }

    // Allows both bind:value and on:change for parent value retrieval
    public setValue(value: number)
    {
        this.value = value
        // dispatch('change', { value })
    }

    public onTrackEvent(event)
    {
        // Update value immediately before beginning drag
        this.updateValueOnEvent(event)
        this.onDragStart(event)
    }

    public onHover(event)
    {
        this.thumbHover = this.thumbHover ? false : true
    }

    public onDragStart(event: Event)
    {
        // If mouse event add a pointer events shield
        if (event.type === 'mousedown') document.body.append(this.mouseEventShield)
        this.currentThumb = this.thumb
    }

    public onDragEnd(event: MouseEvent | TouchEvent)
    {
        // If using mouse - remove pointer event shield
        if (event.type === 'mouseup') {
            if (document.body.contains(this.mouseEventShield))
            document.body.removeChild(this.mouseEventShield)
            // Needed to check whether thumb and mouse overlap after shield removed
            if (this.isMouseInElement(event as MouseEvent, this.thumb)) this.thumbHover = true
        }
        this.currentThumb = null
    }

    public isMouseInElement(event: MouseEvent, element: HTMLElement)
    {
        // Check if mouse event cords overlay with an element's area
        const rect = element.getBoundingClientRect()
        const { clientX: x, clientY: y } = event
        if (x < rect.left || x >= rect.right) return false
        if (y < rect.top || y >= rect.bottom) return false
        return true
    }

    // Accessible keypress handling
    public onKeyPress(event: KeyboardEvent) {
        // Max out at +/- 10 to value per event (50 events / 5)
        // 100 below is to increase the amount of events required to reach max velocity
        if (this.keydownAcceleration < 50) this.keydownAcceleration++
        const throttled = Math.ceil(this.keydownAcceleration / 5)

        if (event.key === 'ArrowUp' || event.key === 'ArrowRight') {
            if (this.value + throttled > this.max || this.value >= this.max) {
                this.setValue(this.max)
            } else {
                this.setValue(this.value + throttled)
            }
        }
        if (event.key === 'ArrowDown' || event.key === 'ArrowLeft') {
            if (this.value - throttled < this.min || this.value <= this.min) {
                this.setValue(this.min)
            } else {
                this.setValue(this.value - throttled)
            }
        }

        // Reset acceleration after 100ms of no events
        clearTimeout(this.accelerationTimer)
        this.accelerationTimer = setTimeout(() => (this.keydownAcceleration = 1), 100)
    }

    public calculateNewValue(clientX: number) {
        // Find distance between cursor and element's left cord (20px / 2 = 10px) - Center of thumb
        const delta = clientX - (this.elementX + 10)

        // Use width of the container minus (5px * 2 sides) offset for percent calc
        let percent = (delta * 100) / (this.container.clientWidth - 10)

        // Limit percent 0 -> 100
        percent = percent < 0 ? 0 : percent > 100 ? 100 : percent

        // Limit value min -> max
        this.setValue((percent * (this.max - this.min) / 100) + this.min)
      }

    // Handles both dragging of touch/mouse as well as simple one-off click/touches
    public updateValueOnEvent(event: any)
    {
        // touchstart && mousedown are one-off updates, otherwise expect a currentPointer node
        if (!this.currentThumb && event.type !== 'touchstart' && event.type !== 'mousedown')
        return false

        if (event.stopPropagation) event.stopPropagation()
        if (event.preventDefault) event.preventDefault()

        // Get client's x cord either touch or mouse
        if (event.type === 'touchmove' || event.type === 'touchstart') {
            this.calculateNewValue(event.touches[0].clientX)
        }
        else {
            this.calculateNewValue(event.clientX)
        }
    }
}





