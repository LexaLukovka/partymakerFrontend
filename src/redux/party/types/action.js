export const SELECT_PARTY_TYPE = 'SELECT_PARTY_TYPE'
export const RESET_PARTY_TYPE = 'RESET_PARTY_TYPE'

export const select = name => ({
  type: SELECT_PARTY_TYPE,
  payload: name,
})

export const reset = () => ({
  type: RESET_PARTY_TYPE,
})

