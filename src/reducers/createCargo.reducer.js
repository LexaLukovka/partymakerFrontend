import {
  ADD_FORM_ITEM,
  CREATE_CARGO_FULFILLED,
  CREATE_CARGO_PENDING, CREATE_CARGO_REJECTED,
  REMOVE_FORM_ITEM,
  UPDATE_MAP,
  SEARCH_FORM_ITEM,
} from '../actions/createCargo.action'

const initialState = {
  badges: [
    { title: 'название' },
    { from: 'откуда' },
    { to: 'куда' },
    { time: 'время' },
    { date_from: 'дата отправки' },
    { pictures: 'фото' },
    { dimensions: 'размеры' },
    { weight: 'вес' },
    { date_to: 'дата доставки' },
    { volume: 'обьём' },
    { description: 'описание' },
    { transport_type: 'тип транспорта' },
    { payment: 'оплата' },
  ],
  required: ['title', 'from', 'to'],
  selected: ['title', 'from', 'to'],
  loading: false,
  success: false,
  error: false,
  value: '',
  map: [],
}

const addCargo = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_FORM_ITEM: {
      const selected = [...state.selected]
      selected.push(payload)
      return {
        ...state,
        selected,
      }
    }

    case REMOVE_FORM_ITEM: {
      const selected = [...state.selected]
      return {
        ...state,
        selected: selected.filter((filter) => filter !== payload),
      }
    }

    case CREATE_CARGO_PENDING: {
      return {
        ...state,
        loading: true,
      }
    }

    case CREATE_CARGO_FULFILLED: {
      return {
        ...state,
        success: payload,
      }
    }

    case CREATE_CARGO_REJECTED: {
      return {
        ...state,
        error: payload,
      }
    }

    case UPDATE_MAP: {
      const map = { ...state.map }
      map.from = payload.name === 'from' ? payload.value : map.from
      map.to = payload.name === 'to' ? payload.value : map.to

      return {
        ...state,
        map,
      }
    }

    case SEARCH_FORM_ITEM: {
      return {
        ...state,
        value: payload,
      }
    }

    default: {
      return state
    }
  }
}

export default addCargo
