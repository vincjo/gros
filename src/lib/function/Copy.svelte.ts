
export default class Copy
{
    public state = $state<string>('Copier')

    public text(value: string)
    {
        navigator.clipboard.writeText(value).then(() => {
            this.state = 'Copié !'
            setTimeout( () => {
                this.state = 'Copier'
            }, 1000)
        }, (err) => {
            console.error('Async: Could not copy text: ', err);
        })
    }

    public json(value: Object)
    {
        navigator.clipboard.writeText(JSON.stringify(value)).then(() => {
            this.state = 'Copié !'
            setTimeout( () => {
                this.state = 'Copier'
            }, 1000)
        }, (err) => {
            console.error('Async: Could not copy text: ', err);
        })
    }

    public paste(type: 'text' | 'json', callback: (value: unknown) => void)
    {
        navigator.clipboard.readText()
        .then(clipText => {
            if (type === 'json') {
                const json = JSON.parse(clipText)
                return callback(json)
            }
            return callback(clipText)
        })
    }
}
