export { default as Input } from './Input.svelte'
export { default as Textarea } from './Textarea.svelte'
export { default as Range } from './Range.svelte'
export { default as DatePicker } from './DatePicker.svelte'
export { default as DateInput } from './DateInput.svelte'

export type error = { field: string; message: string }
export type locale = { weekdays: string[]; months: string[] }