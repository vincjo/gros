

export default class RangeHandler
{
    public value        = $state(0)
    public min          = $state<number>(0)
    public max          = $state<number>(100)
    private container   = $state(null)
    private thumb       = $state(null)
    private element     = $state(null)
  
    private elementX            = $state(null)
    private currentThumb        = $state(null)
    private thumbHover          = $state(false)

    private mouseEventShield = document.createElement('div')

    constructor(value: number, min: number, max: number)
    {
        this.value = value
        this.min = min
        this.max = max
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

    public onTrackEvent(e: MouseEvent) 
    {
        this.updateValueOnEvent(e)
        this.onDragStart(e)
    }
    
    public onHover(e: Event) 
    {
        this.thumbHover = this.thumbHover ? false : true
    }
    
    public onDragStart(e: Event) 
    {
        if (e.type === 'mousedown') document.body.append(this.mouseEventShield)
        this.currentThumb = this.thumb
    }
    
    public onDragEnd(e: MouseEvent) 
    {
        if (e.type === 'mouseup') {
            if (document.body.contains(this.mouseEventShield))
                document.body.removeChild(this.mouseEventShield)
            if (this.isMouseInElement(e, this.thumb)) this.thumbHover = true
        }
        this.currentThumb = null
    }
    
    public isMouseInElement(e: MouseEvent, element: HTMLElement) 
    {
            const rect = element.getBoundingClientRect()
            const { clientX: x, clientY: y } = e
            if (x < rect.left || x >= rect.right ) return false
            if (y < rect.top  || y >= rect.bottom) return false
            return true
    }
    
    public calculateNewValue(clientX: number) 
    {
        const delta = clientX - (this.elementX + 10)
        let percent = (delta * 100) / (this.container.clientWidth - 10)
        percent = percent < 0 ? 0 : percent > 100 ? 100 : percent
        this.setValue(Number((percent * (this.max - this.min)) / 100) + this.min)
    }
    
    public updateValueOnEvent(e: MouseEvent) 
    {
        if (!this.currentThumb && e.type !== 'touchstart' && e.type !== 'mousedown') {
            return false
        }
        if (e.stopPropagation) e.stopPropagation()
        if (e.preventDefault) e.preventDefault()
        const clientX = e.clientX
    
        this.calculateNewValue(clientX)
    }
}