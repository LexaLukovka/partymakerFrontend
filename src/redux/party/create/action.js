/* eslint-disable object-shorthand */
import Party from 'services/api/Party'

export const CREATE_PARTY = 'CREATE_PARTY'
export const CREATE_PARTY_PENDING = 'CREATE_PARTY_PENDING'
export const CREATE_PARTY_FULFILLED = 'CREATE_PARTY_FULFILLED'
export const CREATE_PARTY_REJECTED = 'CREATE_PARTY_REJECTED'
export const UPDATE_PARTY_FORM = 'UPDATE_PARTY_FORM'
export const RESET_PARTY_FORM = 'RESET_PARTY_FORM'

// noinspection JSUnusedGlobalSymbols
export const update = ({ step, ...form }) => ({
  type: UPDATE_PARTY_FORM,
  step: step,
  payload: form,
})

// noinspection JSUnusedGlobalSymbols
export const reset = () => ({
  type: RESET_PARTY_FORM,
})


// noinspection JSUnusedGlobalSymbols
export const create = form => ({
  type: CREATE_PARTY,
  payload: Party.create(form),
})

