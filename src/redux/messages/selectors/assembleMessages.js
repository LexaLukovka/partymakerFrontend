import { createSelector } from 'reselect'

const assembleMessages = (messages, assets, users) => {
  return Object.values(messages).map(message => ({
    ...message,
    asset: assets[message.asset_id],
    user: users[message.user_id],
  }))
}

export default createSelector(
  state => state.messages.entities,
  state => state.assets.entities,
  state => state.users.entities,
  assembleMessages
)
