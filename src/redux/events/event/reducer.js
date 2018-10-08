import { LOAD_EVENT_FULFILLED, LOAD_EVENT_PENDING, LOAD_EVENT_REJECTED, SAVE_EVENT } from './action'

const initialState = {
  id: null,
  title: '',
  admin: {},
  address: {},
  price: '',
  pictures: [],
  working_hours: '',
  date: '',
  description: '',
}

const eventReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_EVENT_PENDING:
      return {
        ...state,
        loading: true,
      }

    case LOAD_EVENT_REJECTED:
      return {
        ...state,
        loading: false,
        error: true,
      }

    case SAVE_EVENT:
    case LOAD_EVENT_FULFILLED:
      return {
        ...state,
        id: payload.id,
        title: payload.title,
        admin: payload.admin,
        address: payload.address,
        price: payload.price,
        pictures: payload.pictures.map(p => p.url),
        working_hours: payload.working_hours,
        date: payload.date,
        description: payload.description,
      }

    default:
      return { ...state }
  }
}

export default eventReducer
