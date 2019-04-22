import { createSelector } from 'reselect/lib/index'
import assembleAssets from './assembleAssets'

const currentAsset = (assets, asset_id) => {

  return assets[asset_id]
}

export default createSelector(
  state => assembleAssets(state),
  state => state,
  currentAsset,
)
