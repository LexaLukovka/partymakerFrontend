import Party from 'services/api/Party'

export const LOAD_PARTIES = 'LOAD_PARTIES'
export const LOAD_PARTIES_PENDING = 'LOAD_PARTIES_PENDING'
export const LOAD_PARTIES_REJECTED = 'LOAD_PARTIES_REJECTED'
export const LOAD_PARTIES_FULFILLED = 'LOAD_PARTIES_FULFILLED'

export const USER_LOAD_PARTIES = 'USER_LOAD_PARTIES'
export const USER_LOAD_PARTIES_PENDING = 'USER_LOAD_PARTIES_PENDING'
export const USER_LOAD_PARTIES_REJECTED = 'USER_LOAD_PARTIES_REJECTED'
export const USER_LOAD_PARTIES_FULFILLED = 'USER_LOAD_PARTIES_FULFILLED'


// noinspection JSUnusedGlobalSymbols
export const load = (searchParams) => ({
  type: LOAD_PARTIES,
  payload: Party.all(searchParams),
})

// noinspection JSUnusedGlobalSymbols
export const userLoad = (id) => ({
  type: USER_LOAD_PARTIES,
  payload: Party.userParty(id),
})
