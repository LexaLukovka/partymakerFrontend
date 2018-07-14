import Party from '../services/api/Party'

export const PARTY_CARD_ICON = 'PARTY_CARD_ICON'
export const PARTY_CARD_ICON_FULFILLED = 'PARTY_CARD_ICON_FULFILLED'
export const PARTY_CARD_ICON_REJECTED = 'PARTY_CARD_ICON_REJECTED'


export const partyCardIcon = name => ({
  type: PARTY_CARD_ICON,
  payload: Party.create(name),
})
