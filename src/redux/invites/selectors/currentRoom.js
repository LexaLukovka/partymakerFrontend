import { createSelector } from 'reselect/lib/index'
import assembleMessages from 'src/redux/messages/selectors/assembleMessages'

const currentInvite = (invites, messagesArray, users, places, invite_id, totalMessages) => {

  const invite = invites[invite_id]

  if (!invite) return null

  return {
    ...invite,
    messages: messagesArray.filter(m => m.invite_id === invite.id),
    guests: invite.guests_ids.map(id => users[id]),
    place: places[invite.place_id],
    totalMessages,
  }
}

export default createSelector(
  state => state.invites.entities,
  state => assembleMessages(state),
  state => state.users.entities,
  state => state.places.entities,
  state => state.invites.status.invite_id,
  state => state.invites.status.messages.total,
  currentInvite,
)
