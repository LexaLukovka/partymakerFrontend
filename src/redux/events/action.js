import Event from 'services/api/Event'

export const CAN_SELECT = 'CAN_SELECT'

export const LOAD_EVENTS = 'LOAD_EVENTS'
export const LOAD_EVENTS_PENDING = 'LOAD_EVENTS_PENDING'
export const LOAD_EVENTS_REJECTED = 'LOAD_EVENTS_REJECTED'
export const LOAD_EVENTS_FULFILLED = 'LOAD_EVENTS_FULFILLED'

// noinspection JSUnusedGlobalSymbols
export const load = ({ page, limit = 10 }) => ({
  type: LOAD_EVENTS,
  payload: Event.all({ page, limit }),
})

export const canSelect = (canSelected) => ({
  type: CAN_SELECT,
  payload: canSelected,
})
