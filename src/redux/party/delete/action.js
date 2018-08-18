import Party from 'services/api/Party'

import * as alert from 'src/redux/alert/action'

export const DELETE_PARTIES = 'DELETE_PARTIES'
export const DELETE_PARTIES_PENDING = 'DELETE_PARTIES_PENDING'
export const DELETE_PARTIES_REJECTED = 'DELETE_PARTIES_REJECTED'
export const DELETE_PARTIES_FULFILLED = 'DELETE_PARTIES_FULFILLED'

// noinspection JSUnusedGlobalSymbols
export const deleteParty = (id) => async dispatch => {
  await dispatch({
    type: DELETE_PARTIES,
    payload: Party.delete(id),
  })

  dispatch(alert.show('Вечеринка удалена'))
}
