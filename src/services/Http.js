/* eslint-disable dot-notation */
import axios from 'axios'
import to from '../utils/to'
import Token from './Token'
import store from '../store'

class Http {
  constructor() {
    this.instance = axios.create({
      baseURL: 'http://localhost:3333',
      // baseURL: 'http://94.237.84.15',
      timeout: 10000,
      headers: { Authorization: Token.get() },
    })
  }

  async get(url, params) {
    const { token } = store.getState().authReducer
    this.instance.defaults.headers.common['Authorization'] = token

    const [err, response] = await to(this.instance.get(url, params))
    if (err) {
      if (!err.response) {
        throw err.response.data
      }
      throw err.response
    }

    return response.data
  }

  async post(url, params) {
    const { token } = store.getState().authReducer
    this.instance.defaults.headers.common['Authorization'] = token

    const [err, response] = await to(this.instance.post(url, params))

    if (err) {
      if (!err.response) {
        throw err.response.data
      }
      throw err.response
    }

    return response.data
  }
}

export default new Http()

