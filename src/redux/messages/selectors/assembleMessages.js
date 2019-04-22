import { createSelector } from 'reselect'

const assembleMessages = (messages, assets) => {
  return messages.map(message => ({
    ...message,
    asset: assets[message.asset_id]
  }))
}

export default createSelector(
  state => state.messages.entities,
  state => state.assets.entities,
  assembleMessages,
)
