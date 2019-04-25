import Asset from 'api/Asset'

export const LOAD_ASSETS = 'LOAD_ASSETS'
export const LOAD_ASSETS_PENDING = 'LOAD_ASSETS_PENDING'
export const LOAD_ASSETS_FULFILLED = 'LOAD_ASSETS_FULFILLED'
export const LOAD_ASSETS_REJECTED = 'LOAD_ASSETS_REJECTED'

export const LOAD_ASSET = 'LOAD_ASSET'
export const LOAD_ASSET_PENDING = 'LOAD_ASSET_PENDING'
export const LOAD_ASSET_FULFILLED = 'LOAD_ASSET_FULFILLED'
export const LOAD_ASSET_REJECTED = 'LOAD_ASSET_REJECTED'

export const CREATE_ASSET = 'CREATE_ASSET'
export const CREATE_ASSET_PENDING = 'CREATE_ASSET_PENDING'
export const CREATE_ASSET_FULFILLED = 'CREATE_ASSET_FULFILLED'
export const CREATE_ASSET_REJECTED = 'CREATE_ASSET_REJECTED'

export const UPDATE_ASSET = 'UPDATE_ASSET'
export const UPDATE_ASSET_PENDING = 'UPDATE_ASSET_PENDING'
export const UPDATE_ASSET_FULFILLED = 'UPDATE_ASSET_FULFILLED'
export const UPDATE_ASSET_REJECTED = 'UPDATE_ASSET_REJECTED'

export const DESTROY_ASSET = 'DESTROY_ASSET'
export const DESTROY_ASSET_PENDING = 'DESTROY_ASSET_PENDING'
export const DESTROY_ASSET_FULFILLED = 'DESTROY_ASSET_FULFILLED'
export const DESTROY_ASSET_REJECTED = 'DESTROY_ASSET_REJECTED'

export const SET_ASSET = 'SET_ASSET'
export const SET_ASSETS = 'SET_ASSETS'
export const REMOVE_ASSET = 'REMOVE_ASSET'
export const SET_CURRENT_ASSET = 'SET_CURRENT_ASSET'

/**
 * Async actions. Making API requests
 */

const list = () => ({
  type: LOAD_ASSETS,
  payload: Asset.list()
})

const create = () => ({
  type: CREATE_ASSET,
  payload: Asset.create()
})

const update = (id, form) => ({
  type: UPDATE_ASSET,
  payload: Asset.update(id, form)
})

const destroy = (asset_id) => ({
  type: UPDATE_ASSET,
  payload: Asset.destroy(asset_id),
  meta: { asset_id }
})

/**
 * Sync actions. Updating store
 */

const setMany = assets => ({
  type: SET_ASSETS,
  payload: assets,
})

const set = asset => ({
  type: SET_ASSET,
  payload: asset,
})

const remove = asset_id => ({
  type: REMOVE_ASSET,
  payload: asset_id,
})

export default {
  list,
  create,
  update,
  set,
  setMany,
  destroy,
  remove,
}
