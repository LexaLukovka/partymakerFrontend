export const SHOW_ACTION_BUTTON = 'SHOW_ACTION_BUTTON'
export const HIDE_ACTION_BUTTON = 'HIDE_ACTION_BUTTON'

// noinspection JSUnusedGlobalSymbols
export const show = (message) => ({
  type: SHOW_ACTION_BUTTON,
  payload: message,
})

// noinspection JSUnusedGlobalSymbols
export const hide = () => ({
  type: HIDE_ACTION_BUTTON,
})

