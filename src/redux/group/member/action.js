import Group from 'services/api/Group'

export const JOIN_GROUP = 'JOIN_GROUP'
export const JOIN_GROUP_PENDING = 'JOIN_GROUP_PENDING'
export const JOIN_GROUP_REJECTED = 'JOIN_GROUP_REJECTED'
export const JOIN_GROUP_FULFILLED = 'JOIN_GROUP_FULFILLED'


export const LEAVE_GROUP = 'LEAVE_GROUP'
export const LEAVE_GROUP_PENDING = 'LEAVE_GROUP_PENDING'
export const LEAVE_GROUP_REJECTED = 'LEAVE_GROUP_REJECTED'
export const LEAVE_GROUP_FULFILLED = 'LEAVE_GROUP_FULFILLED'

export const IS_GROUP_MEMBER = 'IS_GROUP_MEMBER'
export const IS_GROUP_MEMBER_PENDING = 'IS_GROUP_MEMBER_PENDING'
export const IS_GROUP_MEMBER_FULFILLED = 'IS_GROUP_MEMBER_FULFILLED'
export const IS_GROUP_MEMBER_REJECTED = 'IS_GROUP_MEMBER_REJECTED'

export const LOAD_GROUP_MEMBERS = 'LOAD_GROUP_MEMBERS'
export const LOAD_GROUP_MEMBERS_PENDING = 'LOAD_GROUP_MEMBERS_PENDING'
export const LOAD_GROUP_MEMBERS_FULFILLED = 'LOAD_GROUP_MEMBERS_FULFILLED'
export const LOAD_GROUP_MEMBERS_REJECTED = 'LOAD_GROUP_MEMBERS_REJECTED'

// noinspection JSUnusedGlobalSymbols
export const isMember = (group_id) => ({
  type: IS_GROUP_MEMBER,
  payload: Group.isMember(group_id),
})

// noinspection JSUnusedGlobalSymbols
export const load = (group_id) => ({
  type: LOAD_GROUP_MEMBERS,
  payload: Group.users(group_id),
})

// noinspection JSUnusedGlobalSymbols
export const join = (group_id) => ({
  type: JOIN_GROUP,
  payload: Group.join(group_id),
})

// noinspection JSUnusedGlobalSymbols
export const leave = (group_id, user_id) => ({
  type: LEAVE_GROUP,
  payload: Group.leave(group_id, user_id),
})
