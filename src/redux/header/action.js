export const HIDE_BACK = 'HIDE_BACK'
export const SHOW_BACK = 'SHOW_BACK'
export const CREATE_PARTY = 'CREATE_PARTY'
export const PARTIES_ID = 'PARTIES_ID'
export const CLOSE_SCENE = 'CLOSE_SCENE'

// noinspection JSUnusedGlobalSymbols
export const hideBack = () => ({
  type: HIDE_BACK,
})

// noinspection JSUnusedGlobalSymbols
export const showBack = () => ({
  type: SHOW_BACK,
})

// noinspection JSUnusedGlobalSymbols
export const createPartyTitle = () => ({
  type: CREATE_PARTY,
})

// noinspection JSUnusedGlobalSymbols
export const partiesIdTitle = (title) => ({
  type: PARTIES_ID,
  payload: title,
})

// noinspection JSUnusedGlobalSymbols
export const closeTitle = () => ({
  type: CLOSE_SCENE,
})
