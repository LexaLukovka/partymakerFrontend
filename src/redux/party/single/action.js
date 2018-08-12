import Party from 'src/services/api/Party'

export const LOAD_PARTY = 'LOAD_PARTY'
export const LOAD_PARTY_PENDING = 'LOAD_PARTY_PENDING'
export const LOAD_PARTY_REJECTED = 'LOAD_PARTY_REJECTED'
export const LOAD_PARTY_FULFILLED = 'LOAD_PARTY_FULFILLED'

export const CHANGE_PARTY = 'CHANGE_PARTY'
export const CHANGE_PARTY_PENDING = 'CHANGE_PARTY_PENDING'
export const CHANGE_PARTY_REJECTED = 'CHANGE_PARTY_REJECTED'
export const CHANGE_PARTY_FULFILLED = 'CHANGE_PARTY_FULFILLED'

// noinspection JSUnusedGlobalSymbols
export const show = (id) => ({
  type: LOAD_PARTY,
  payload: Party.find(id),
})

// noinspection JSUnusedGlobalSymbols
export const change = (id, settings) => ({
  type: CHANGE_PARTY,
  payload: Party.change(id, settings),
})

// noinspection JSUnusedGlobalSymbols
export const changeAddress = (id, settings) => ({
  type: CHANGE_PARTY,
  payload: Party.changeAddress(id, settings),
})
