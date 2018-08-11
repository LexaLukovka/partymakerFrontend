import Party from 'src/services/api/Party'

export const LOAD_PARTY = 'LOAD_PARTY'
export const LOAD_PARTY_PENDING = 'LOAD_PARTY_PENDING'
export const LOAD_PARTY_REJECTED = 'LOAD_PARTY_REJECTED'
export const LOAD_PARTY_FULFILLED = 'LOAD_PARTY_FULFILLED'

// noinspection JSUnusedGlobalSymbols
export const show = (id) => ({
  type: LOAD_PARTY,
  payload: Party.find(id),
})
