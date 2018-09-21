/* eslint-disable object-shorthand */
import Group from 'services/api/Group'

import * as alert from 'src/redux/alert/action'

export const RESET_GROUP_PLACE_FORM = 'RESET_GROUP_PLACE_FORM'

export const CREATE_GROUP = 'CREATE_GROUP'
export const CREATE_GROUP_PENDING = 'CREATE_GROUP_PENDING'
export const CREATE_GROUP_FULFILLED = 'CREATE_GROUP_FULFILLED'
export const CREATE_GROUP_REJECTED = 'CREATE_GROUP_REJECTED'

export const UPDATE_GROUP_FORM = 'UPDATE_GROUP_FORM'
export const RESET_GROUP_FORM = 'RESET_GROUP_FORM'

// noinspection JSUnusedGlobalSymbols
export const update = ({ ...form }) => ({
  type: UPDATE_GROUP_FORM,
  payload: form,
})

// noinspection JSUnusedGlobalSymbols
export const reset = () => ({
  type: RESET_GROUP_FORM,
})

// noinspection JSUnusedGlobalSymbols
export const resetPlace = () => ({
  type: RESET_GROUP_PLACE_FORM,
})

// noinspection JSUnusedGlobalSymbols
export const create = form => async dispatch => {
  await dispatch({
    type: CREATE_GROUP,
    payload: Group.create(form),
  })

  dispatch(alert.show('Компания создана'))
}

