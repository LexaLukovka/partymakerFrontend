import Cargo from '../services/api/Cargo'

export const ADD_FORM_ITEM = 'ADD_FORM_ITEM'
export const REMOVE_FORM_ITEM = 'REMOVE_FORM_ITEM'
export const SEARCH_FORM_ITEM = 'SEARCH_FORM_ITEM'

export const CREATE_CARGO = 'CREATE_CARGO'
export const CREATE_CARGO_PENDING = 'CREATE_CARGO_PENDING'
export const CREATE_CARGO_FULFILLED = 'CREATE_CARGO_FULFILLED'
export const CREATE_CARGO_REJECTED = 'CREATE_CARGO_REJECTED'
export const UPDATE_MAP = 'UPDATE_MAP'
// noinspection JSUnusedGlobalSymbols
export const add = formItem => ({
  type: ADD_FORM_ITEM,
  payload: formItem,
})

// noinspection JSUnusedGlobalSymbols
export const remove = formItem => ({
  type: REMOVE_FORM_ITEM,
  payload: formItem,
})

// noinspection JSUnusedGlobalSymbols
export const updateMap = (name, values) => ({
  type: UPDATE_MAP,
  payload: {
    name,
    value: {
      lat: values.geometry.location.lat(),
      lng: values.geometry.location.lng(),
    },
  },
})

// noinspection JSUnusedGlobalSymbols
export const submit = (form) => ({
  type: CREATE_CARGO,
  payload: Cargo.create(form),
})

export const search = formItem => ({
  type: SEARCH_FORM_ITEM,
  payload: formItem,
})
