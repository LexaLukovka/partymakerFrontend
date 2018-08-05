export const SET_HEADER_ICON = 'SET_HEADER_ICON'
export const SET_HEADER_TITLE = 'SET_HEADER_TITLE'
export const RESET_HEADER_TITLE = 'RESET_HEADER_TITLE'

// noinspection JSUnusedGlobalSymbols
export const setIcon = (icon) => ({
  type: SET_HEADER_ICON,
  payload: icon,
})

// noinspection JSUnusedGlobalSymbols
export const setTitle = title => ({
  type: SET_HEADER_TITLE,
  payload: title,
})

// noinspection JSUnusedGlobalSymbols
export const resetTitle = () => ({
  type: RESET_HEADER_TITLE,
})
