import { createSelector } from 'reselect'

const currentInvite = (invites, invite_id) => {
  return invites[invite_id]
}

export default createSelector(
  state => state.invites.entities,
  state => state.invites.status.invite_id,
  currentInvite,
)
