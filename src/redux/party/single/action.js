import Party from 'src/services/api/Party'

export const SHOW_PARTY = 'SHOW_PARTY'
export const SHOW_PARTY_PENDING = 'SHOW_PARTY_PENDING'
export const SHOW_PARTY_REJECTED = 'SHOW_PARTY_REJECTED'
export const SHOW_PARTY_FULFILLED = 'SHOW_PARTY_FULFILLED'

export const show = (id) => ({
  type: SHOW_PARTY,
  payload: Party.find(id),
})
