import Party from '../../../services/api/Party'

export const OUTPUT_PARTY = 'OUTPUT_PARTY'
export const OUTPUT_PARTY_PENDING = 'OUTPUT_PARTY_PENDING'
export const OUTPUT_PARTY_REJECTED = 'OUTPUT_PARTY_REJECTED'
export const OUTPUT_PARTY_FULFILLED = 'OUTPUT_PARTY_FULFILLED'


export const outputParty = () => ({
  type: OUTPUT_PARTY,
  payload: Party.all(),
})
