import { combineReducers } from 'redux'
import addCargoFormReducer from './createCargo.reducer'
import authReducer from './auth.reducer'
import popularRoutes from './popularRoutes.reducer'
import alertReducer from './alert.reducer'
import cargoReducer from './cargoReducer'
import filterReducer from './filter.reducer'

export default combineReducers({
  authReducer,
  addCargoFormReducer,
  popularRoutes,
  cargoReducer,
  filterReducer,
  alertReducer,
})
