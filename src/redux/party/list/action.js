import Party from '../../../services/api/Party'

export const OUTPUT_PARTY = 'OUTPUT_PARTY'
export const OUTPUT_PARTY_PENDING = 'OUTPUT_PARTY_PENDING'
export const OUTPUT_PARTY_REJECTED = 'OUTPUT_PARTY_REJECTED'
export const OUTPUT_PARTY_FULFILLED = 'OUTPUT_PARTY_FULFILLED'

export const SHOW_PARTY = 'SHOW_PARTY'
export const SHOW_PARTY_PENDING = 'SHOW_PARTY_PENDING'
export const SHOW_PARTY_REJECTED = 'SHOW_PARTY_REJECTED'
export const SHOW_PARTY_FULFILLED = 'SHOW_PARTY_FULFILLED'

export const outputParty = () => ({
  type: OUTPUT_PARTY,
  payload: Party.all(),
})

export const show = (id) => ({
  type: SHOW_PARTY,
  payload: Party.find(id),
})
