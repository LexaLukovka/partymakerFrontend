/* eslint-disable class-methods-use-this */
import Cache from '../Cache'
import Http from '../Http'

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

  create() {
    const iconForm = Cache.get('icon')
    const form = Cache.get('form')
    const finishForm = Cache.get('finish')
    const icon = { icon: iconForm }

    return Http.post('/party', { icon, form, finishForm })
  }
}

export default new Party()
