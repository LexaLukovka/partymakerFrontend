import { createSelector } from 'reselect/lib/index'
import assembleMessages from 'src/redux/messages/selectors/assembleMessages'
import assembleUsers from 'src/redux/users/selectors/assembleUsers'
import assemblePlaces from 'src/redux/places/selectors/assemblePlaces'

const assembleAssets = (assets, messages, users, places) => {
  return assets.map(asset => ({
    ...asset,
    messages: asset.messages_ids.map(id => messages[id]),
    guests: asset.guests_ids.map(id => users[id]),
    place: places[asset.place_id]
  }))
}

export default createSelector(
  state => state.assets.entities,
  state => assembleMessages(state),
  state => assembleUsers(state),
  state => assemblePlaces(state),
  assembleAssets,
)
