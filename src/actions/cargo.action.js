/* eslint-disable no-shadow */
import Cargo from '../services/api/Cargo'

export const LOAD_CARGO = 'LOAD_CARGO'
export const LOAD_CARGO_PENDING = 'LOAD_CARGO_PENDING'
export const LOAD_CARGO_FULFILLED = 'LOAD_CARGO_FULFILLED'
export const LOAD_CARGO_REJECTED = 'LOAD_CARGO_REJECTED'

export const SHOW_CARGO = 'SHOW_CARGO'

// noinspection JSUnusedGlobalSymbols
export const show = (id) => ({
  type: SHOW_CARGO,
  payload: id,
})

// noinspection JSUnusedGlobalSymbols
export const load = () => ({
  type: LOAD_CARGO,
  payload: Cargo.paginate({ limit: 10, page: 1 }),
})

// noinspection JSUnusedGlobalSymbols
export const filter = (filter) => ({
  type: LOAD_CARGO,
  payload: Cargo.paginate({ filter }),
})
