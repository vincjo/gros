import type { Component } from 'svelte'

export default class ModalHandler
{
    public isActive     = $state<boolean>(false)
    public component    = $state<Component>(undefined)
    public props        = $state<any>(undefined)

    public open(component: Component, props = undefined)
    {
        this.isActive   = true
        this.component  = component
        this.props      = props
    }

    public close()
    {
        this.isActive   = false
        this.component  = undefined
        this.props      = undefined
    }
}