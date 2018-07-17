import Party from '../services/api/Party'

export const PARTY_CARD_ICON = 'PARTY_CARD_ICON'

export const OPEN_PARTY_CARD_FORM = 'OPEN_PARTY_CARD_FORM'

export const partyCardIcon = name => ({
  type: PARTY_CARD_ICON,
  payload: Party.create(name),
})

export const openPartyCardForm = checked => ({
  type: OPEN_PARTY_CARD_FORM,
  payload: checked,
})
