import { createSelector } from 'reselect'
import sortBy from 'lodash/sortBy'

const assembleMessages = (messages, assets, users) => {
  return sortBy(
    Object.values(messages).map(message => ({
      ...message,
      asset: assets[message.asset_id],
      user: users[message.user_id],
    })),
    'created_at'
  )
}

export default createSelector(
  state => state.messages.entities,
  state => state.assets.entities,
  state => state.users.entities,
  assembleMessages
)
