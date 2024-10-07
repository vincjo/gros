
export default class RangeHandler
{
    public min = $state(0)
    public max = $state(100)
    public initialValue = $state(0)
    public value = $state(0)

    public element: HTMLElement
    public container: HTMLElement
    public thumb: HTMLElement
    public progressBar: HTMLElement

    public elementX = $state(null)
    public currentThumb = $state(null)
    public holding = $derived(Boolean(this.currentThumb))
    public thumbHover = $state(false)
    public keydownAcceleration = $state(0)
    public accelerationTimer = $state(null)

    public mouseEventShield: HTMLDivElement

    public onchange: (event?: Event) => void

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

    public setValue(value: number)
    {
        this.value = value
    }

    public onTrackEvent(event)
    {
        this.updateValueOnEvent(event)
        this.onDragStart(event)
    }

    public onHover(event)
    {
        this.thumbHover = this.thumbHover ? false : true
    }

    public onDragStart(event: Event)
    {
        if (event.type === 'mousedown') document.body.append(this.mouseEventShield)
        this.currentThumb = this.thumb
    }

    public onDragEnd(event: MouseEvent | TouchEvent)
    {
        if (event.type === 'mouseup') {
            if (document.body.contains(this.mouseEventShield))
            document.body.removeChild(this.mouseEventShield)
            if (this.isMouseInElement(event as MouseEvent, this.thumb)) this.thumbHover = true
        }
        this.currentThumb = null
    }

    public isMouseInElement(event: MouseEvent, element: HTMLElement)
    {
        const rect = element.getBoundingClientRect()
        const { clientX: x, clientY: y } = event
        if (x < rect.left || x >= rect.right) return false
        if (y < rect.top || y >= rect.bottom) return false
        return true
    }

    public onKeyPress(event: KeyboardEvent) {
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
        clearTimeout(this.accelerationTimer)
        this.accelerationTimer = setTimeout(() => (this.keydownAcceleration = 1), 100)
    }

    public calculateNewValue(clientX: number) {
        const delta = clientX - (this.elementX + 10)
        let percent = (delta * 100) / (this.container.clientWidth - 10)
        percent = percent < 0 ? 0 : percent > 100 ? 100 : percent
        this.setValue((percent * (this.max - this.min) / 100) + this.min)
      }

    public updateValueOnEvent(event: any)
    {
        if (!this.currentThumb && event.type !== 'touchstart' && event.type !== 'mousedown')
        return false

        if (event.stopPropagation) event.stopPropagation()
        if (event.preventDefault) event.preventDefault()
        if (event.type === 'touchmove' || event.type === 'touchstart') {
            this.calculateNewValue(event.touches[0].clientX)
            this.onchange(event)
        }
        else {
            this.calculateNewValue(event.clientX)
            this.onchange(event)
        }
    }
}