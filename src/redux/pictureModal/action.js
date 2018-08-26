export const SHOW_PICTURE_MODAL = 'SHOW_PICTURE_MODAL'
export const HIDE_PICTURE_MODAL = 'HIDE_PICTURE_MODAL'

// noinspection JSUnusedGlobalSymbols
export const show = (picture_url) => ({
  type: SHOW_PICTURE_MODAL,
  payload: picture_url,
})

// noinspection JSUnusedGlobalSymbols
export const hide = () => ({
  type: HIDE_PICTURE_MODAL,
})

