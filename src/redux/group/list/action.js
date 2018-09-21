import Group from 'services/api/Group'

export const LOAD_GROUPS = 'LOAD_GROUPS'
export const LOAD_GROUPS_PENDING = 'LOAD_GROUPS_PENDING'
export const LOAD_GROUPS_REJECTED = 'LOAD_GROUPS_REJECTED'
export const LOAD_GROUPS_FULFILLED = 'LOAD_GROUPS_FULFILLED'

// noinspection JSUnusedGlobalSymbols
export const load = (searchParams) => ({
  type: LOAD_GROUPS,
  payload: Group.all(searchParams),
})
