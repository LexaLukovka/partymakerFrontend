export const ADD_FILTER_ITEM = 'ADD_FILTER_ITEM'
export const REMOVE_FILTER_ITEM = 'REMOVE_FILTER_ITEM'

// noinspection JSUnusedGlobalSymbols
export const add = formItem => ({
  type: ADD_FILTER_ITEM,
  payload: formItem,
})

// noinspection JSUnusedGlobalSymbols
export const remove = formItem => ({
  type: REMOVE_FILTER_ITEM,
  payload: formItem,
})
