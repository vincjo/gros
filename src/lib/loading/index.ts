import LoadingHandler from './LoadingHandler.svelte'
export { default as Loading }       from './Loading.svelte'
export { default as Stretch }       from './spinner/Stretch.svelte'
export { default as Diamonds }      from './spinner/Diamonds.svelte'
export { default as Jumper }        from './spinner/Jumper.svelte'
export { default as RingLoader }    from './spinner/RingLoader.svelte'
export { default as Pulse }         from './spinner/Pulse.svelte'
export { default as Jellyfish }     from './spinner/Jellyfish.svelte'
export { default as Moon }          from './spinner/Moon.svelte'
export { default as BarLoader }     from './spinner/BarLoader.svelte'

export const loading = new LoadingHandler()