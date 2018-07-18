/* eslint-disable class-methods-use-this */
import Cache from '../Cache'

class Party {
  createIcon(name) {
    Cache.put('icon', name)
    return name
  }

  createForm(form) {
    Cache.put('form', form)
    return form
  }

  createFinish(form) {
    Cache.put('finish', form)
    return form
  }
}

export default new Party()
