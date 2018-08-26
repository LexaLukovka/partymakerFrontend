import Party from 'services/api/Party'

import * as alert from 'src/redux/alert/action'

export const LOAD_PARTY = 'LOAD_PARTY'
export const LOAD_PARTY_PENDING = 'LOAD_PARTY_PENDING'
export const LOAD_PARTY_REJECTED = 'LOAD_PARTY_REJECTED'
export const LOAD_PARTY_FULFILLED = 'LOAD_PARTY_FULFILLED'

export const CHANGE_PARTY = 'CHANGE_PARTY'
export const CHANGE_PARTY_PENDING = 'CHANGE_PARTY_PENDING'
export const CHANGE_PARTY_REJECTED = 'CHANGE_PARTY_REJECTED'
export const CHANGE_PARTY_FULFILLED = 'CHANGE_PARTY_FULFILLED'

export const DELETE_PARTY_PICTURE = 'DELETE_PARTY_PICTURE'
export const DELETE_PARTY_PICTURE_PENDING = 'DELETE_PARTY_PICTURE_PENDING'
export const DELETE_PARTY_PICTURE_REJECTED = 'DELETE_PARTY_PICTURE_REJECTED'
export const DELETE_PARTY_PICTURE_FULFILLED = 'DELETE_PARTY_PICTURE_FULFILLED'

export const ADD_PARTY_PICTURE = 'ADD_PARTY_PICTURE'
export const ADD_PARTY_PICTURE_PENDING = 'ADD_PARTY_PICTURE_PENDING'
export const ADD_PARTY_PICTURE_REJECTED = 'ADD_PARTY_PICTURE_REJECTED'
export const ADD_PARTY_PICTURE_FULFILLED = 'ADD_PARTY_PICTURE_FULFILLED'

// noinspection JSUnusedGlobalSymbols
export const show = (id) => ({
  type: LOAD_PARTY,
  payload: Party.find(id),
})

// noinspection JSUnusedGlobalSymbols
export const change = (id, settings) => async dispatch => {
  await dispatch({
    type: CHANGE_PARTY,
    payload: Party.change(id, settings),
  })

  dispatch(alert.show('Вечеринка изменина'))
}

// noinspection JSUnusedGlobalSymbols
export const addImg = (id, image) => ({
  type: ADD_PARTY_PICTURE,
  payload: Party.addImg(id, image),
})

// noinspection JSUnusedGlobalSymbols
export const deleteImg = (image) => ({
  type: DELETE_PARTY_PICTURE,
  payload: Party.deleteImg(image),
})
