export default class LoadingHandler
{
    public active       = $state(false)
    public message      = $state('')
    public submessage   = $state('')

    public start(message: string = '', submessage: string = '')
    {
        this.active     = true
        this.message    = message
        this.submessage = submessage
    }

    public stop()
    {
        this.active     = false
        this.message    = ''
        this.submessage = ''
    }
}