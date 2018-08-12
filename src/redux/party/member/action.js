import Party from 'services/api/Party'

export const JOIN_PARTY = 'JOIN_PARTY'
export const JOIN_PARTY_PENDING = 'JOIN_PARTY_PENDING'
export const JOIN_PARTY_REJECTED = 'JOIN_PARTY_REJECTED'
export const JOIN_PARTY_FULFILLED = 'JOIN_PARTY_FULFILLED'


export const LEAVE_PARTY = 'LEAVE_PARTY'
export const LEAVE_PARTY_PENDING = 'LEAVE_PARTY_PENDING'
export const LEAVE_PARTY_REJECTED = 'LEAVE_PARTY_REJECTED'
export const LEAVE_PARTY_FULFILLED = 'LEAVE_PARTY_FULFILLED'

export const IS_PARTY_MEMBER = 'IS_PARTY_MEMBER'
export const IS_PARTY_MEMBER_PENDING = 'IS_PARTY_MEMBER_PENDING'
export const IS_PARTY_MEMBER_FULFILLED = 'IS_PARTY_MEMBER_FULFILLED'
export const IS_PARTY_MEMBER_REJECTED = 'IS_PARTY_MEMBER_REJECTED'

export const LOAD_PARTY_MEMBERS = 'LOAD_PARTY_MEMBERS'
export const LOAD_PARTY_MEMBERS_PENDING = 'LOAD_PARTY_MEMBERS_PENDING'
export const LOAD_PARTY_MEMBERS_FULFILLED = 'LOAD_PARTY_MEMBERS_FULFILLED'
export const LOAD_PARTY_MEMBERS_REJECTED = 'LOAD_PARTY_MEMBERS_REJECTED'

// noinspection JSUnusedGlobalSymbols
export const isMember = (party_id) => ({
  type: IS_PARTY_MEMBER,
  payload: Party.isMember(party_id),
})

// noinspection JSUnusedGlobalSymbols
export const load = (party_id) => ({
  type: LOAD_PARTY_MEMBERS,
  payload: Party.users(party_id),
})

// noinspection JSUnusedGlobalSymbols
export const join = (party_id) => ({
  type: JOIN_PARTY,
  payload: Party.join(party_id),
})

// noinspection JSUnusedGlobalSymbols
export const leave = (party_id) => ({
  type: LEAVE_PARTY,
  payload: Party.leave(party_id),
})
