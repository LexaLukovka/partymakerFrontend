import { combineReducers } from 'redux'
import authReducer from './auth.reducer'
import createParty from './createParty.reducer'
import partyCreateTags from './partyCreateTags.reducer'
import alertReducer from './alert.reducer'
import cargoReducer from './cargoReducer'
import filterReducer from './filter.reducer'
import settingsMenu from './settingsMenu.reducer'

export default combineReducers({
  authReducer,
  createParty,
  partyCreateTags,
  cargoReducer,
  filterReducer,
  alertReducer,
  settingsMenu,
})
