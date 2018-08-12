import Party from 'services/api/Party'

export const USER_LOAD_PARTIES = 'USER_LOAD_PARTIES'
export const USER_LOAD_PARTIES_PENDING = 'USER_LOAD_PARTIES_PENDING'
export const USER_LOAD_PARTIES_REJECTED = 'USER_LOAD_PARTIES_REJECTED'
export const USER_LOAD_PARTIES_FULFILLED = 'USER_LOAD_PARTIES_FULFILLED'

// noinspection JSUnusedGlobalSymbols
export const userLoad = () => ({
  type: USER_LOAD_PARTIES,
  payload: Party.userParty(),
})
