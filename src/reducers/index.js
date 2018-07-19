import { combineReducers } from 'redux'
import authReducer from './auth.reducer'
import createParty from './createParty.reducer'
import partyCreateTags from './partyCreateTags.reducer'
import alertReducer from './alert.reducer'
import settingsMenu from './settingsMenu.reducer'
import stepperNavigation from './stepperNavigation.reducer'
import partiesReducer from './parties.reducer'
import partyReducer from './party.reducer'

export default combineReducers({
  authReducer,
  partiesReducer,
  partyReducer,
  partyCreateTags,
  stepperNavigation,
  createParty,
  alertReducer,
  settingsMenu,
})
