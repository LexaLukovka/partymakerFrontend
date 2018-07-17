import { combineReducers } from 'redux'
import authReducer from './auth.reducer'
import createParty from './createParty.reducer'
import partyCreateTags from './partyCreateTags.reducer'
import alertReducer from './alert.reducer'
import cargoReducer from './cargoReducer'
import filterReducer from './filter.reducer'
import settingsMenu from './settingsMenu.reducer'
import stepperNavigation from './stepperNavigation.reducer'

export default combineReducers({
  authReducer,
  partyCreateTags,
  stepperNavigation,
  createParty,
  cargoReducer,
  filterReducer,
  alertReducer,
  settingsMenu,
})
