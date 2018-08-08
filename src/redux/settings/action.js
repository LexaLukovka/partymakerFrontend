import Settings from 'src/services/api/Settings'

export const CHANGE_SETTINGS = 'CHANGE_SETTINGS'
export const CHANGE_SETTINGS_PENDING = 'CHANGE_SETTINGS_PENDING'
export const CHANGE_SETTINGS_REJECTED = 'CHANGE_SETTINGS_REJECTED'
export const CHANGE_SETTINGS_FULFILLED = 'CHANGE_SETTINGS_FULFILLED'

// noinspection JSUnusedGlobalSymbols
export const change = (settings) => ({
  type: CHANGE_SETTINGS,
  payload: Settings.change(settings),
})
