import Party from '../../../services/api/Party'

export const PARTY_CARD_ICON_CHECK = 'PARTY_CARD_ICON_CHECK'
export const PARTY_CARD_ICON = 'PARTY_CARD_ICON'
export const PARTY_CARD_FORM = 'PARTY_CARD_FORM'
export const PARTY_CARD_FINISH = 'PARTY_CARD_FINISH'
export const PARTY_PRIVATE_CHECK = 'PARTY_PRIVATE_CHECK'
export const CREATE_PARTY = 'CREATE_PARTY'
export const CREATE_PARTY_FULFILLED = 'CREATE_PARTY_FULFILLED'
export const CREATE_PARTY_REJECTED = 'CREATE_PARTY_REJECTED'

export const partyCardIconCheck = name => ({
  type: PARTY_CARD_ICON_CHECK,
  payload: name,
})

export const partyPrivateChecked = checked => ({
  type: PARTY_PRIVATE_CHECK,
  payload: checked,
})

export const partyCardIcon = name => ({
  type: PARTY_CARD_ICON,
  payload: Party.createIcon(name),
})

export const partyCardForm = form => ({
  type: PARTY_CARD_FORM,
  payload: Party.createForm(form),
})

export const partyCardFinish = form => ({
  type: PARTY_CARD_FINISH,
  payload: Party.createFinish(form),
})

export const createPartyCard = () => ({
  type: CREATE_PARTY,
  payload: Party.createParty(),
})
