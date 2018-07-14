/* eslint-disable class-methods-use-this */
import Cache from '../Cache'

class Party {
  create(name) {
    Cache.put('icon', name)
    return name
  }
}

export default new Party()
