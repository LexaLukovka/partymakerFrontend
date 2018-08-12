import {
  JOIN_PARTY_PENDING, JOIN_PARTY_REJECTED, JOIN_PARTY_FULFILLED,
  LEAVE_PARTY_PENDING, LEAVE_PARTY_REJECTED, LEAVE_PARTY_FULFILLED,
  LOAD_PARTY_MEMBERS_PENDING, LOAD_PARTY_MEMBERS_REJECTED, LOAD_PARTY_MEMBERS_FULFILLED,
  IS_PARTY_MEMBER_REJECTED, IS_PARTY_MEMBER_PENDING, IS_PARTY_MEMBER_FULFILLED,
} from './action'

const initialState = {
  loading: false,
  admin: null,
  isMember: null,
  users: [],
  currentUser: null,
  error: null,
}

const memberReducer = (state = initialState, { type, user, payload }) => {
  switch (type) {
    case IS_PARTY_MEMBER_PENDING:
      return {
        ...state,
        loading: true,
      }
    case IS_PARTY_MEMBER_REJECTED:
      return {
        ...state,
        loading: false,
        error: payload,
      }
    case IS_PARTY_MEMBER_FULFILLED:
      return {
        ...state,
        loading: false,
        isMember: payload.isMember,

      }

    case LOAD_PARTY_MEMBERS_PENDING:
      return {
        ...state,
        loading: true,
      }
    case LOAD_PARTY_MEMBERS_REJECTED:
      return {
        ...state,
        loading: false,
        error: payload,
      }
    case LOAD_PARTY_MEMBERS_FULFILLED:
      return {
        ...state,
        loading: false,
        admin: payload.admin,
        users: payload.data,
      }

    case JOIN_PARTY_PENDING:
      return {
        ...state,
        loading: true,
      }


    case JOIN_PARTY_REJECTED:
      return {
        ...state,
        loading: false,
        error: payload,
      }

    case JOIN_PARTY_FULFILLED:
      return {
        ...state,
        loading: false,
        isMember: true,
        message: payload.message,
      }

    case LEAVE_PARTY_PENDING:
      return {
        ...state,
        loading: true,
      }


    case LEAVE_PARTY_REJECTED:
      return {
        ...state,
        loading: false,
        error: payload.message,
      }

    case LEAVE_PARTY_FULFILLED:
      return {
        ...state,
        loading: false,
        isMember: false,
        message: payload.message,
      }

    default:
      return state
  }
}

export default memberReducer
