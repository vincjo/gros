export { default as Input }         from './Input.svelte'
export { default as Textarea }      from './Textarea.svelte'
export { default as DateHandler }   from './DatePicker/DateHandler.svelte'
export { default as DatePicker }    from './DatePicker.svelte'
export { default as DateInput }     from './DateInput.svelte'
export { default as Checkbox }      from './Checkbox.svelte'
export { default as ColorPicker }   from './ColorPicker.svelte'
export { default as ColorHandler }  from './ColorPicker/ColorHandler.svelte'
export { default as Select }        from './Select.svelte'
export { default as Range }         from './Range.svelte'

export type Error = { field: string; message: string }
export type Locale = { weekdays: string[]; months: string[] }
export type Option = { value?: string | number | boolean, label?: string, icon?: string }

export const check = (data: Object, fields: string[], message = 'Information requise') => {
    let errors = []
    for (const field of fields) {
        if (!data[field]) {
            errors = [ { field: field, message: message }, ...errors ]
        }
    }
    return errors
}