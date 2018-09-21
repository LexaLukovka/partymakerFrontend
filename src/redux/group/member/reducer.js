import {
  JOIN_GROUP_PENDING, JOIN_GROUP_REJECTED, JOIN_GROUP_FULFILLED,
  LEAVE_GROUP_PENDING, LEAVE_GROUP_REJECTED, LEAVE_GROUP_FULFILLED,
  LOAD_GROUP_MEMBERS_PENDING, LOAD_GROUP_MEMBERS_REJECTED, LOAD_GROUP_MEMBERS_FULFILLED,
  IS_GROUP_MEMBER_REJECTED, IS_GROUP_MEMBER_PENDING, IS_GROUP_MEMBER_FULFILLED,
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
    case IS_GROUP_MEMBER_PENDING:
      return {
        ...state,
        loading: true,
      }
    case IS_GROUP_MEMBER_REJECTED:
      return {
        ...state,
        loading: false,
        error: payload,
      }
    case IS_GROUP_MEMBER_FULFILLED:
      return {
        ...state,
        loading: false,
        isMember: payload.isMember,

      }

    case LOAD_GROUP_MEMBERS_PENDING:
      return {
        ...state,
        loading: true,
      }
    case LOAD_GROUP_MEMBERS_REJECTED:
      return {
        ...state,
        loading: false,
        error: payload,
      }
    case LOAD_GROUP_MEMBERS_FULFILLED:
      return {
        ...state,
        loading: false,
        admin: payload.admin,
        users: payload.data,
      }

    case JOIN_GROUP_PENDING:
      return {
        ...state,
        loading: true,
      }


    case JOIN_GROUP_REJECTED:
      return {
        ...state,
        loading: false,
        error: payload,
      }

    case JOIN_GROUP_FULFILLED:
      return {
        ...state,
        loading: false,
        isMember: true,
        message: payload.message,
      }

    case LEAVE_GROUP_PENDING:
      return {
        ...state,
        loading: true,
      }


    case LEAVE_GROUP_REJECTED:
      return {
        ...state,
        loading: false,
        error: payload.message,
      }

    case LEAVE_GROUP_FULFILLED:
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
