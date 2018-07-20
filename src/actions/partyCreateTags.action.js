import popularRoutes from '../mock/partyCreateTags.json'

export const LOAD_PARTY_CREATE_TAGS_PENDING = 'LOAD_PARTY_CREATE_TAGS_PENDING'
export const LOAD_PARTY_CREATE_TAGS_FULFILLED = 'LOAD_PARTY_CREATE_TAGS_FULFILLED'

export const loadPartyTags = () => dispatch => {
  dispatch({
    type: LOAD_PARTY_CREATE_TAGS_PENDING,
  })
  setTimeout(() => dispatch({
    type: LOAD_PARTY_CREATE_TAGS_FULFILLED,
    payload: popularRoutes,
  }), 500)
}
