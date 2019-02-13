import { combineReducers } from 'redux'

export const initializeSession = () => ({
  type: 'INITIALIZE_SESSION',
})

const sessionReducer = (state = false, action) => {
  switch (action.type) {
    case 'INITIALIZE_SESSION':
      return true
    default:
      return state
  }
}

const dataReducer = (state = [], action) => {
  switch (action.type) {
    case 'STORE_DATA':
      return action.data
    default:
      return state
  }
}

export default combineReducers({
  loggedIn: sessionReducer,
  data: dataReducer,
})
