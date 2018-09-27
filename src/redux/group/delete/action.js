import Group from 'services/api/Group'

import * as alert from 'src/redux/alert/action'

export const OPEN_DELETE = 'OPEN_DELETE'
export const CLOSE_DELETE = 'CLOSE_DELETE'

export const DELETE_GROUP = 'DELETE_GROUP'
export const DELETE_GROUP_PENDING = 'DELETE_GROUP_PENDING'
export const DELETE_GROUPS_REJECTED = 'DELETE_GROUPS_REJECTED'
export const DELETE_GROUPS_FULFILLED = 'DELETE_GROUPS_FULFILLED'


// noinspection JSUnusedGlobalSymbols
export const open = () => ({
  type: OPEN_DELETE,
})

// noinspection JSUnusedGlobalSymbols
export const close = () => ({
  type: CLOSE_DELETE,
})

// noinspection JSUnusedGlobalSymbols
export const deleteGroup = (group_id) => async dispatch => {
  await dispatch({
    type: DELETE_GROUP,
    payload: Group.delete(group_id),
  })

  dispatch(alert.show('Компания удалена'))
}
