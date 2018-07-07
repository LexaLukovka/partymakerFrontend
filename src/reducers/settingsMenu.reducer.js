import { SETTINGS_MENU } from '../actions/settingsMenu.action'

const initialState = {
  menuItem: 0,
}

const settingsMenu = (state = initialState, { type, payload }) => {
  switch (type) {
    case SETTINGS_MENU: {
      return {
        menuItem: payload,
      }
    }
    default: {
      return state
    }
  }
}

export default settingsMenu
