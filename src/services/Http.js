/* eslint-disable dot-notation,class-methods-use-this */
import axios from 'axios'
import to from 'util-to'
import store from '../store'
import { BACKEND_URL } from 'services/constants'

class Http {
  constructor() {
    this.instance = axios.create({
      baseURL: BACKEND_URL,
      timeout: 10000,
    })
  }

  handleError(err) {
    if (err) {
      if (err.response) {
        throw err.response.data
      } else {
        throw err
      }
    }
  }

  refreshToken() {
    const { user } = store.getState().authReducer
    if (user) {
      const { headers } = this.instance.defaults
      headers.common['Authorization'] = `Bearer ${user.token.replace(/^"(.*)"$/, '$1')}`
    }
  }

  async request(method, url, params, config) {
    this.refreshToken()
    const [err, response] = await to(this.instance[method](url, params, config))
    this.handleError(err)

    return response.data
  }

  get(url, params) {
    return this.request('get', url, params)
  }

  post(url, params, config) {
    return this.request('post', url, params, config)
  }

  put(url, params) {
    return this.request('put', url, params)
  }

  delete(url, params) {
    return this.request('delete', url, params)
  }
}

export default new Http()

