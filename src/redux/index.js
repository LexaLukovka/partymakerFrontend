import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import placesReducer from './places/reducer'
import layoutReducer from './layout/reducer'
import headerReducer from './header/reducer'
import modalReducer from './modal/reducer'

const persistConfig = {
  key: 'root',
  storage,
}

const reducers = combineReducers({
  placesReducer,
  modalReducer,
  layoutReducer,
  headerReducer,
})

export default persistReducer(persistConfig, reducers)
