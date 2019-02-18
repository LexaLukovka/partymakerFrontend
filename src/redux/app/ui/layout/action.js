export const SET_PAGE_BACKGROUND = 'SET_PAGE_BACKGROUND'
export const REMOVE_PAGE_BACKGROUND = 'REMOVE_PAGE_BACKGROUND'

const background = (url) => ({
  type: SET_PAGE_BACKGROUND,
  payload: url,
})

const removeBackground = () => ({
  type: REMOVE_PAGE_BACKGROUND,
})

export default { background, removeBackground }
