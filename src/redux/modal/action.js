export const SHOW_MODAL = 'SHOW_MODAL'
export const CLOSE_MODAL = 'CLOSE_MODAL'

const show = (data) => ({
  type: SHOW_MODAL,
  payload: data,
})

const close = () => ({
  type: CLOSE_MODAL,
})

export default { show, close }
