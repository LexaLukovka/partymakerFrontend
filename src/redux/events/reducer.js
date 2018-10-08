/* eslint-disable no-fallthrough */
import { CAN_SELECT, LOAD_EVENTS_PENDING, LOAD_EVENTS_REJECTED, LOAD_EVENTS_FULFILLED } from './action'
import eventActions, { OPEN_EVENT } from './event/action'
import eventReducer from './event/reducer'

const initialState = {
  loading: false,
  allLoaded: false,
  error: null,
  current: undefined,
  events: {},
  canSelect: false,
}

const eventsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_EVENTS_PENDING:
      return {
        ...state,
        loading: true,
      }

    case LOAD_EVENTS_REJECTED:
      return {
        ...state,
        loading: false,
        error: true,
      }

    case LOAD_EVENTS_FULFILLED: {
      const events = action.payload.data
      const eventReducers = {}
      events.forEach(event => {
        eventReducers[event.id] = eventReducer(undefined, eventActions.save(event))
      })

      return {
        ...state,
        loading: false,
        allLoaded: true,
        events: eventReducers,
      }
    }

    case OPEN_EVENT:
      return {
        ...state,
        current: state.events[action.payload],
      }

    case CAN_SELECT:
      return {
        ...state,
        canSelect: action.payload,
      }

    default: {
      const events = { ...state.events }
      const event = eventReducer(state.current, action)
      if (!event.id) events[event.id] = event

      return {
        ...state,
        events,
      }
    }
  }
}

export default eventsReducer
