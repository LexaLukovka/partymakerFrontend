import Group from 'services/api/Group'

import * as alert from 'src/redux/alert/action'

export const LOAD_GROUP = 'LOAD_GROUP'
export const LOAD_GROUP_PENDING = 'LOAD_GROUP_PENDING'
export const LOAD_GROUP_REJECTED = 'LOAD_GROUP_REJECTED'
export const LOAD_GROUP_FULFILLED = 'LOAD_GROUP_FULFILLED'

export const CHANGE_GROUP = 'CHANGE_GROUP'
export const CHANGE_GROUP_PENDING = 'CHANGE_GROUP_PENDING'
export const CHANGE_GROUP_REJECTED = 'CHANGE_GROUP_REJECTED'
export const CHANGE_GROUP_FULFILLED = 'CHANGE_GROUP_FULFILLED'


// noinspection JSUnusedGlobalSymbols
export const show = (id) => ({
  type: LOAD_GROUP,
  payload: Group.find(id),
})

// noinspection JSUnusedGlobalSymbols
export const change = (id, settings) => async dispatch => {
  await dispatch({
    type: CHANGE_GROUP,
    payload: Group.change(id, settings),
  })

  dispatch(alert.show('Вечеринка изменена'))
}
