import Event from 'services/api/Event'

export const LOAD_EVENT = 'LOAD_EVENT'
export const LOAD_EVENT_PENDING = 'LOAD_EVENT_PENDING'
export const LOAD_EVENT_REJECTED = 'LOAD_EVENT_REJECTED'
export const LOAD_EVENT_FULFILLED = 'LOAD_EVENT_FULFILLED'

// noinspection JSUnusedGlobalSymbols
export const find = (id) => ({
  type: LOAD_EVENT,
  payload: Event.find(id),
})
