export const SHOW_ALERT = 'SHOW_ALERT'
export const HIDE_ALERT = 'HIDE_ALERT'

// noinspection JSUnusedGlobalSymbols
export const show = (message) => ({
  type: SHOW_ALERT,
  payload: message,
})

// noinspection JSUnusedGlobalSymbols
export const hide = () => ({
  type: HIDE_ALERT,
})

