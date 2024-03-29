export { default as Input } from './Input.svelte'
export { default as Textarea } from './Textarea.svelte'
export { default as Range } from './Range.svelte'
export { default as DatePicker } from './DatePicker.svelte'
export { default as DateInput } from './DateInput.svelte'
export { default as Checkbox } from './Checkbox.svelte'
export { default as ColorPicker } from './ColorPicker.svelte'
export { default as ColorHandler } from './ColorPicker/ColorHandler'
export { default as Select } from './Select.svelte'

export type error = { field: string; message: string }
export type locale = { weekdays: string[]; months: string[] }

export const check = (data: Object, fields: string[], message = 'Information requise') => {
    let errors = []
    for (const field of fields) {
        if (!data[field]) {
            errors = [ { field: field, message: message }, ...errors ]
        }
    }
    return errors
}