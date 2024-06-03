import type { Component } from 'svelte'

export default class ModalHandler 
{
    public isActive     = $state<boolean>(false)
    public component    = $state<Component>(null)
    public props        = $state<any>(null)

    public open(component: Component, props: any = null)
    {
        this.isActive   = true
        this.component  = component
        this.props      = props
    }

    public close()
    {
        this.isActive   = false
        this.component  = null
        this.props      = null
    }
}