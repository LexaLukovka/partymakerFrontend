import Event from 'services/api/Event'

export const LOAD_EVENT = 'LOAD_EVENT'
export const LOAD_EVENT_PENDING = 'LOAD_EVENT_PENDING'
export const LOAD_EVENT_REJECTED = 'LOAD_EVENT_REJECTED'
export const LOAD_EVENT_FULFILLED = 'LOAD_EVENT_FULFILLED'

export const SAVE_EVENT = 'SAVE_EVENT'
export const OPEN_EVENT = 'OPEN_EVENT'

// noinspection JSUnusedGlobalSymbols
export const load = (id) => ({
  type: LOAD_EVENT,
  payload: Event.find(id),
})

export const save = event => ({
  type: SAVE_EVENT,
  payload: event,
})

export const open = event_id => ({
  type: OPEN_EVENT,
  payload: event_id,
})

export default {
  save,
  open,
  load,
}
