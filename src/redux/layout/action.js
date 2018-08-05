export const SET_PAGE_BACKGROUND = 'SET_PAGE_BACKGROUND'
export const REMOVE_PAGE_BACKGROUND = 'REMOVE_PAGE_BACKGROUND'

// noinspection JSUnusedGlobalSymbols
export const background = (url) => ({
  type: SET_PAGE_BACKGROUND,
  payload: url,
})

// noinspection JSUnusedGlobalSymbols
export const removeBackground = () => ({
  type: REMOVE_PAGE_BACKGROUND,
})
