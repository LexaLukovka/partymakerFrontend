import Party from 'services/api/Party'

export const LOAD_PARTIES = 'LOAD_PARTIES'
export const LOAD_PARTIES_PENDING = 'LOAD_PARTIES_PENDING'
export const LOAD_PARTIES_REJECTED = 'LOAD_PARTIES_REJECTED'
export const LOAD_PARTIES_FULFILLED = 'LOAD_PARTIES_FULFILLED'

// noinspection JSUnusedGlobalSymbols
export const load = () => ({
  type: LOAD_PARTIES,
  payload: Party.all(),
})
